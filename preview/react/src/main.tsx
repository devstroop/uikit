import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeSwitcher } from "@devstroop/react-uikitkit";
import { THEMES } from "./themes";
import { App } from "./App";
import "./preview.css";

function Root() {
  const [themeId, setThemeId] = useState(THEMES[0]?.id ?? "default");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const theme = THEMES.find((t) => t.id === themeId);
    if (!theme) return;
    const style = document.createElement("style");
    style.id = "active-theme";
    style.textContent = theme.css;
    document.getElementById("active-theme")?.remove();
    document.head.appendChild(style);
  }, [themeId]);

  return (
    <div className="chrome">
      <header className="chrome-header">
        <h1>@devstroop/react-uikitkit</h1>
        <p>30 components, 6 design systems — all driven by the same tokens</p>
        <div className="chrome-controls">
          <label>
            Theme
            <select value={themeId} onChange={(e) => setThemeId(e.target.value)}>
              {THEMES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>
          <ThemeSwitcher defaultTheme={dark ? "dark" : "light"} onChange={(t) => setDark(t === "dark")} />
        </div>
      </header>
      <App />
      <footer className="chrome-footer">
        Theme CSS injected live from <code>themes/*/tokens.css</code> — contrast is WCAG AA enforced
        by the token validator.
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);