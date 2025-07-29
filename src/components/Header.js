export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Djambo-Blog</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Chi sono
            </a>
          </li>
          <li>
            <a href="/contacts" className="hover:underline">
              Contatti
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
