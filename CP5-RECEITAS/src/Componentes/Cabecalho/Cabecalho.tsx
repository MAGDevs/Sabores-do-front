import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className="bg-pink-400 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Sabores do Front
          </Link>
          
          {/* Menu */}
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-pink-700 transition">Home</Link>
            <Link to="/receitas" className="hover:text-pink-700 transition">Receitas</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;