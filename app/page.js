const featureCards = [
  {
    eyebrow: 'למורים',
    title: 'כלים שמעצימים את ההוראה שלכם',
    text: 'חומרי לימוד, רעיונות ופעילויות מוכנות שמאפשרים להיכנס לכיתה בראש שקט ולהפעיל תלמידים באמת.',
    cta: 'לגלות כלים למורה',
    tone: 'teacher'
  },
  {
    eyebrow: 'לתלמידים ולבוגרים צעירים',
    title: 'בונים עתיד עם יותר ביטחון',
    text: 'משאבים, הכוונה ומשימות שמפתחות חשיבה, עצמאות וסקרנות — גם בתוך הכיתה וגם מעבר לה.',
    cta: 'מתחילים עכשיו',
    tone: 'future'
  },
  {
    eyebrow: 'קהילה',
    title: 'לומדים יחד, מתקדמים ביחד',
    text: 'מרחב שמחבר בין שאלות, שיתוף ידע, השראה מאנשים כמוכם ותחושת התקדמות אמיתית.',
    cta: 'הצטרפו לקהילה',
    tone: 'community'
  }
];

const benefits = [
  {title:'חוסכים זמן', text:'פעילויות מוכנות להפעלה, בלי להתחיל כל פעם מאפס.'},
  {title:'מפעילים את כולם', text:'למידה אינטראקטיבית שמכניסה יותר תלמידים לתמונה.'},
  {title:'נראה מצוין', text:'עיצוב בוגר, נקי ומזמין — בלי להרגיש ילדותי.'}
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brandmark" href="#" aria-label="Xsite">
          <img src="/Xsite-logo-tras.png" alt="Xsite" className="site-logo" />
        </a>
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
          <p className="eyebrow">Xsite · למידה שמרגישה אחרת</p>
          <h1>למידה שמדליקה<br/><span>סקרנות.</span></h1>
          <p className="lead">משחקים, פעילויות וכלים חכמים למורים ולתלמידים בוגרים — בשפה עיצובית נעימה, חכמה ולא ילדותית.</p>
          <div className="hero-buttons">
            <button className="primary large">לגלות את Xsite <span>←</span></button>
            <button className="soft large">אני מורה</button>
          </div>
          <div className="hero-mini">
            <span>קהילה</span><i>·</i><span>ידע</span><i>·</i><span>יצירה</span><i>·</i><span>משחוק</span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="תלמידים לומדים יחד"></div>
      </section>

      <section className="manifesto">
        <div className="manifesto-ribbon"></div>
        <div className="manifesto-copy">
          <span className="tiny-label">Xsite</span>
          <h2>ידע שמוביל אותך רחוק יותר</h2>
          <p>כלים, תוכן והכוונה ללמידה משמעותית — שמתחילה בסקרנות וממשיכה לעשייה.</p>
        </div>
        <div className="manifesto-words">
          <strong>קהילה.</strong>
          <strong>ידע.</strong>
          <strong>הצלחה.</strong>
        </div>
      </section>

      <section id="activities" className="feature-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">נבנה סביב אנשים אמיתיים</p>
            <h2>פחות עומס. יותר משמעות.</h2>
          </div>
          <p className="section-intro">כל אזור באתר בנוי כדי להוביל לפעולה ברורה — למצוא, לבחור, להפעיל ולהתקדם.</p>
        </div>

        <div className="feature-grid">
          {featureCards.map((card, i) => (
            <article className={`feature-card ${card.tone}`} key={card.title}>
              <div className="feature-visual">
                <div className="ribbon r1"></div>
                <div className="ribbon r2"></div>
                <div className="visual-badge">0{i+1}</div>
              </div>
              <div className="feature-content">
                <span className="feature-eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="primary compact">{card.cta} <span>←</span></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="teachers" className="teacher-panel">
        <div className="teacher-copy">
          <p className="eyebrow">נבנה בשביל מורים</p>
          <h2>כלים חכמים. הפעלה פשוטה.</h2>
          <p>מקום אחד שבו אפשר למצוא פעילויות טובות, להפעיל אותן במהירות, ולתת לתלמידים חוויה שמרגישה עדכנית ומדויקת.</p>
          <button className="primary large">למרחב המורים <span>←</span></button>
        </div>
        <div className="benefits">
          {benefits.map((item, i) => (
            <div className="benefit-card" key={item.title}>
              <span className="benefit-number">0{i+1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="closing">
        <div className="closing-mark">✦</div>
        <p>לתלמידים בוגרים. לכיתות אמיתיות. למורים שרוצים יותר.</p>
        <h2>Xsite</h2>
      </section>
    </main>
  );
}