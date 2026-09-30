'use client';

import { useEffect, useMemo, useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import { supabase } from '../lib/supabaseClient';

const projectEditLinks = {
  mapi: (projectId)=>'https://mapi-interactive.vercel.app/?edit='+encodeURIComponent(projectId),
  bingo: (projectId)=>'https://classroom-bingo-live.vercel.app/?edit='+encodeURIComponent(projectId),
  linkup: (projectId)=>'https://linkup-classroom-live.vercel.app/?edit='+encodeURIComponent(projectId),
  'four-on-four': (projectId)=>'/four-on-four/teacher.html?edit='+encodeURIComponent(projectId),
  'x-squared': (projectId)=>'/x-squared/teacher.html?edit='+encodeURIComponent(projectId)
};

const gradeLabels={
  1:'א׳',2:'ב׳',3:'ג׳',4:'ד׳',5:'ה׳',6:'ו׳',
  7:'ז׳',8:'ח׳',9:'ט׳',10:'י׳',11:'י״א',12:'י״ב'
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

function formatDate(value){
  if(!value) return '';
  return new Intl.DateTimeFormat('he-IL',{
    day:'numeric',
    month:'short',
    year:'numeric'
  }).format(new Date(value));
}

function compareHebrew(a,b){
  return String(a||'').localeCompare(String(b||''),'he');
}

export default function LibraryPage(){
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState(null);
  const [apps,setApps]=useState([]);
  const [projects,setProjects]=useState([]);
  const [error,setError]=useState('');
  const [query,setQuery]=useState('');
  const [appFilter,setAppFilter]=useState('all');
  const [subjectFilter,setSubjectFilter]=useState('all');
  const [gradeFilter,setGradeFilter]=useState('all');
  const [favoritesOnly,setFavoritesOnly]=useState(false);
  const [sortBy,setSortBy]=useState('updated');

  useEffect(()=>{
    let mounted=true;
    async function load(){
      setLoading(true);
      setError('');
      const {data:sessionData}=await supabase.auth.getSession();
      const currentUser=sessionData.session?.user||null;
      if(!mounted) return;
      setUser(currentUser);
      if(!currentUser){
        setLoading(false);
        return;
      }
      const [appsRes,projectsRes]=await Promise.all([
        supabase.from('apps').select('id,name,sort_order').eq('is_listed',true).order('sort_order',{ascending:true}),
        supabase.from('teacher_projects')
          .select('id,app_id,title,subject,grade,thumbnail_url,image,is_favorite,created_at,updated_at')
          .eq('teacher_id',currentUser.id)
          .order('updated_at',{ascending:false})
      ]);
      if(!mounted) return;
      if(appsRes.error||projectsRes.error) setError('לא הצלחנו לטעון את הספרייה כרגע.');
      setApps(appsRes.data||[]);
      setProjects(projectsRes.data||[]);
      setLoading(false);
    }
    load();
    const {data:listener}=supabase.auth.onAuthStateChange((_event,session)=>{
      if(!mounted) return;
      if(!session?.user){
        setUser(null);
        setProjects([]);
        setLoading(false);
      }
    });
    return ()=>{
      mounted=false;
      listener.subscription.unsubscribe();
    };
  },[]);

  const appMap=useMemo(()=>new Map(apps.map(app=>[app.id,app.name])),[apps]);
  const subjects=useMemo(
    ()=>Array.from(new Set(projects.map(p=>p.subject?.trim()).filter(Boolean))).sort(compareHebrew),
    [projects]
  );
  const grades=useMemo(
    ()=>Array.from(new Set(projects.map(p=>p.grade).filter(Boolean))).sort((a,b)=>a-b),
    [projects]
  );

  const visibleProjects=useMemo(()=>{
    const needle=query.trim().toLocaleLowerCase('he');
    const filtered=projects.filter(project=>{
      const appName=appMap.get(project.app_id)||project.app_id;
      if(appFilter!=='all'&&project.app_id!==appFilter) return false;
      if(subjectFilter!=='all'&&(project.subject||'')!==subjectFilter) return false;
      if(gradeFilter!=='all'&&String(project.grade)!==gradeFilter) return false;
      if(favoritesOnly&&!project.is_favorite) return false;
      if(needle){
        const haystack=[project.title,project.subject,appName,gradeLabels[project.grade]]
          .filter(Boolean).join(' ').toLocaleLowerCase('he');
        if(!haystack.includes(needle)) return false;
      }
      return true;
    });
    return [...filtered].sort((a,b)=>{
      if(sortBy==='created') return new Date(b.created_at)-new Date(a.created_at);
      if(sortBy==='title') return compareHebrew(a.title,b.title);
      if(sortBy==='subject') return compareHebrew(a.subject||'תתת',b.subject||'תתת');
      if(sortBy==='grade') return (a.grade??99)-(b.grade??99) || compareHebrew(a.title,b.title);
      return new Date(b.updated_at)-new Date(a.updated_at);
    });
  },[projects,appMap,query,appFilter,subjectFilter,gradeFilter,favoritesOnly,sortBy]);

  async function login(){
    setError('');
    const {error:authError}=await supabase.auth.signInWithOAuth({
      provider:'google',
      options:{
        redirectTo:window.location.origin+'/library',
        queryParams:{access_type:'offline',prompt:'select_account'}
      }
    });
    if(authError) setError('לא הצלחנו לפתוח את ההתחברות ל־Google.');
  }

  async function toggleFavorite(project){
    const next=!project.is_favorite;
    setProjects(current=>current.map(item=>item.id===project.id?{...item,is_favorite:next}:item));
    const {error:updateError}=await supabase.from('teacher_projects')
      .update({is_favorite:next})
      .eq('id',project.id)
      .eq('teacher_id',user.id);
    if(updateError){
      setProjects(current=>current.map(item=>item.id===project.id?{...item,is_favorite:project.is_favorite}:item));
      setError('לא הצלחנו לעדכן את המועדף.');
    }
  }

  function resetFilters(){
    setQuery('');
    setAppFilter('all');
    setSubjectFilter('all');
    setGradeFilter('all');
    setFavoritesOnly(false);
    setSortBy('updated');
  }

  if(loading){
    return <main className="account-page library-page"><ThemeAnchors/><SiteHeader active="library"/><section className="account-loading">טוען את הפעילויות שלך…</section></main>;
  }

  if(!user){
    return (
      <main className="account-page library-page">
        <ThemeAnchors />
        <SiteHeader active="library"/>
        <section className="account-login-state">
          <p className="eyebrow">הפעילויות שלי</p>
          <h1>ספריית העבודה שלך</h1>
          <p>כדי לראות, לחפש ולסדר את הפעילויות ששמרת, יש להתחבר עם Google.</p>
          <button className="primary large" onClick={login}>המשך עם Google</button>
          {error&&<p className="account-error">{error}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="account-page library-page">
      <ThemeAnchors />
      <SiteHeader active="library"/>

      <section className="library-hero">
        <div>
          <p className="eyebrow">הספרייה שלי</p>
          <h1>הפעילויות שלי</h1>
          <p>כל הפעילויות ששמרת, במקום אחד — עם חיפוש, סינון ומיון לפי הדרך שנוחה לך.</p>
        </div>
        <div className="library-count-box">
          <strong>{projects.length}</strong>
          <span>פעילויות שמורות</span>
        </div>
      </section>

      {error&&<div className="account-error account-error-banner">{error}</div>}

      <section className="library-toolbar" aria-label="כלי חיפוש וסינון">
        <div className="library-search-wrap">
          <span aria-hidden="true">⌕</span>
          <input type="search" value={query} onChange={e=>setQuery(e.target.value)}
            placeholder="חיפוש לפי שם פעילות, מקצוע או אפליקציה…" aria-label="חיפוש פעילות"/>
        </div>

        <div className="library-filter-grid">
          <label>
            <span>אפליקציה</span>
            <select value={appFilter} onChange={e=>setAppFilter(e.target.value)}>
              <option value="all">כל האפליקציות</option>
              {apps.map(app=><option value={app.id} key={app.id}>{app.name}</option>)}
            </select>
          </label>
          <label>
            <span>מקצוע</span>
            <select value={subjectFilter} onChange={e=>setSubjectFilter(e.target.value)}>
              <option value="all">כל המקצועות</option>
              {subjects.map(subject=><option value={subject} key={subject}>{subject}</option>)}
            </select>
          </label>
          <label>
            <span>כיתה</span>
            <select value={gradeFilter} onChange={e=>setGradeFilter(e.target.value)}>
              <option value="all">כל הכיתות</option>
              {grades.map(grade=><option value={String(grade)} key={grade}>כיתה {gradeLabels[grade]}</option>)}
            </select>
          </label>
          <label>
            <span>מיון</span>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
              <option value="updated">עודכן לאחרונה</option>
              <option value="created">נוצר לאחרונה</option>
              <option value="title">שם הפעילות</option>
              <option value="subject">מקצוע</option>
              <option value="grade">כיתה</option>
            </select>
          </label>
        </div>

        <div className="library-toolbar-foot">
          <button type="button"
            className={favoritesOnly?'library-favorite-filter active':'library-favorite-filter'}
            onClick={()=>setFavoritesOnly(v=>!v)}>
            <span aria-hidden="true">★</span> מועדפים בלבד
          </button>
          <span className="library-result-count">{visibleProjects.length} מתוך {projects.length} פעילויות</span>
        </div>
      </section>

      {projects.length===0 ? (
        <section className="library-empty library-page-empty">
          <div className="library-empty-mark">✦</div>
          <h2>הספרייה שלך עדיין ריקה</h2>
          <p>פעילות שתשמור מתוך אחת מאפליקציות Xsite תופיע כאן אוטומטית.</p>
        </section>
      ) : visibleProjects.length===0 ? (
        <section className="library-empty library-page-empty">
          <div className="library-empty-mark">⌕</div>
          <h2>לא נמצאו פעילויות מתאימות</h2>
          <p>אפשר לשנות את החיפוש או לנקות את המסננים.</p>
          <button type="button" className="soft" onClick={resetFilters}>נקה מסננים</button>
        </section>
      ) : (
        <section className="library-grid library-page-grid">
          {visibleProjects.map(project=>{
            const appName=appMap.get(project.app_id)||project.app_id;
            const editHref=projectEditLinks[project.app_id]?.(project.id);
            const preview=project.thumbnail_url||project.image||'';
            return (
              <article className="library-card library-card-rich library-page-card" key={project.id}>
                <div className={'library-card-preview '+(project.app_id==='bingo'?'library-card-preview-bingo':'')}>
                  {preview?<img src={preview} alt="" loading="lazy"/>:
                    <div className="library-card-preview-fallback"><span>{appName}</span></div>}
                  <div className="library-card-preview-label">{appName}</div>
                  <button type="button"
                    className={project.is_favorite?'library-favorite-button active':'library-favorite-button'}
                    aria-label={project.is_favorite?'הסר ממועדפים':'הוסף למועדפים'}
                    title={project.is_favorite?'הסר ממועדפים':'הוסף למועדפים'}
                    onClick={()=>toggleFavorite(project)}>★</button>
                </div>
                <div className="library-card-body">
                  <div className="library-card-meta">
                    <span>{project.subject||'ללא מקצוע'}</span>
                    <span>{project.grade?'כיתה '+gradeLabels[project.grade]:'ללא כיתה'}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="library-updated">עודכן {formatDate(project.updated_at)}</p>
                  <div className="library-card-actions">
                    {editHref?(
                      <a className="library-open-edit" href={editHref} target="_blank" rel="noreferrer">
                        <span>פתח לעריכה</span><span aria-hidden="true">←</span>
                      </a>
                    ):<span className="library-action-coming">פתיחה ישירה תחובר בהמשך</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
