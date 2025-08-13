import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/mdx";

export default function TagPage({ params }) {
  const { tag } = params;
  const allPosts = getAllPosts();

  // Filtra i post che hanno il tag (case insensitive)
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Articoli con tag: {tag}</h1>

      {filteredPosts.length === 0 && <p>Nessun post trovato con questo tag.</p>}

      {filteredPosts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          summary={post.summary}
          date={post.date}
          slug={post.slug}
          videoId={post.videoId}
        />
      ))}
    </main>
  );
}

// Per Next.js App Router: generiamo i parametri statici di tutte le pagine tag
export async function generateStaticParams() {
  const posts = getAllPosts();

  // Raccogli tutti i tag
  const tagsSet = new Set();

  posts.forEach((post) => {
    post.tags?.forEach((t) => tagsSet.add(t.toLowerCase()));
  });

  return Array.from(tagsSet).map((tag) => ({
    tag,
  }));
}
