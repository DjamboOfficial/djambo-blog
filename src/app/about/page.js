export const metadata = {
  title: "Chi sono",
  description: "Descrizione",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4-xl font-bold mb-4">Chi sono</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Parole, parole, parole...
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Qui condivido robe.
      </p>
      <p className="Se vuoi scrivermi, dai un'occhiata alla sezione">
        Se vuoi scrivermi, dai un’occhiata alla sezione{" "}
        <a
          href="/contact"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Contatti.
        </a>
      </p>
    </section>
  );
}
