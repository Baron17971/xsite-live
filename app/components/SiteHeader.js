'use client';

import { useEffect, useRef, useState } from 'react';

const themes = [
  ['cream','בורדו + שמנת'],
  ['sage','בורדו + מרווה'],
  ['mauve','סגלגל + מאוב'],
  ['ink','כחול דיו + טורקיז'],
  ['coral','טורקיז + קורל'],
  ['cocoa','קקאו + סלרי + אפרסק'],
  ['botanical','בוטני חם']
];

function loadGoogleScript(){
  return new Promise((resolve,reject)=>{
    if(window.google?.accounts?.oauth2) return resolve();
    const existing=document.querySelector('script[data-xsite-google]');
    if(existing){
      existing.addEventListener('load',()=>resolve(),{once:true});
      existing.addEventListener('error',reject,{once:true});
      return;
    }
    const s=document.createElement('script');
    s.src='https://accounts.google.com/gsi/client';
    s.async=true;
    s.defer=true;
    s.dataset.xsiteGoogle='true';
    s.onload=()=>resolve();
    s.onerror=reject;
    document.head.appendChild(s);
  });
}

export default function SiteHeader({ active='home' }){
  const [user,setUser]=useState(null);
  const [busy,setBusy]=useState(false);
  const [loginOpen,setLoginOpen]=useState(false);
  const [basicError,setBasicError]=useState('');
  const tokenRef=useRef(null);
  const clientId=process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(()=>{
    try{
      const saved=sessionStorage.getItem('xsite-google-user');
      if(saved) setUser(JSON.parse(saved));
      tokenRef.current=sessionStorage.getItem('xsite-google-token');
    }catch{}
  },[]);

  async function googleLogin(){
    if(!clientId){
      window.alert('חיבור Google טרם הוגדר. יש להוסיף NEXT_PUBLIC_GOOGLE_CLIENT_ID ב־Vercel.');
      return;
    }
    setBusy(true);
    try{
      await loadGoogleScript();
      const client=window.google.accounts.oauth2.initTokenClient({
        client_id:clientId,
        scope:'openid email profile',
        callback:async(response)=>{
          try{
            if(response.error) throw new Error(response.error);
            const profile=await fetch('https://www.googleapis.com/oauth2/v3/userinfo',{
              headers:{Authorization:`Bearer ${response.access_token}`}
            }).then(r=>{
              if(!r.ok) throw new Error('userinfo');
              return r.json();
            });
            const nextUser={
              name:profile.name || profile.email || 'משתמש',
              email:profile.email || '',
              picture:profile.picture || ''
            };
            tokenRef.current=response.access_token;
            sessionStorage.setItem('xsite-google-token',response.access_token);
            sessionStorage.setItem('xsite-google-user',JSON.stringify(nextUser));
            setUser(nextUser);
            setLoginOpen(false);
          }finally{
            setBusy(false);
          }
        }
      });
      client.requestAccessToken({prompt:'select_account'});
    }catch{
      setBusy(false);
      window.alert('לא הצלחנו לפתוח את ההתחברות ל־Google. נסו שוב.');
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
      sessionStorage.setItem('xsite-google-user',JSON.stringify(nextUser));
      sessionStorage.removeItem('xsite-google-token');
      tokenRef.current=null;
      setUser(nextUser);
      setLoginOpen(false);
    }catch(error){
      setBasicError(error.message || 'לא הצלחנו להתחבר');
    }finally{
      setBusy(false);
    }
  }

  async function logout(){
    const token=tokenRef.current;
    try{
      if(token){
        await loadGoogleScript();
        window.google.accounts.oauth2.revoke(token,()=>{});
      }
    }catch{}
    tokenRef.current=null;
    sessionStorage.removeItem('xsite-google-token');
    sessionStorage.removeItem('xsite-google-user');
    setUser(null);
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
          <button className="primary auth-button auth-button-login" onClick={()=>setLoginOpen(true)}>
            התחבר
          </button>
        )}
      </div>

      {loginOpen && (
        <div className="login-modal-backdrop" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setLoginOpen(false)}}>
          <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
            <button className="login-close" type="button" aria-label="סגירה" onClick={()=>setLoginOpen(false)}>×</button>
            <p className="eyebrow">כניסה ל־Xsite</p>
            <h2 id="login-title">מתחברים וממשיכים</h2>
            <p className="login-subtitle">אפשר להתחבר עם Google או באמצעות שם משתמש וסיסמה.</p>

            <button className="google-login-button" type="button" onClick={googleLogin} disabled={busy}>
              <span className="google-g" aria-hidden="true">G</span>
              <span>{busy ? 'מתחבר…' : 'המשך עם Google'}</span>
            </button>

            <div className="login-divider"><span>או</span></div>

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
