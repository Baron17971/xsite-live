"use client";

import { useEffect, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("mauve");
  const panelRef = useRef(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("xsite-theme");
    const initial = themes.some((item) => item.id === saved) ? saved : "mauve";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const applyTheme = (id) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    window.localStorage.setItem("xsite-theme", id);
  };

  return (
    <div className="theme-switcher" ref={panelRef}>
      <button
        type="button"
        className="theme-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="בחירת ערכת עיצוב זמנית"
      >
        <span className="theme-trigger-dots" aria-hidden="true">
          <i></i><i></i><i></i>
        </span>
        Themes
      </button>

      {open && (
        <div className="theme-panel" role="dialog" aria-label="בחירת ערכת עיצוב">
          <div className="theme-panel-head">
            <strong>ערכת עיצוב</strong>
            <span>כלי בנייה זמני</span>
          </div>
          <div className="theme-options">
            {themes.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`theme-option ${theme === item.id ? "active" : ""}`}
                onClick={() => applyTheme(item.id)}
                aria-pressed={theme === item.id}
              >
                <span className="theme-swatches" aria-hidden="true">
                  {item.swatches.map((color) => (
                    <i key={color} style={{ background: color }}></i>
                  ))}
                </span>
                <span>{item.label}</span>
                <b aria-hidden="true">{theme === item.id ? "✓" : ""}</b>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
