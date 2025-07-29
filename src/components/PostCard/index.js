export default function PostCard({ title, summary, date, slug, videoId }) {
  return (
    <article className="border-b pb-6 mb-6">
      <h2 className="text-2-xl font-bold mb-1">
        <a
          href={`/blog/${slug}`}
          className="hover:underline text-blue-600 dark:text-blue-400"
        ></a>
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>

      {videoId && (
        <a
          href={`https://www.youtube.com/watch/v=${videoId}`}
          target="blank"
          rel="noopener noreferrer"
          className="block my-4"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Anteprima video di ${title}`}
            className="w-full rounded shadow-md hover:opacity-90 transition"
          />
        </a>
      )}

      <p className="text-gray-700 dark:text-gray-300 mb-2">{summary}</p>

      <a
        href={`/blog/${slug}`}
        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        Leggi tutto →
      </a>
    </article>
  );
}
