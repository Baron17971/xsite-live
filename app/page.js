const apps = [
  {
    name: 'Bingo',
    eyebrow: 'משחק כיתתי חי',
    description: 'בינגו לימודי שמאפשר למורה להפעיל כיתה שלמה סביב מושגים, שאלות ואתגר.',
    href: 'https://classroom-bingo-live.vercel.app',
    kind: 'bingo'
  },
  {
    name: 'ענן מילים',
    eyebrow: 'חשיבה בזמן אמת',
    description: 'אוספים תשובות מהתלמידים ובונים יחד ענן מילים חי, ברור ומרשים על המסך.',
    href: 'https://hebrew-wordcloud-live.vercel.app',
    kind: 'cloud'
  },
  {
    name: 'LinkIt',
    eyebrow: 'מחברים ידע',
    description: 'משחק שרשרת אינטראקטיבי שמחבר בין שאלות, תשובות, רמזים וחשיבה קבוצתית.',
    href: 'https://linkup-classroom-live.vercel.app',
    kind: 'linkit'
  }
];

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
          <img src="/Xsite-logo-transparent.png" alt="Xsite" className="site-logo" />
        </a>
        <nav>
          <a className="active" href="#">בית</a>
          <a href="#apps">אפליקציות</a>
          <a href="#teachers">למורים</a>
          <a href="#how">איך זה עובד</a>
          <a href="#about">אודות</a>
        </nav>
        <div className="actions">
          <button className="ghost">כניסה</button>
          <button className="primary">מתחילים</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">משחקים, פעילויות וכלים חכמים ללמידה</p>
          <h1>למידה שמדליקה<br/><span>סקרנות</span></h1>
          <p className="lead">מרחב למורים ולתלמידים בוגרים שמחבר בין משחקיות, יצירה, חשיבה וכלים דיגיטליים — בצורה חכמה, יפה ומדויקת לכיתה.</p>
          <div className="hero-buttons">
            <button className="primary large">לגלות את Xsite <span>←</span></button>
            <button className="soft large">אני מורה</button>
          </div>
          <div className="hero-mini">
            <span>לכיתה אמיתית</span><i>·</i><span>לתלמידים בוגרים</span><i>·</i><span>למורים שרוצים יותר</span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="תלמידים לומדים יחד"></div>
      </section>

      <section id="apps" className="apps-section">
        <div className="apps-heading">
          <div>
            <p className="eyebrow">האפליקציות של Xsite</p>
            <h2>כלים אינטראקטיביים שמפעילים את הכיתה</h2>
          </div>
          <p>כל אפליקציה נבנתה להפעלה אמיתית בכיתה — פשוטה למורה, ברורה לתלמידים, ומעוצבת כחוויה בוגרת ונקייה.</p>
        </div>

        <div className="apps-grid">
          {apps.map((app) => (
            <article className={`app-card ${app.kind}`} key={app.name}>
              <div className="app-preview">
                {app.kind === 'bingo' && (
                  <div className="bingo-mini" aria-hidden="true">
                    {Array.from({length: 9}).map((_, i) => <span key={i}></span>)}
                  </div>
                )}
                {app.kind === 'cloud' && (
                  <div className="cloud-mini" aria-hidden="true">
                    <span>למידה</span><span>סקרנות</span><span>שיתוף</span><span>חשיבה</span><span>יצירה</span>
                  </div>
                )}
                {app.kind === 'linkit' && (
                  <div className="link-mini" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                )}
                <div className="app-monogram">{app.name}</div>
              </div>
              <div className="app-content">
                <span className="feature-eyebrow">{app.eyebrow}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <a className="app-launch" href={app.href} target="_blank" rel="noreferrer">
                  לפתיחת האפליקציה <span>←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
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

      <section id="how" className="feature-section">
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