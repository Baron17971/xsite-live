'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const themes = [
  ['cream','בורדו + שמנת'],
  ['sage','בורדו + מרווה'],
  ['mauve','סגלגל + מאוב'],
  ['ink','כחול דיו + טורקיז'],
  ['coral','טורקיז + קורל'],
  ['cocoa','קקאו + סלרי + אפרסק'],
  ['botanical','בוטני חם']
];

export default function SiteHeader({ active='home' }){
  const [user,setUser]=useState(null);
  const [busy,setBusy]=useState(false);
  const [loginOpen,setLoginOpen]=useState(false);
  const [authMode,setAuthMode]=useState('login');
  const [basicError,setBasicError]=useState('');
  const [authSource,setAuthSource]=useState(null);

  useEffect(()=>{
    let mounted=true;

    async function loadSession(){
      const { data } = await supabase.auth.getSession();
      if(!mounted) return;

      if(data.session?.user){
        const u=data.session.user;
        setUser({
          name:u.user_metadata?.full_name || u.user_metadata?.name || u.email || 'משתמש',
          email:u.email || '',
          picture:u.user_metadata?.avatar_url || u.user_metadata?.picture || ''
        });
        setAuthSource('supabase');
        return;
      }

      try{
        const saved=sessionStorage.getItem('xsite-basic-user');
        if(saved){
          setUser(JSON.parse(saved));
          setAuthSource('basic');
        }
      }catch{}
    }

    loadSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event,session)=>{
      if(!mounted) return;
      if(session?.user){
        const u=session.user;
        setUser({
          name:u.user_metadata?.full_name || u.user_metadata?.name || u.email || 'משתמש',
          email:u.email || '',
          picture:u.user_metadata?.avatar_url || u.user_metadata?.picture || ''
        });
        setAuthSource('supabase');
      }else if(authSource==='supabase'){
        setUser(null);
        setAuthSource(null);
      }
    });

    return ()=>{
      mounted=false;
      listener.subscription.unsubscribe();
    };
  },[]);

  async function googleLogin(){
    setBusy(true);
    setBasicError('');
    try{
      const { error } = await supabase.auth.signInWithOAuth({
        provider:'google',
        options:{
          redirectTo:`${window.location.origin}/`,
          queryParams:{
            access_type:'offline',
            prompt:'select_account'
          }
        }
      });
      if(error) throw error;
    }catch{
      setBusy(false);
      setBasicError('לא הצלחנו לפתוח את ההתחברות ל־Google. נסו שוב.');
    }
  }

  async function basicLogin(event){
    event.preventDefault();
    setBasicError('');
    setBusy(true);
    const form=new FormData(event.currentTarget);
    const username=String(form.get('username') || '').trim();
    const password=String(form.get('password') || '');
    try{
      const response=await fetch('/api/auth/basic',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password})
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(data.error || 'פרטי ההתחברות אינם נכונים');
      const nextUser={
        name:data.name || username,
        email:'',
        picture:''
      };
      sessionStorage.setItem('xsite-basic-user',JSON.stringify(nextUser));
      setUser(nextUser);
      setAuthSource('basic');
      setLoginOpen(false);
    }catch(error){
      setBasicError(error.message || 'לא הצלחנו להתחבר');
    }finally{
      setBusy(false);
    }
  }

  async function logout(){
    if(authSource==='supabase'){
      await supabase.auth.signOut();
    }
    sessionStorage.removeItem('xsite-basic-user');
    setUser(null);
    setAuthSource(null);
  }

  return (
    <header className="topbar">
      <div className="actions auth-actions">
        {user ? (
          <div className="logged-user">
            {user.picture ? (
              <img className="user-avatar" src={user.picture} alt={user.name} title={user.email || user.name} />
            ) : (
              <span className="user-avatar user-initial" title={user.name}>{(user.name || 'מ').slice(0,1)}</span>
            )}
            <button className="primary auth-button auth-button-login" onClick={logout}>התנתק</button>
          </div>
        ) : (
          <button className="primary auth-button auth-button-login" onClick={()=>{setAuthMode('login');setBasicError('');setLoginOpen(true)}}>
            התחבר
          </button>
        )}
      </div>

      {loginOpen && (
        <div className="login-modal-backdrop" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setLoginOpen(false)}}>
          <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
            <button className="login-close" type="button" aria-label="סגירה" onClick={()=>setLoginOpen(false)}>×</button>

            <p className="eyebrow">{authMode==='login' ? 'כניסה ל־Xsite' : 'יצירת חשבון ב־Xsite'}</p>
            <h2 id="login-title">{authMode==='login' ? 'מתחברים וממשיכים' : 'יוצרים חשבון ומתחילים'}</h2>
            <p className="login-subtitle">
              {authMode==='login'
                ? 'אפשר להתחבר עם Google או באמצעות שם משתמש וסיסמה.'
                : 'אפשר ליצור חשבון עם Google או באמצעות שם משתמש וסיסמה.'}
            </p>

            <button className="google-login-button" type="button" onClick={googleLogin} disabled={busy}>
              <span className="google-g" aria-hidden="true">G</span>
              <span>{busy ? 'מתחבר…' : (authMode==='login' ? 'המשך עם Google' : 'הרשמה עם Google')}</span>
            </button>

            <div className="login-divider"><span>או</span></div>

            {authMode==='login' ? (
              <form className="basic-login-form" onSubmit={basicLogin}>
                <label>
                  <span>שם משתמש</span>
                  <input name="username" autoComplete="username" required />
                </label>
                <label>
                  <span>סיסמה</span>
                  <input name="password" type="password" autoComplete="current-password" required />
                </label>
                {basicError && <p className="login-error" role="alert">{basicError}</p>}
                <button className="primary basic-login-submit" type="submit" disabled={busy}>
                  {busy ? 'מתחבר…' : 'התחבר'}
                </button>
              </form>
            ) : (
              <form className="basic-login-form signup-form" onSubmit={(e)=>{e.preventDefault();setBasicError('יצירת חשבון בשם משתמש וסיסמה תופעל לאחר חיבור מסד המשתמשים. אפשר כבר עכשיו להירשם באמצעות Google.')}}>
                <label>
                  <span>שם מלא</span>
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>שם משתמש</span>
                  <input name="username" autoComplete="username" required />
                </label>
                <label>
                  <span>סיסמה</span>
                  <input name="password" type="password" autoComplete="new-password" required minLength="6" />
                </label>
                <label>
                  <span>אימות סיסמה</span>
                  <input name="confirmPassword" type="password" autoComplete="new-password" required minLength="6" />
                </label>
                {basicError && <p className="login-error" role="alert">{basicError}</p>}
                <button className="primary basic-login-submit" type="submit">
                  צור חשבון
                </button>
              </form>
            )}

            <div className="auth-switch">
              <span>{authMode==='login' ? 'עדיין אין לך חשבון?' : 'כבר יש לך חשבון?'}</span>
              <button
                type="button"
                onClick={()=>{setAuthMode(authMode==='login' ? 'signup' : 'login');setBasicError('')}}
              >
                {authMode==='login' ? 'יצירת חשבון' : 'חזרה להתחברות'}
              </button>
            </div>
          </section>
        </div>
      )}

      <div className="header-theme-center">
        <a className="nav-themes" href="#theme-menu">
          <span className="theme-trigger-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          Themes
        </a>
        <span id="theme-menu" className="theme-panel header-theme-panel">
          <span className="theme-panel-head">
            <strong>ערכת עיצוב</strong>
            <small>כלי בנייה זמני</small>
          </span>
          <span className="theme-options">
            {themes.map(([key,label])=>(
              <a className={`theme-option theme-option-${key}`} href={`#theme-${key}`} key={key}>
                <span className={`theme-swatches ${key}-swatches`} aria-hidden="true"><i></i><i></i><i></i></span>
                <span>{label}</span>
              </a>
            ))}
          </span>
        </span>
      </div>

      <nav>
        <a className={active==='home' ? 'active' : ''} href="/">בית</a>
        <a className={active==='apps' ? 'active' : ''} href="/apps">אפליקציות</a>
        <a href="/#teachers">למורים</a>
        <a href="/#how">איך זה עובד</a>
        <a href="/#about">אודות</a>
      </nav>

      <a className="brandmark" href="/" aria-label="Xsite">
        <span className="site-logo-monochrome" aria-hidden="true"></span>
      </a>
    </header>
  );
}
