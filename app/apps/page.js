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
  },
  {
    name: 'MAPI',
    eyebrow: 'מסלול למידה אינטראקטיבי',
    description: 'יוצרים מסלול למידה על גבי תמונה או מפה, עם שאלות, משימות וסרטונים. התלמיד מתקדם בין התחנות ובסיום מתקבל סיכום תשובות מלא למורה.',
    href: 'https://mapi-interactive.vercel.app/',
    image: '/mapi-card.jpg',
    kind: 'mapi',
    tags: ['מסלול למידה','שאלות ומשימות','וידאו','סיכום למורה'],
    details: [
      ['מה עושים?', 'המורה מעלה תמונה או מפה, מסמן עליה תחנות ומוסיף בכל תחנה פעילות כמו שאלה, משימה או צפייה מונחית בסרטון.'],
      ['מתאים ל־', 'למידה עצמאית, חקר מונחה, צפייה פעילה, משימות תחנתיות וסיכום תהליך למידה.']
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
                {app.kind === 'mapi' && (
                  <>
                    <div className="catalog-image mapi-card-art mapi-card-fallback" role="img" aria-label="MAPI">
                      <span className="mapi-card-title">MAPI</span>
                      <span className="mapi-card-tagline">תמונה אחת, אלף מילים</span>
                    </div>
                    <img className="catalog-image theme-card theme-card-botanical mapi-botanical-image" src="data:image/jpeg;base64,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" alt="MAPI" />
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
