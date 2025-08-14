"use client";

import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  title,
  summary,
  date,
  slug,
  cover,
  videoId,
  tags = [],
}) {
  const MAX_CHARS = 100;
  console.log("Qui PostCard: ", cover);

  const excerpt =
    summary && summary.length > MAX_CHARS
      ? summary.slice(0, MAX_CHARS - 1) + "…"
      : summary;

  // Funzione helper per capire se cover è URL remoto
  const isRemote = (url) => /^https?:\/\//.test(url);

  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-200 dark:border-gray-800 overflow-hidden mb-10">
      {/* Media */}
      {videoId ? (
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video overflow-hidden"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Anteprima video di ${title}`}
            width={480}
            height={270}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </a>
      ) : cover ? (
        <Link
          href={`/blog/${slug}`}
          className="block aspect-[3/2] overflow-hidden"
        >
          <Image
            src={isRemote(cover) ? cover : `/${cover.replace(/^\/?/, "")}`}
            alt={`Copertina del post: ${title}`}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </Link>
      ) : (
        // Fallback se non ci sono video o cover
        <div className="bg-gray-200 dark:bg-gray-800 aspect-[3/2] flex items-center justify-center text-gray-500 dark:text-gray-400">
          Nessuna immagine
        </div>
      )}

      {/* Testo */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {date}
          </time>
          {tags.length > 0 && (
            <div className="flex gap-1 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wide bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-3 leading-tight">
          <Link
            href={`/blog/${slug}`}
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            {title}
          </Link>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-base mb-5">
          {excerpt}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Leggi tutto <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
