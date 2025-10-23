import { Link } from "react-router-dom";

const Home = () => {
  const pratosEspeciais = [
    { id: 1, nome: "Bife à Milanesa", descricao: "Clássico italiano com toque brasileiro", categoria: "starter" },
    { id: 2, nome: "Risotto de Funghi", descricao: "Arroz cremoso com cogumelos selvagens", categoria: "main" },
    { id: 3, nome: "Tiramisù", descricao: "Sobremesa italiana tradicional", categoria: "sweet" },
    { id: 4, nome: "Bruschetta al Pomodoro", descricao: "Entrada fresca com tomate e manjericão", categoria: "starter" },
    { id: 5, nome: "pipipipopopo", descricao:"Sla oq sla oq lá", categoria: "main"},
    { id: 6, nome: "O QUE MAIS VOCE QUER DE MIM HEIN?", descricao:"eu ja nn sei de mais nada tbm", categoria: "sweet"}
  ];

  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        <header className="text-center mb-12">
          <div className="bg-pink-800 text-white py-3 px-8 inline-block rounded-lg border-2 border-pink-700">
            <p className="text-xl font-mono">FUNCTION SABORES_ESPECIAIS ()</p>
          </div>
        </header>

        <section className="bg-white border-2 border-pink-800 rounded-lg shadow-lg p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-pink-900 mb-4 font-serif">
            BEM-VINDO AO NOSSO CARDÁPIO
          </h2>
          <p className="text-pink-700 text-lg mb-6 max-w-2xl mx-auto">
            Descubra receitas incríveis que combinam tradição e inovação. 
            Cada prato é uma experiência única de sabor.
          </p>
          
          <Link 
            to="/receitas"
            className="bg-pink-700 hover:bg-pink-800 text-amber-100 font-bold py-3 px-8 rounded-lg border-2 border-pink-900 transition duration-300 inline-block font-mono"
          >
            VER TODAS AS RECEITAS
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-8 text-center font-serif">
            PRATOS ESPECIAIS DA CASA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pratosEspeciais.map((prato) => (
              <div key={prato.id} className="bg-amber-100 border-2 border-amber-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6 text-center">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                    prato.categoria === 'starter' ? 'bg-green-200 text-green-800' :
                    prato.categoria === 'main' ? 'bg-amber-200 text-amber-800' :
                    'bg-pink-200 text-pink-800'
                  }`}>
                    {prato.categoria === 'starter' ? 'ENTRADA' : 
                     prato.categoria === 'main' ? 'PRINCIPAL' : 'SOBREMESA'}
                  </div>
                  <h3 className="font-bold text-amber-900 text-xl mb-2">{prato.nome}</h3>
                  <p className="text-amber-600 text-sm mb-4">{prato.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border-2 border-amber-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center font-mono">
            EXPLORAR CATEGORIAS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 border-2 border-amber-700 rounded-lg p-6 text-center hover:bg-amber-100 transition duration-300">
              <h3 className="font-bold text-amber-900 text-xl mb-2 font-mono">starter</h3>
              <p className="text-amber-600 mb-4">Aperitivos e Entradas</p>
              <Link 
                to="/entradas"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 inline-block text-sm"
              >
                ENTRADAS
              </Link>
            </div>

            <div className="bg-amber-50 border-2 border-amber-700 rounded-lg p-6 text-center hover:bg-amber-100 transition duration-300">
              <h3 className="font-bold text-amber-900 text-xl mb-2 font-mono">main()</h3>
              <p className="text-amber-600 mb-4">Pratos Principais</p>
              <Link 
                to="/pratos"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded transition duration-300 inline-block text-sm"
              >
                PRATOS
              </Link>
            </div>

            <div className="bg-amber-50 border-2 border-amber-700 rounded-lg p-6 text-center hover:bg-amber-100 transition duration-300">
              <h3 className="font-bold text-amber-900 text-xl mb-2 font-mono">sweet</h3>
              <p className="text-amber-600 mb-4">Sobremesas Doces</p>
              <Link 
                to="/sobremesas"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded transition duration-300 inline-block text-sm"
              >
                SOBREMESAS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
=======
    <>
    <div className="bg-[#f0ffe9]">
      <h1>Home Page</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            <Link to={`receita/${receita.id}`}>{receita.nome}</Link>
          </li>
        ))}
      </ul>
      </div>
    </>
>>>>>>> Stashed changes
  );
};

export default Home;