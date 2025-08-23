// app/contacts/page.js
"use client";
export const metadata = {
  title: "Contatti",
  description: "Come metterti in contatto con me.",
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contatti</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Hai domande, proposte o semplicemente vuoi salutare? Scrivimi pure!
      </p>

      <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
        <li>
          Email:{" "}
          <a
            href="mailto:edoardo.giambuzzi@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            edoardo.giambuzzi@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/edoardo-giambuzzi-45876599/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Edoardo Giambuzzi
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/DjamboOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            DjamboOfficial
          </a>
        </li>
      </ul>
    </section>
  );
}
