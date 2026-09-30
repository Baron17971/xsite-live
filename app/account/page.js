'use client';

import { useEffect, useMemo, useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import { supabase } from '../lib/supabaseClient';

const appLinks = {
  mapi: 'https://mapi-interactive.vercel.app/',
  bingo: 'https://classroom-bingo-live.vercel.app',
  linkup: 'https://linkup-classroom-live.vercel.app',
  domiknow: 'https://domiknow.vercel.app',
  'four-on-four': '/four-on-four',
  'x-squared': '/x-squared'
};

const projectEditLinks = {
  mapi: (projectId)=>`https://mapi-interactive.vercel.app/?edit=${encodeURIComponent(projectId)}`,
  bingo: (projectId)=>`https://classroom-bingo-live.vercel.app/?edit=${encodeURIComponent(projectId)}`,
  linkup: (projectId)=>`https://linkup-classroom-live.vercel.app/?edit=${encodeURIComponent(projectId)}`,
  domiknow: (projectId)=>`https://domiknow.vercel.app/?edit=${encodeURIComponent(projectId)}`,
  'four-on-four': (projectId)=>`/four-on-four/teacher.html?edit=${encodeURIComponent(projectId)}`,
  'x-squared': (projectId)=>`/x-squared/teacher.html?edit=${encodeURIComponent(projectId)}`
};

function ThemeAnchors(){
  return (
    <>
      <div id="theme-cream" className="theme-anchor"></div>
      <div id="theme-sage" className="theme-anchor"></div>
      <div id="theme-mauve" className="theme-anchor"></div>
      <div id="theme-ink" className="theme-anchor"></div>
      <div id="theme-coral" className="theme-anchor"></div>
      <div id="theme-cocoa" className="theme-anchor"></div>
      <div id="theme-botanical" className="theme-anchor"></div>
    </>
  );
}

function formatUpdatedDate(value){
  if(!value) return '';
  return new Intl.DateTimeFormat('he-IL',{
    day:'numeric',
    month:'short',
    year:'numeric'
  }).format(new Date(value));
}

export default function AccountPage(){
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState(null);
  const [profile,setProfile]=useState(null);
  const [apps,setApps]=useState([]);
  const [entitlements,setEntitlements]=useState([]);
  const [projects,setProjects]=useState([]);
  const [error,setError]=useState('');

  useEffect(()=>{
    let mounted=true;

    async function load(){
      setLoading(true);
      setError('');

      const { data: sessionData } = await supabase.auth.getSession();
      const currentUser=sessionData.session?.user || null;

      if(!mounted) return;
      setUser(currentUser);

      if(!currentUser){
        setLoading(false);
        return;
      }

      const [profileRes, appsRes, entitlementRes, projectRes] = await Promise.all([
        supabase
          .from('profiles')
          .select('id,email,display_name,avatar_url,role,created_at')
          .eq('id',currentUser.id)
          .maybeSingle(),
        supabase
          .from('apps')
          .select('id,name,description,access_mode,is_listed,sort_order')
          .eq('is_listed',true)
          .order('sort_order',{ascending:true}),
        supabase
          .from('entitlements')
          .select('id,app_id,status,starts_at,expires_at,source_type')
          .eq('teacher_id',currentUser.id)
          .eq('status','active'),
        supabase
          .from('teacher_projects')
          .select('id,app_id,title,subject,grade,thumbnail_url,image,is_favorite,version,created_at,updated_at')
          .eq('teacher_id',currentUser.id)
          .order('updated_at',{ascending:false})
      ]);

      if(!mounted) return;

      const firstError = profileRes.error || appsRes.error || entitlementRes.error || projectRes.error;
      if(firstError){
        setError('לא הצלחנו לטעון את כל נתוני החשבון כרגע.');
      }

      setProfile(profileRes.data || null);
      setApps(appsRes.data || []);
      setEntitlements(entitlementRes.data || []);
      setProjects(projectRes.data || []);
      setLoading(false);
    }

    load();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event,session)=>{
      if(!mounted) return;
      if(!session?.user){
        setUser(null);
        setProfile(null);
        setProjects([]);
        setEntitlements([]);
        setLoading(false);
      }
    });

    return ()=>{
      mounted=false;
      authListener.subscription.unsubscribe();
    };
  },[]);

  const entitlementMap=useMemo(
    ()=>new Map(entitlements.map(item=>[item.app_id,item])),
    [entitlements]
  );

  const visibleApps=apps.filter(app=>{
    if(app.access_mode==='open') return true;
    const entitlement=entitlementMap.get(app.id);
    if(!entitlement) return false;
    if(entitlement.expires_at && new Date(entitlement.expires_at) <= new Date()) return false;
    return true;
  });

  async function login(){
    setError('');
    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider:'google',
      options:{
        redirectTo:`${window.location.origin}/account`,
        queryParams:{access_type:'offline',prompt:'select_account'}
      }
    });
    if(authError) setError('לא הצלחנו לפתוח את ההתחברות ל־Google.');
  }

  if(loading){
    return (
      <main className="account-page">
        <ThemeAnchors />
        <SiteHeader active="account" />
        <section className="account-loading">טוען את האזור האישי…</section>
      </main>
    );
  }

  if(!user){
    return (
      <main className="account-page">
        <ThemeAnchors />
        <SiteHeader active="account" />
        <section className="account-login-state">
          <p className="eyebrow">האזור האישי</p>
          <h1>המרחב שלך ב־Xsite</h1>
          <p>כדי לראות את האפליקציות והפעילויות שלך, יש להתחבר עם Google.</p>
          <button className="primary large" onClick={login}>המשך עם Google</button>
          {error && <p className="account-error">{error}</p>}
        </section>
      </main>
    );
  }

  const name=profile?.display_name || user.user_metadata?.full_name || user.email || 'מורה';
  const avatar=profile?.avatar_url || user.user_metadata?.avatar_url || user.user_metadata?.picture || '';

  return (
    <main className="account-page">
      <ThemeAnchors />
      <SiteHeader active="account" />

      <section className="account-hero">
        <div className="account-profile">
          {avatar ? (
            <img src={avatar} alt={name} className="account-avatar" />
          ) : (
            <div className="account-avatar account-avatar-fallback">{name.slice(0,1)}</div>
          )}
          <div>
            <p className="eyebrow">האזור האישי שלי</p>
            <h1>שלום, {name}</h1>
            <p>{profile?.email || user.email}</p>
          </div>
        </div>
        <div className="account-summary">
          <div><strong>{visibleApps.length}</strong><span>אפליקציות זמינות</span></div>
          <div><strong>{projects.length}</strong><span>פעילויות בספרייה</span></div>
          <div><strong>{projects.filter(p=>p.is_favorite).length}</strong><span>מועדפים</span></div>
        </div>
      </section>

      {error && <div className="account-error account-error-banner">{error}</div>}

      <section className="account-section">
        <div className="account-section-head">
          <div>
            <p className="eyebrow">האפליקציות שלי</p>
            <h2>הכלים שזמינים בחשבון שלך</h2>
          </div>
          <a className="soft" href="/apps">לכל האפליקציות</a>
        </div>

        <div className="my-apps-grid">
          {visibleApps.map(app=>{
            const entitled=entitlementMap.get(app.id);
            const href=appLinks[app.id];
            return (
              <article className="my-app-card" key={app.id}>
                <div className="my-app-card-top">
                  <div className="my-app-card-heading">
                    <h3>{app.name}</h3>
                    <span className="my-app-badge">
                      {app.access_mode==='open' ? 'פתוח בתקופת הפיתוח' : entitled?.source_type==='trial' ? 'ניסיון' : 'ברישיון'}
                    </span>
                  </div>
                  <p>{app.description}</p>
                </div>
                {href ? (
                  <a className="app-launch" href={href} target="_blank" rel="noreferrer">
                    <span>פתיחה</span><span aria-hidden="true">←</span>
                  </a>
                ) : (
                  <span className="my-app-coming">תתחבר לאחר שנבנה מחדש</span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="account-section account-library-section">
        <div className="account-section-head">
          <div>
            <p className="eyebrow">הספרייה שלי</p>
            <h2>הפעילויות האחרונות</h2>
          </div>
          {projects.length>0 && <a className="soft" href="/library">לכל הפעילויות שלי</a>}
        </div>

        {projects.length===0 ? (
          <div className="library-empty">
            <div className="library-empty-mark">✦</div>
            <h3>הספרייה שלך מחכה לפעילות הראשונה</h3>
            <p>פעילויות שתשמור באפליקציות המחוברות ל־Xsite יופיעו כאן אוטומטית.</p>
          </div>
        ) : (
          <div className="library-grid">
            {projects.slice(0,4).map(project=>{
              const app=apps.find(item=>item.id===project.app_id);
              const editHref=projectEditLinks[project.app_id]?.(project.id);
              const preview=project.thumbnail_url || project.image || '';
              return (
                <article className="library-card library-card-rich" key={project.id}>
                  <div className={`library-card-preview ${project.app_id==="bingo"?"library-card-preview-bingo":""}`}>
                    {preview ? (
                      <img src={preview} alt="" loading="lazy" />
                    ) : (
                      <div className="library-card-preview-fallback">
                        <span>{app?.name || project.app_id}</span>
                      </div>
                    )}
                    <div className="library-card-preview-label">{app?.name || project.app_id}</div>
                  </div>

                  <div className="library-card-body">
                    <div className="library-card-meta">
                      <span>{app?.name || project.app_id}</span>
                      {project.is_favorite && <span title="מועדף">★</span>}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="library-updated">עודכן {formatUpdatedDate(project.updated_at)}</p>

                    <div className="library-card-actions">
                      {editHref ? (
                        <a className="library-open-edit" href={editHref} target="_blank" rel="noreferrer">
                          <span>פתח לעריכה</span><span aria-hidden="true">←</span>
                        </a>
                      ) : (
                        <span className="library-action-coming">פתיחה ישירה תחובר בהמשך</span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
