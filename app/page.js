const apps = [
  {
    name: 'Bingo',
    eyebrow: 'משחק כיתתי חי',
    description: 'בינגו לימודי שמאפשר למורה להפעיל כיתה שלמה סביב מושגים, שאלות ואתגר.',
    href: 'https://classroom-bingo-live.vercel.app',
    kind: 'bingo',
    details: [
      ['מה עושים?', 'כל תלמיד מקבל כרטיס בינגו אישי עם מושגים מהנושא הנלמד. נשאלת שאלה, מסמנים את התשובה בכרטיס — שורה, טור או לוח מלא. מי ישלים ראשון?'],
      ['מתאים ל־', 'חזרה, תרגול, פתיחת נושא וסיכום שיעור.'],
      ['החוויה', 'משחקית, פשוטה להפעלה ומעודדת השתתפות של כל הכיתה.']
    ]
  },
  {
    name: 'ענן מילים',
    eyebrow: 'חשיבה בזמן אמת',
    description: 'יוצרים ענן מילים כיתתי חי מתשובות התלמידים — בזמן אמת או בחשיפה משותפת בסיום.',
    href: 'https://hebrew-wordcloud-live.vercel.app',
    kind: 'cloud',
    details: [
      ['מה עושים?', 'המורה מציג שאלה, קובע כמה תשובות יוכל כל תלמיד לשלוח ובוחר בין ענן חי לחשיפה בסיום. התלמידים מצטרפים בקוד ושולחים מילה או צירוף קצר.'],
      ['אפשרויות', 'אפשר לבחור רקע מוכן או להעלות תמונה, ולהציג את הענן על המקרן כשהמילים מסתדרות ומקבלות משקל לפי שכיחותן.'],
      ['מתאים ל־', 'פתיחת שיעור, איסוף עמדות וידע קודם, אסוציאציות, רפלקציה, סיכום ויצירת תמונת מצב כיתתית.'],
      ['החוויה', 'מהירה, חזותית ושיתופית — כל תלמיד תורם, והכיתה רואה יחד את התמונה שנוצרת.']
    ]
  },
  {
    name: 'LinkIt',
    eyebrow: 'מחברים ידע',
    description: 'משחק כיתתי שבו כל תשובה נכונה פותחת חוליה בשרשרת וחושפת עוד אות במשפט מסתורין.',
    href: 'https://linkup-classroom-live.vercel.app',
    kind: 'linkit',
    details: [
      ['מה עושים?', 'המורה בונה מאגר שאלות עם תשובה ורמז, בוחר משפט מסתורין ומפעיל חדר כיתתי. התלמידים מצטרפים בקוד או ב־QR ומשתתפים בתורם.'],
      ['איך מתקדמים?', 'תשובה נכונה פותחת חוליית שרשרת מוזהבת וחושפת אות נוספת במשפט המסתורין. ההתקדמות מוצגת בזמן אמת על מסך הכיתה.'],
      ['מתאים ל־', 'חזרה לקראת מבחן, תרגול מושגים, סיכום יחידה, שיעור פתיחה ומשחק כיתתי שיתופי.'],
      ['החוויה', 'קצבית ומתגמלת, עם רמזים, תורות, אנימציית הצלחה ומטרה משותפת שמחזיקה את הכיתה בתוך המשחק.']
    ]
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
      <div id="theme-cream" className="theme-anchor"></div>
      <div id="theme-sage" className="theme-anchor"></div>
      <div id="theme-mauve" className="theme-anchor"></div>
      <div id="theme-ink" className="theme-anchor"></div>
      <div id="theme-coral" className="theme-anchor"></div>
      <div id="theme-cocoa" className="theme-anchor"></div>
      <div className="theme-switcher">
        <a className="theme-trigger" href="#theme-menu" aria-label="בחירת ערכת עיצוב זמנית">
          <span className="theme-trigger-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          Themes
        </a>
        <div id="theme-menu" className="theme-panel">
          <div className="theme-panel-head">
            <strong>ערכת עיצוב</strong>
            <span>כלי בנייה זמני</span>
          </div>
          <div className="theme-options">
            <a className="theme-option theme-option-cream" href="#theme-cream">
              <span className="theme-swatches cream-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
              <span>בורדו + שמנת</span>
            </a>
            <a className="theme-option theme-option-sage" href="#theme-sage">
              <span className="theme-swatches sage-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
              <span>בורדו + מרווה</span>
            </a>
            <a className="theme-option theme-option-mauve" href="#theme-mauve">
              <span className="theme-swatches mauve-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
              <span>סגלגל + מאוב</span>
            </a>
            <a className="theme-option theme-option-ink" href="#theme-ink">
              <span className="theme-swatches ink-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
              <span>כחול דיו + טורקיז</span>
            </a>
            <a className="theme-option theme-option-coral" href="#theme-coral">
              <span className="theme-swatches coral-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
              <span>טורקיז + קורל</span>
            </a>
            <a className="theme-option theme-option-cocoa" href="#theme-cocoa">
              <span className="theme-swatches cocoa-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
              <span>קקאו + סלרי + אפרסק</span>
            </a>
          </div>
        </div>
      </div>
      <header className="topbar">
        <a className="brandmark" href="#" aria-label="Xsite">
          <span className="site-logo-monochrome" aria-hidden="true"></span>
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
                  <>
                    <img className="app-card-image theme-card theme-card-mauve" src="/xsite-bingo-baclass-new-palette.png" alt="Bingo" />
                    <img className="app-card-image theme-card theme-card-cream" src="/bingo-card.png.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-sage" src="/bingo-card.png.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-ink" src="/bingo-card-ink-teal.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-coral" src="/bingo-card-teal-coral.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-cocoa" src="/bingo-card-cocoa-celery.png" alt="" aria-hidden="true" />
                  </>
                )}
                {app.kind === 'cloud' && (
                  <>
                    <img className="app-card-image theme-card theme-card-mauve" src="/xsite-milim-leanan-new-palette.png" alt="ענן מילים" />
                    <img className="app-card-image theme-card theme-card-cream" src="/wordcloud-card.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-sage" src="/wordcloud-card.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-ink" src="/wordcloud-card-ink-teal.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-coral" src="/wordcloud-card-teal-coral.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-cocoa" src="/wordcloud-card-cocoa-celery.png" alt="" aria-hidden="true" />
                  </>
                )}
                {app.kind === 'linkit' && (
                  <>
                    <img className="app-card-image theme-card theme-card-mauve" src="/xsite-linkit-new-palette.png" alt="LinkIt" />
                    <img className="app-card-image theme-card theme-card-cream" src="/linkit-card.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-sage" src="/linkit-card.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-ink" src="/linkit-card-ink-teal.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-coral" src="/linkit-card-teal-coral.png" alt="" aria-hidden="true" />
                    <img className="app-card-image theme-card theme-card-cocoa" src="/linkit-card-cocoa-celery.png" alt="" aria-hidden="true" />
                  </>
                )}
              </div>
              <div className="app-content">
                <span className="feature-eyebrow">{app.eyebrow}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>

                <details className="app-more">
                  <summary>
                    <span className="app-more-plus" aria-hidden="true">+</span>
                    <span>מידע נוסף</span>
                  </summary>
                  <div className="app-more-panel">
                    {app.details.map(([label, text]) => (
                      <div className="app-detail-row" key={label}>
                        <strong>{label}</strong>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </details>

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