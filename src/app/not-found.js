// src/app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
        Pagina non trovata. Forse hai sbagliato indirizzo.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
      >
        Torna alla home
      </Link>
    </div>
  );
}
