import PostCard from "@/components/PostCard";
import FadeIn from "@/components/FadeIn";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Archivio – Tutti i post",
  description: "Tutti gli articoli pubblicati, in ordine dal più recente.",
};

// 👇 Qui Next.js App Router ti passa "params.locale"
export default function BlogIndexPage({ params }) {
  const { locale } = params;

  // Recupero tutti i post
  let posts = getAllPosts();

  // Filtro i post per lingua (assumendo che tu abbia "lang" nel frontmatter MDX)
  posts = posts.filter((p) => p.lang === locale);

  // Ordino per data decrescente
  posts = posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  return (
    <FadeIn>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Archivio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {posts.length} articoli pubblicati
        </p>

        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
            slug={post.slug}
            cover={post.cover}
            videoId={post.videoId}
          />
        ))}
      </section>
    </FadeIn>
  );
}
