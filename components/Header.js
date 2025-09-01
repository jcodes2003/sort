"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // initialize theme from localStorage or prefers-color-scheme
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between shadow-sm backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">S</div>
        <div>
          <div className="text-sm font-semibold">Sort Attendance</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Upload, filter and track attendance</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          title="Toggle light / dark"
          className="flex items-center gap-2 px-3 py-1 rounded-md border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM14.84 14.84a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm14 0a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM4.22 15.78a.75.75 0 010-1.06l.88-.88a.75.75 0 111.06 1.06l-.88.88a.75.75 0 01-1.06 0zM14.84 5.16a.75.75 0 010-1.06l.88-.88a.75.75 0 111.06 1.06l-.88.88a.75.75 0 01-1.06 0zM10 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
            </svg>
          )}
          <span className="text-sm">{theme === "dark" ? "Dark" : "Light"}</span>
        </button>
      </div>
    </header>
  );
}
