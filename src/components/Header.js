export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Il mio Blog</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
