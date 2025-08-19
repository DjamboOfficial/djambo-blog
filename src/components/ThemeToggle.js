// components/ThemeToggle.js
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // usa unico key (verifica che RootLayout usi la stessa)

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null); // 'dark' | 'light' | null

  useEffect(() => {
    // protezione per SSR (ma siamo in client)
    const saved =
      typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
      return;
    }

    // altrimenti usa la preferenza di sistema
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    // se ancora null, fallback safe
    const current =
      theme ||
      (document.documentElement.classList.contains("dark") ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // privacy mode può fallire
      console.warn("Could not persist theme:", e);
    }
    console.log("Theme set to", next);
  };

  if (theme === null) {
    return (
      <button
        className={`theme-toggle ${className}`}
        aria-hidden="true"
        tabIndex={-1}
        title="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label="Toggle dark mode"
      title={
        theme === "dark"
          ? "Passa alla modalità chiara"
          : "Passa alla modalità scura"
      }
      className={`theme-toggle ${className}`}
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
