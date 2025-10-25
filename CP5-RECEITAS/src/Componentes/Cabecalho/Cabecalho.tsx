import { Link, useLocation } from "react-router-dom";

const Cabecalho = () => {
  const location = useLocation();

  return (
    <header className="bg-[#F4FDEB] shadow-md font-mono">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img
            src="/imagens/logotipo-sab-front.png"
            alt="Logo Sabores do Front"
            className="w-20 h-20"
          />
          <Link
            to="/"
            className="text-gray-700 font-mono text-xl font-semibold tracking-tight hover:scale-105 transition-transform"
          >
            &lt;SABORES DO FRONT/&gt;
          </Link>
        </div>

        <nav className="flex items-center space-x-6 font-medium">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "bg-pink-400 text-white px-4 py-1 rounded-full font-semibold"
                : "text-black hover:text-pink-500 transition-colors"
            }`}
          >
            Home
          </Link>

          <Link
            to="/receitas"
            className={`${
              location.pathname === "/receitas"
                ? "bg-pink-400 text-white px-4 py-1 rounded-full font-semibold"
                : "text-black hover:text-pink-500 transition-colors"
            }`}
          >
            Receitas
          </Link>

          <Link
            to="/admin"
            className={`${
              location.pathname === "/admin"
                ? "bg-pink-400 text-white px-4 py-1 rounded-full font-semibold"
                : "text-black hover:text-pink-500 transition-colors"
            }`}
          >
            Admin
          </Link>

          <Link
            to="/login"
            className={`${
              location.pathname === "/login"
                ? "bg-pink-400 text-white px-4 py-1 rounded-full font-semibold"
                : "text-black hover:text-pink-500 transition-colors"
            }`}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
