import Link from "next/link";

export default function PostCard({ title, summary, date, slug, videoId }) {
  const MAX_CHARS = 100;
  const excerpt =
    summary && summary.length > MAX_CHARS
      ? summary.slice(0, MAX_CHARS - 1) + "..."
      : summary;

  return (
    <article className="border-b pb-6 mb-6">
      <h2 className="text-2xl font-bold mb-1">
        <Link
          href={`/blog/${slug}`}
          className="hover:underline text-blue-600 dark:text-blue-400 inline-block"
          aria-label={`Leggi il post: ${title}`}
        >
          {title}
        </Link>
      </h2>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>

      {videoId && (
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 w-48 overflow-hidden"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Anteprima video di ${title}`}
            className="max-w-fit rounded-2xl shadow-md hover:opacity-90 transition"
          />
        </a>
      )}

      <p className="text-gray-700 dark:text-gray-300 mb-2">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
        aria-label={`Leggi tutto: ${title}`}
      >
        Leggi tutto <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
