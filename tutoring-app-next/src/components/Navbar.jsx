export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-2xl font-bold text-blue-600">
          TutoringApp
        </a>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-500">
            Inicio
          </a>
          <a href="/login" className="hover:text-blue-500">
            Login
          </a>
          <a href="/register" className="hover:text-blue-500">
            Registro
          </a>
        </nav>
      </div>
    </header>
  );
}
