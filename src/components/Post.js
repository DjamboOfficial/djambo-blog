// components/Post.js
import Image from "next/image";

export default function Post({ children, title, date, cover }) {
  const isRemote = (url) => /^https?:\/\//.test(url);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-lg prose-neutral">
      {/* Header */}
      <header className="mb-10 border-b border-gray-500 pb-5">
        <h1 className="text-4xl font-extrabold leading-snug mb-2 text-gray-900">
          {title}
        </h1>
        {date && <time className="block text-sm text-gray-700">{date}</time>}
      </header>

      {/* Cover Image */}
      {cover ? (
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={isRemote(cover) ? cover : `/${cover.replace(/^\/?/, "")}`}
            alt={`Copertina del post: ${title}`}
            width={900}
            height={500}
            className="w-full h-auto object-cover"
            priority // LCP above the fold
            sizes="100vw"
          />
        </div>
      ) : (
        <div className="mb-10 bg-gray-200 dark:bg-gray-800 h-60 flex items-center justify-center rounded-2xl text-gray-500 dark:text-gray-400">
          Nessuna immagine
        </div>
      )}

      {/* Main content */}
      <div
        className="
          post-content
          space-y-6
          [&>h2]:mt-10
          [&>h2]:pt-2
          [&>h2]:border-t
          [&>h2]:border-gray-500
          [&>h2]:scroll-mt-20
          [&>h2]:text-gray-900
          [&>h2]:font-bold
          [&>blockquote]:border-l-4
          [&>blockquote]:border-gray-600
          [&>blockquote]:pl-6
          [&>blockquote]:italic
          [&>blockquote]:text-gray-800
          [&>aside]:float-right
          [&>aside]:ml-6
          [&>aside]:w-2/5
          [&>aside]:bg-gray-200
          [&>aside]:p-5
          [&>aside]:rounded-2xl
          [&>aside]:my-4
          [&>aside]:text-sm
          [&>aside]:text-gray-900
          [&>aside]:text-right
          [&>aside]:shadow-md
          [&>hr]:my-10
        "
      >
        {children}
      </div>
    </article>
  );
}
