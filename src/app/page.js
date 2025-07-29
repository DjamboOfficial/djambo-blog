export default function HomePage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Benvenuto nel mio blog!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Contenuto da decidersi
      </p>

      <div className="space-y-8">
        <article className="border-b pb-4">
          <h2 className="text-2xl font-semibold">Titolo del Post</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Vabbè, questo lo inserisco poi...
          </p>

          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Leggi tutto
          </a>
        </article>
      </div>
    </section>
  );
}
