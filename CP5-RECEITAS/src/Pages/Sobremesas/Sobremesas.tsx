import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Sobremesas = () => {
  const [sobremesas, setSobremesas] = useState<ReceitaTipos[]>([]);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data: ReceitaTipos[]) => {
        const sobremesasFiltradas = data.filter(receita => receita.categoria === "Sobremesas");
        setSobremesas(sobremesasFiltradas);
      });
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-12">
          <Link to="/" className="inline-block mb-4">
            <div className="bg-pink-800 text-pink-100 py-2 px-6 rounded-lg border-2 border-pink-700">
              <p className="text-lg font-mono">← VOLTAR PARA HOME</p>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-pink-900 font-serif">
            FUNCTION SOBREMESAS ()
          </h1>
          <p className="text-pink-600 mt-2">Doces que fazem a vida mais feliz!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sobremesas.map((sobremesa) => (
            <div key={sobremesa.id} className="bg-white border-2 border-pink-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-pink-200 flex items-center justify-center">
                {sobremesa.imagem ? (
                  <img src={sobremesa.imagem} alt={sobremesa.nome} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-pink-600 font-mono">imagem</span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-pink-900 text-xl mb-2">{sobremesa.nome}</h3>
                <p className="text-pink-600 text-sm mb-3">
                  <span className="font-semibold">{sobremesa.tempo}</span>
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-pink-800 mb-1">Ingredientes:</h4>
                  <ul className="text-pink-600 text-sm list-disc list-inside">
                    {sobremesa.ingredientes.slice(0, 3).map((ingrediente, idx) => (
                      <li key={idx}>{ingrediente}</li>
                    ))}
                    {sobremesa.ingredientes.length > 3 && (
                      <li className="text-pink-500">+ {sobremesa.ingredientes.length - 3} mais...</li>
                    )}
                  </ul>
                </div>

                <Link 
                  to={`/receita/${sobremesa.id}`}
                  className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-2 rounded transition duration-300 font-semibold"
                >
                  VER RECEITA COMPLETA
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sobremesas.length === 0 && (
          <div className="text-center py-12">
            <div className="text-pink-600 text-lg font-mono">
              CARREGANDO SOBREMESAS...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sobremesas;