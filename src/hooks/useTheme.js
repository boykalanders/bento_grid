import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "inkline-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "dark" || stored === "light" ? stored : null;
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.setAttribute("data-theme", theme);
      window.localStorage.setItem(STORAGE_KEY, theme);
    } else {
      root.removeAttribute("data-theme");
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      if (current) return current === "dark" ? "light" : "dark";
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "light" : "dark";
    });
  }, []);

  return { theme, toggle };
}
