import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./Topbar.css";

function stopPlaceholder(event) {
  event.preventDefault();
}

export default function Topbar() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme
    ? theme === "dark"
    : typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Escape closes the mobile sidebar, and the page shouldn't scroll behind it
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // resizing past the breakpoint (e.g. rotating a tablet) shouldn't leave the
  // sidebar stuck open underneath the now-visible inline nav
  useEffect(() => {
    const query = window.matchMedia("(min-width: 881px)");
    const onChange = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar container">
      <NavLink to="/" className="wordmark" end onClick={closeMenu}>
        Inkline<span className="dot">.</span>
      </NavLink>

      <div className={`nav-backdrop${menuOpen ? " open" : ""}`} onClick={closeMenu} />

      <nav
        id="primary-nav"
        className={`nav${menuOpen ? " open" : ""}`}
        aria-label="Primary"
        onClick={(event) => {
          if (event.target.tagName === "A") closeMenu();
        }}
      >
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
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
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
