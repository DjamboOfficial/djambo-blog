"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + titolo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo Djambo" width={40} height={40} />
          <span className="text-xl font-bold tracking-wide">Djambo Blog</span>
        </Link>

        {/* Menu principale */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:underline">
              <Image
                src="/logo.png"
                alt="Home"
                width={32}
                height={32}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Chi sono
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:underline">
              Contatti
            </Link>
          </li>
        </ul>

        {/* Toggle dark mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="ml-4 border px-2 py-1 rounded"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
