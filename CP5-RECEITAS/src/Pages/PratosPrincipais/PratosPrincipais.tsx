import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const PratosPrincipais = () => {
  const [pratos, setPratos] = useState<ReceitaTipos[]>([]);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data: ReceitaTipos[]) => {
        const pratosFiltrados = data.filter(receita => receita.categoria === "Pratos Principais");
        setPratos(pratosFiltrados);
      });
  }, []);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-12">
          <Link to="/" className="inline-block mb-4">
            <div className="py-2 px-6 rounded-lg border-2">
              <p className="text-lg font-mono">← VOLTAR PARA HOME</p>
            </div>
          </Link>
          <h1 className="text-4xl font-bold font-serif">
            FUNCTION PRATOS_PRINCIPAIS ()
          </h1>
          <p className="mt-2">Pratos que saciam e encantam!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pratos.map((prato) => (
            <div key={prato.id} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 flex items-center justify-center">
                {prato.imagem ? (
                  <img src={prato.imagem} alt={prato.nome} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono">imagem</span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{prato.nome}</h3>
                <p className="text-sm mb-3">
                  <span className="font-semibold">{prato.tempo}</span>
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-1">Ingredientes:</h4>
                  <ul className="text-sm list-disc list-inside">
                    {prato.ingredientes.slice(0, 3).map((ingrediente, idx) => (
                      <li key={idx}>{ingrediente}</li>
                    ))}
                    {prato.ingredientes.length > 3 && (
                      <li>+ {prato.ingredientes.length - 3} mais...</li>
                    )}
                  </ul>
                </div>

                <Link 
                  to={`/receita/${prato.id}`}
                  className="block w-full text-center py-2 rounded transition duration-300 font-semibold"
                >
                  VER RECEITA COMPLETA
                </Link>
              </div>
            </div>
          ))}
        </div>

        {pratos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-lg font-mono">
              CARREGANDO PRATOS...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PratosPrincipais;