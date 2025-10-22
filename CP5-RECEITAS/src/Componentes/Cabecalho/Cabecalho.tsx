import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className="bg-pink-400 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Sabores do Front
          </Link>
          
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-pink-700 transition">Home</Link>
            <Link to="/receitas" className="hover:text-pink-700 transition">Receitas</Link>
            <Link to="/admin" className="hover:text-pink-700 transition">Admin</Link> 
            <Link to="/login" className="hover:text-pink-700 transition">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;