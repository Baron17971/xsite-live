import SiteHeader from '../components/SiteHeader';

const apps = [
  {
    name: 'Bingo',
    eyebrow: 'משחק כיתתי חי',
    description: 'בינגו לימודי שמאפשר למורה להפעיל כיתה שלמה סביב מושגים, שאלות ואתגר.',
    href: 'https://classroom-bingo-live.vercel.app',
    image: '/xsite-bingo-baclass-new-palette.png',
    kind: 'bingo',
    tags: ['משחקיות','חזרה ותרגול','כיתה שלמה'],
    details: [
      ['מה עושים?', 'כל תלמיד מקבל כרטיס בינגו אישי עם מושגים מהנושא הנלמד. נשאלת שאלה, מסמנים את התשובה בכרטיס — שורה, טור או לוח מלא.'],
      ['מתאים ל־', 'חזרה, תרגול, פתיחת נושא וסיכום שיעור.']
    ]
  },
  {
    name: 'ענן מילים',
    eyebrow: 'חשיבה בזמן אמת',
    description: 'יוצרים ענן מילים כיתתי חי מתשובות התלמידים — בזמן אמת או בחשיפה משותפת בסיום.',
    href: 'https://hebrew-wordcloud-live.vercel.app',
    image: '/xsite-milim-leanan-new-palette.png',
    kind: 'cloud',
    tags: ['שיתוף','פתיחת שיעור','רפלקציה'],
    details: [
      ['מה עושים?', 'המורה מציג שאלה, התלמידים מצטרפים בקוד ושולחים מילה או צירוף קצר.'],
      ['מתאים ל־', 'ידע קודם, איסוף עמדות, אסוציאציות, רפלקציה וסיכום.']
    ]
  },
  {
    name: 'LinkIt',
    eyebrow: 'מחברים ידע',
    description: 'משחק כיתתי שבו כל תשובה נכונה פותחת חוליה בשרשרת וחושפת עוד אות במשפט מסתורין.',
    href: 'https://linkup-classroom-live.vercel.app',
    image: '/xsite-linkit-new-palette.png',
    kind: 'linkit',
    tags: ['משחקיות','שליפה','שיתוף'],
    details: [
      ['מה עושים?', 'המורה בונה מאגר שאלות ומשפט מסתורין, והתלמידים משתתפים בתורם דרך חדר כיתתי.'],
      ['מתאים ל־', 'חזרה לקראת מבחן, תרגול מושגים, סיכום יחידה ושיעור פתיחה.']
    ]
  }
];

export default function AppsPage(){
  return (
    <main className="catalog-page">
      <div id="theme-cream" className="theme-anchor"></div>
      <div id="theme-sage" className="theme-anchor"></div>
      <div id="theme-mauve" className="theme-anchor"></div>
      <div id="theme-ink" className="theme-anchor"></div>
      <div id="theme-coral" className="theme-anchor"></div>
      <div id="theme-cocoa" className="theme-anchor"></div>
      <div id="theme-botanical" className="theme-anchor"></div>
      <SiteHeader active="apps" />



      <section className="catalog-hero">
        <p className="eyebrow">כל האפליקציות של Xsite</p>
        <h1>כלים אינטראקטיביים<br/><span>שנבנו לכיתה אמיתית</span></h1>
        <p className="lead">כאן ירוכזו כל האפליקציות של Xsite. אפשר יהיה למצוא, לסנן ולבחור כלי לפי המטרה הלימודית והסיטואציה בכיתה.</p>
      </section>

      <section className="catalog-toolbar" aria-label="סינון אפליקציות">
        <span className="catalog-filter active">הכול</span>
        <span className="catalog-filter">משחקים</span>
        <span className="catalog-filter">חזרה ותרגול</span>
        <span className="catalog-filter">שיתוף</span>
        <span className="catalog-filter">יצירה</span>
        <span className="catalog-filter">הערכה</span>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {apps.map((app) => (
            <article className="catalog-card" key={app.name}>
              <div className="catalog-image-wrap">
                {app.kind === 'bingo' && (
                  <>
                    <img className="catalog-image theme-card theme-card-mauve" src="/xsite-bingo-baclass-new-palette.png" alt="Bingo" />
                    <img className="catalog-image theme-card theme-card-cream" src="/bingo-card.png.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-sage" src="/bingo-card.png.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-ink" src="/bingo-card-ink-teal.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-coral" src="/bingo-card-teal-coral.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-cocoa" src="/bingo-card-cocoa-celery.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-botanical" src="/bingo-botanical.png" alt="" aria-hidden="true" />
                  </>
                )}
                {app.kind === 'cloud' && (
                  <>
                    <img className="catalog-image theme-card theme-card-mauve" src="/xsite-milim-leanan-new-palette.png" alt="ענן מילים" />
                    <img className="catalog-image theme-card theme-card-cream" src="/wordcloud-card.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-sage" src="/wordcloud-card.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-ink" src="/wordcloud-card-ink-teal.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-coral" src="/wordcloud-card-teal-coral.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-cocoa" src="/wordcloud-card-cocoa-celery.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-botanical" src="/wordcloud-botanical.png" alt="" aria-hidden="true" />
                  </>
                )}
                {app.kind === 'linkit' && (
                  <>
                    <img className="catalog-image theme-card theme-card-mauve" src="/xsite-linkit-new-palette.png" alt="LinkIt" />
                    <img className="catalog-image theme-card theme-card-cream" src="/linkit-card.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-sage" src="/linkit-card.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-ink" src="/linkit-card-ink-teal.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-coral" src="/linkit-card-teal-coral.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-cocoa" src="/linkit-card-cocoa-celery.png" alt="" aria-hidden="true" />
                    <img className="catalog-image theme-card theme-card-botanical" src="/linkit-botanical.png" alt="" aria-hidden="true" />
                  </>
                )}
              </div>
              <div className="catalog-card-body">
                <p className="feature-eyebrow">{app.eyebrow}</p>
                <h2>{app.name}</h2>
                <p>{app.description}</p>
                <div className="catalog-tags">
                  {app.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="catalog-details">
                  {app.details.map(([label,text]) => (
                    <div key={label}>
                      <strong>{label}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <a className="primary catalog-open" href={app.href}>
                  לפתיחת האפליקציה <span>←</span>
                </a>
              </div>
            </article>
          ))}

          <article className="catalog-card catalog-card-coming">
            <div className="catalog-coming-mark">+</div>
            <div>
              <p className="feature-eyebrow">בדרך</p>
              <h2>אפליקציות נוספות</h2>
              <p>הקטלוג בנוי כבר עכשיו כך שאפשר יהיה להוסיף אליו כלים חדשים בלי לשנות את מבנה העמוד.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
