import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./Topbar.css";

function stopPlaceholder(event) {
  event.preventDefault();
}

export default function Topbar() {
  const { theme, toggle } = useTheme();
  const isDark = theme
    ? theme === "dark"
    : typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <header className="topbar container">
      <NavLink to="/" className="wordmark" end>
        Inkline<span className="dot">.</span>
      </NavLink>
      <nav className="nav" aria-label="Primary">
        <NavLink to="/" end>
          Product
        </NavLink>
        <a href="#docs" onClick={stopPlaceholder}>
          Docs
        </a>
        <a href="#pricing" onClick={stopPlaceholder}>
          Pricing
        </a>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <div className="topbar-right">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggle}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
