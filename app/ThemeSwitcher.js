const themes = [
  {
    id: "cream",
    label: "בורדו + שמנת",
    swatches: ["#8F1D4F", "#FFF3E2", "#D9A6B6"]
  },
  {
    id: "sage",
    label: "בורדו + מרווה",
    swatches: ["#8F1D4F", "#A8B7A2", "#F7F0E6"]
  },
  {
    id: "mauve",
    label: "סגלגל + מאוב",
    swatches: ["#6F3D58", "#C991A3", "#A7A4B3"]
  }
];

export default function ThemeSwitcher() {
  return (
    <details className="theme-switcher">
      <summary className="theme-trigger" aria-label="בחירת ערכת עיצוב זמנית">
        <span className="theme-trigger-dots" aria-hidden="true">
          <i></i><i></i><i></i>
        </span>
        Themes
      </summary>

      <div className="theme-panel">
        <div className="theme-panel-head">
          <strong>ערכת עיצוב</strong>
          <span>כלי בנייה זמני</span>
        </div>

        <div className="theme-options">
          {themes.map((item) => (
            <div className="theme-choice" key={item.id}>
              <input
                className="theme-radio"
                type="radio"
                id={`theme-${item.id}`}
                name="xsite-theme"
                defaultChecked={item.id === "mauve"}
              />
              <label className={`theme-option theme-option-${item.id}`} htmlFor={`theme-${item.id}`}>
                <span className="theme-swatches" aria-hidden="true">
                  {item.swatches.map((color) => (
                    <i key={color} style={{ background: color }}></i>
                  ))}
                </span>
                <span>{item.label}</span>
                <b className="theme-check" aria-hidden="true">✓</b>
              </label>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
