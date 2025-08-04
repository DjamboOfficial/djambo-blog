import PostCard from "@/components/PostCard";
import FadeIn from "@/components/FadeIn";
import { getAllPosts } from "@/lib/mdx";

export default function HomePage() {
  const posts = getAllPosts(); // ← Dati dinamici da file MDX

  return (
    <FadeIn>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Benvenuto nel mio blog!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Le ultime dal confine tra suono, memoria e rovina.
        </p>

        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
            slug={post.slug}
            videoId={post.videoId}
          />
        ))}
      </section>
    </FadeIn>
  );
}
