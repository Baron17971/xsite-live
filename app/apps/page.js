const apps = [
  {
    name: 'Bingo',
    eyebrow: 'משחק כיתתי חי',
    description: 'בינגו לימודי שמאפשר למורה להפעיל כיתה שלמה סביב מושגים, שאלות ואתגר.',
    href: 'https://classroom-bingo-live.vercel.app',
    image: '/xsite-bingo-baclass-new-palette.png',
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
      <header className="topbar catalog-topbar">
        <a className="brandmark" href="/" aria-label="Xsite">
          <span className="site-logo-monochrome" aria-hidden="true"></span>
        </a>
        <nav>
          <a href="/">בית</a>
          <a className="active" href="/apps">אפליקציות</a>
          <a href="/#teachers">למורים</a>
          <a href="/#how">איך זה עובד</a>
          <a href="/#about">אודות</a>
        </nav>
        <div className="actions">
          <a className="ghost" href="/">חזרה לבית</a>
        </div>
      </header>

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
                <img src={app.image} alt={app.name} className="catalog-image" />
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
