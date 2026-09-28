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

const benefits = [
  {title:'מוכנים לכיתה', text:'כלים שנפתחים מהר, ברורים להפעלה ולא דורשים התעסקות מיותרת.'},
  {title:'מפעילים את כולם', text:'פעילויות שמזמינות תלמידים להשתתף, להגיב, ליצור, לבחור ולפתור.'},
  {title:'נשארים ממוקדים בלמידה', text:'הטכנולוגיה נמצאת ברקע — והמטרה הלימודית נשארת במרכז.'}
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
          <h1>למידה מרגשת<br/><span>שיוצרת מעורבות</span></h1>
          <p className="lead">מרחב למורים שמחבר בין משחקיות, יצירה, חשיבה וכלים דיגיטליים — בצורה חכמה, יפה ומדויקת לכיתה.</p>
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


      <section className="principles-section" aria-labelledby="principles-title">
        <div className="principles-head">
          <p className="eyebrow">העקרונות שמאחורי Xsite</p>
          <h2 id="principles-title">מה הופך כלי דיגיטלי לחוויה לימודית טובה?</h2>
        </div>

        <div className="principles-grid">
          <article className="principle-card">
            <span className="principle-number">01</span>
            <div>
              <h3>מעורבות פעילה</h3>
              <p>התלמיד לא רק צופה, אלא בוחר, מגיב, יוצר, מתחרה, משתף או פותר.</p>
            </div>
          </article>

          <article className="principle-card">
            <span className="principle-number">02</span>
            <div>
              <h3>פשטות בהפעלה</h3>
              <p>כניסה מהירה, הוראות ברורות, מינימום שלבים למורה ולתלמיד. הטכנולוגיה לא אמורה להפריע לשיעור.</p>
            </div>
          </article>

          <article className="principle-card">
            <span className="principle-number">03</span>
            <div>
              <h3>למידה עם מטרה</h3>
              <p>המשחקיות תמיד משרתת יעד לימודי ברור: תרגול, שליפה, חזרה, הבנה, שיח, יצירה או הערכה.</p>
            </div>
          </article>

          <article className="principle-card">
            <span className="principle-number">04</span>
            <div>
              <h3>חוויה חכמה ומדויקת</h3>
              <p>עיצוב בוגר, משוב מיידי, קצב נכון לכיתה והתאמה אמיתית לסיטואציה הוראתית.</p>
            </div>
          </article>
        </div>
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

      <section id="teachers" className="teacher-panel">
        <span id="how" className="section-anchor" aria-hidden="true"></span>
        <div className="teacher-copy">
          <p className="eyebrow">נבנה בשביל מורים</p>
          <h2>פחות עומס. יותר הפעלה. יותר למידה.</h2>
          <p>כל כלי ב־Xsite נבנה מתוך סיטואציה אמיתית בכיתה — כדי לעזור למורה להפעיל תלמידים, לייצר מעורבות ולשמור על חוויית למידה פשוטה, חכמה ומדויקת.</p>
          <button className="primary large">לגלות את הכלים למורים <span>←</span></button>
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