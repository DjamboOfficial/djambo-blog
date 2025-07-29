"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Djambo-Blog</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-2 py-1 rounded"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Chi sono
            </a>
          </li>
          <li>
            <a href="/contacts" className="hover:underline">
              Contatti
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
