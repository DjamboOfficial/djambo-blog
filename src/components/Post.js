// components/Post.js
export default function Post({ children, title, date }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 prose prose-lg prose-neutral dark:prose-invert">
      {/* Header */}
      <header className="mb-10 border-b border-gray-400 dark:border-gray-700 pb-5">
        <h1 className="text-4xl font-extrabold tracking-tight leading-snug mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        {date && (
          <time className="block text-sm text-gray-700 dark:text-gray-400">
            {date}
          </time>
        )}
      </header>

      {/* Main content */}
      <div
        className="
          post-content
          space-y-6

          [&>h2]:mt-10
          [&>h2]:pt-2
          [&>h2]:border-t
          [&>h2]:border-gray-400
          dark:[&>h2]:border-gray-600
          [&>h2]:scroll-mt-20
          [&>h2]:text-gray-900
          dark:[&>h2]:text-gray-100

          [&>blockquote]:border-l-4
          [&>blockquote]:border-gray-600
          [&>blockquote]:pl-6
          [&>blockquote]:italic
          [&>blockquote]:text-gray-800
          dark:[&>blockquote]:border-gray-500
          dark:[&>blockquote]:text-gray-300

          [&>aside]:float-right
          [&>aside]:ml-6
          [&>aside]:w-2/5
          [&>aside]:bg-gray-200
          dark:[&>aside]:bg-gray-800
          [&>aside]:p-5
          [&>aside]:rounded-2xl
          [&>aside]:my-4
          [&>aside]:text-sm
          [&>aside]:text-gray-900
          dark:[&>aside]:text-gray-300
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
