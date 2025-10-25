import { Link } from "react-router-dom";

export default function Home() {
  const pratos = [
    {
      id: 1,
      nome: "Bruschetta Italiana",
      imagem: "/imagens/bruschetta.jpg",
      tipo: "Entrada",
      descricao: "Pão italiano com tomate, azeite e manjericão fresco.",
    },
    {
      id: 2,
      nome: "Ceviche Peruano",
      imagem: "/imagens/ceviche.jpg",
      tipo: "Entrada",
      descricao: "Peixe branco marinado no limão com cebola roxa e coentro.",
    },
    {
      id: 7,
      nome: "Feijoada Tradicional",
      imagem: "/imagens/feijoada.jpg",
      tipo: "Principal",
      descricao: "Feijão preto com carnes, servido com arroz e farofa.",
    },
    {
      id: 10,
      nome: "Lasanha de Carne",
      imagem: "/imagens/lasanha_carne.jpg",
      tipo: "Principal",
      descricao: "Camadas de massa, carne e queijo gratinado.",
    },
    {
      id: 14,
      nome: "Pavê de Chocolate",
      imagem: "/imagens/pave_chocolate.jpg",
      tipo: "Sobremesa",
      descricao: "Camadas de biscoito champagne e creme de chocolate.",
    },
    {
      id: 16,
      nome: "Mousse de Maracujá",
      imagem: "/imagens/mousse_maracuja.jpg",
      tipo: "Sobremesa",
      descricao: "Sobremesa leve e cremosa feita com suco natural da fruta.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5faef] text-gray-900 px-6 py-10 font-mono">
      <div className="max-w-6xl mx-auto">

        <section className="mb-10">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/imagens/bife_milanesa.jpg"
              alt="Bife à milanesa"
              className="w-full h-64 object-cover"
            />
            <Link to="/receita/11">
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-6 shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-pink-400">
              <h2 className="text-white text-3xl font-bold mb-2">
                Bife à Milanez[a]
              </h2>
              <p className="text-gray-200 text-sm">
                O prato principal em homenagem ao professor Adriano Milanez
              </p>
            </div>
            </Link>
          </div>
        </section>

        <h2 className="text-center text-xl font-bold tracking-widest mb-8">
          FUNCTION <span className="text-black">P</span>RATOS_ESPECIAIS ()
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pratos.map((prato) => (
            <div
              key={prato.id}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-pink-400"
            >
              <img
                src={prato.imagem}
                alt={prato.nome}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-1">
                  {prato.nome}
                </h3>
                <p className="text-gray-200 text-xs mb-3">{prato.descricao}</p>

                <Link
                  to={`/receita/${prato.id}`}
                  className="bg-pink-400 text-black font-bold text-sm py-1 px-3 rounded hover:bg-yellow-500 transition self-start"
                >
                  Ver receita
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 ">
          <div className="text-center">
            <Link to="/entradas">
            <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-t-md inline-block">
              {"{starter}"}
            </div>
            <div className="bg-white text-black border-2 border-yellow-400 px-4 py-2 font-bold">
              ENTRADAS
            </div>
            </Link>
          </div>
          

          <div className="text-center">
              <Link to="/pratos">
            <div className="bg-lime-400 text-black font-bold px-3 py-1 rounded-t-md inline-block">
              {"main()"}
            </div>
            <div className="bg-white text-black border-2 border-lime-400 px-4 py-2 font-bold">
              PRINCIPAIS
            </div>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/sobremesas">
            <div className="bg-pink-500 text-white font-bold px-3 py-1 rounded-t-md inline-block">
              {"</sweet>"}
            </div>
            <div className="bg-white text-black border-2 border-pink-500 px-4 py-2 font-bold">
              SOBREMESAS
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
