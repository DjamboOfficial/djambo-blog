export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Il mio Blog. Tutti i diritti
          riservati.
        </p>
      </div>
    </footer>
  );
}
