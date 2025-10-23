import { Link, useLocation } from "react-router-dom";

const Cabecalho = () => {
  const { pathname } = useLocation();

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
            <Link to="/login" className="hover:text-pink-700 transition">Login</Link>
          </nav>
        </div>

    <header className="bg-[#f0ffe9] flex justify-between items-center px-10 py-6 shadow-md">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo Sabores do Front" className="w-10 h-10" />
        <h1 className="text-gray-800 text-xl font-semibold">
          &lt;SABORES DO FRONT/&gt;
        </h1>

      </div>

      <nav className="flex gap-6 font-semibold">
        <Link
          to="/"
          className={`px-4 py-1 rounded-full ${
            pathname === "/" ? "bg-[#ff7d91] text-white" : "text-gray-800"
          }`}
        >
          Home
        </Link>
        <Link
          to="/receitas"
          className={`px-4 py-1 rounded-full ${
            pathname === "/receitas" ? "bg-[#ff7d91] text-white" : "text-gray-800"
          }`}
        >
          Receitas
        </Link>
        <Link
          to="/devs"
          className={`px-4 py-1 rounded-full ${
            pathname === "/devs" ? "bg-[#ff7d91] text-white" : "text-gray-800"
          }`}
        >
          Devs
        </Link>
      </nav>
    </header>
  )

  
};

export default Cabecalho;
