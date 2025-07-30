import PostCard from "@/components/PostCard";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <FadeIn>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Benvenuto nel mio blog!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Contenuto da decidersi
        </p>

        <PostCard
          title="Hadrian's Wall Jam"
          summary="Una jam ambient ispirata al confine dell'Impero Romano."
          date="29 Luglio 2025"
          slug="hadrians-wall-jam"
          videoId="xWGa9Gq4aFI" // ← sostituisci con il tuo vero ID video
        />
      </section>
    </FadeIn>
  );
}
