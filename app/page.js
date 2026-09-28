const cards = [
  { title: 'חושבים לעומק', text: 'אתגרי חשיבה, דיון ופתרון בעיות.', tag: 'חשיבה ביקורתית' },
  { title: 'פותרים ביחד', text: 'משימות שיתופיות שמפעילות את כל הכיתה.', tag: 'שיתוף פעולה' },
  { title: 'מגלים ובודקים', text: 'חקר, סקרנות ומשימות מבוססות גילוי.', tag: 'חקר' },
  { title: 'יוצרים עם בינה', text: 'פעילויות יצירה חכמות עם כלים דיגיטליים.', tag: 'AI ויצירה' }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="brand" aria-label="Xsite">Xsite</div>
        <nav>
          <a className="active" href="#">בית</a>
          <a href="#activities">משחקים ופעילויות</a>
          <a href="#subjects">תחומים</a>
          <a href="#teachers">למורים</a>
          <a href="#about">אודות</a>
        </nav>
        <div className="actions">
          <button className="ghost">כניסה</button>
          <button className="primary">מתחילים</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">משחקים ופעילויות לתלמידים בוגרים</p>
          <h1>מעוררים סקרנות.<br/><em>יוצרים למידה.</em></h1>
          <p className="lead">מרחב למורים שמרכז משחקים, פעילויות אינטראקטיביות וכלים חכמים — להפעלה בכיתה, בלי להרגיש ילדותי.</p>
          <div className="hero-buttons">
            <button className="primary large">יאללה מתחילים <span>←</span></button>
            <button className="soft large">למורים</button>
          </div>
          <div className="stats">
            <div><b>100+</b><span>פעילויות ומשחקים</span></div>
            <div><b>RTL</b><span>עברית מלאה</span></div>
            <div><b>AI</b><span>כלים חכמים למורה</span></div>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="תלמידים לומדים יחד"></div>
      </section>

      <section id="activities" className="activities">
        <div className="section-head">
          <div>
            <p className="eyebrow">נבחר במיוחד</p>
            <h2>פעילויות שכיף להפעיל</h2>
          </div>
          <a href="#">לכל הפעילויות ←</a>
        </div>
        <div className="grid">
          {cards.map((card, i) => (
            <article className="card" key={card.title}>
              <div className={`thumb thumb-${i+1}`}></div>
              <div className="card-body">
                <span className="tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="round" aria-label={`פתיחת ${card.title}`}>←</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="teachers" className="teacher-strip">
        <div className="teacher-icon">✦</div>
        <div><h3>נבנה בשביל מורים</h3><p>מהיר להכנה, ברור להפעלה, ומותאם לכיתה אמיתית.</p></div>
        <div className="benefit"><b>חוסכים זמן</b><span>פעילויות מוכנות להפעלה</span></div>
        <div className="benefit"><b>מפעילים את כולם</b><span>למידה שיתופית ואינטראקטיבית</span></div>
        <div className="benefit"><b>נראה מצוין</b><span>עיצוב בוגר, נקי ולא ילדותי</span></div>
      </section>
    </main>
  );
}