import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Receitas = () => {
  const [receitas, setReceitas] = useState<ReceitaTipos[]>([]);
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get('categoria');

  useEffect(() => {
    const buscarReceita = async () => {
      try {
        const response = await fetch("/data/receitas.json");
        const data = await response.json();
        setReceitas(data);
      } catch (error) {
        console.error("Erro ao buscar a receita: ", error);
      }
    };
    buscarReceita();
  }, []);


  const receitasFiltradas = categoria 
    ? receitas.filter(receita => 
        (categoria === 'entradas' && receita.categoria === 'Entradas') ||
        (categoria === 'pratos' && receita.categoria === 'Pratos Principais') ||
        (categoria === 'sobremesas' && receita.categoria === 'Sobremesas')
      )
    : receitas;

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-12">
          <Link to="/" className="inline-block mb-4">
            <div className="bg-amber-800 text-amber-100 py-2 px-6 rounded-lg border-2 border-amber-700">
              <p className="text-lg font-mono">← VOLTAR PARA HOME</p>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-amber-900 font-serif">
            {categoria ? `FUNCTION ${categoria.toUpperCase()} ()` : 'FUNCTION RECEITAS ()'}
          </h1>
        </header>

        <section className="bg-white border-2 border-amber-800 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-amber-50 border-2 border-amber-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4 text-center font-mono">
                FUNCTION ENTRADAS ()
              </h3>
              <div className="space-y-3">
                {receitasFiltradas
                  .filter(receita => receita.categoria === 'Entradas')
                  .map((receita) => (
                    <div key={receita.id} className="flex justify-between items-center border-b border-amber-200 pb-2">
                      <Link 
                        to={`/receita/${receita.id}`}
                        className="text-amber-700 hover:text-amber-900 hover:underline font-medium"
                      >
                        {receita.id}. {receita.nome}
                      </Link>
                      <span className="font-bold text-amber-900 text-sm">→</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4 text-center font-mono">
                FUNCTION PRATOS ()
              </h3>
              <div className="space-y-3">
                {receitasFiltradas
                  .filter(receita => receita.categoria === 'Pratos Principais')
                  .map((receita) => (
                    <div key={receita.id} className="flex justify-between items-center border-b border-amber-200 pb-2">
                      <Link 
                        to={`/receita/${receita.id}`}
                        className="text-amber-700 hover:text-amber-900 hover:underline font-medium"
                      >
                        {receita.id}. {receita.nome}
                      </Link>
                      <span className="font-bold text-amber-900 text-sm">→</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4 text-center font-mono">
                FUNCTION SOBREMESAS ()
              </h3>
              <div className="space-y-3">
                {receitasFiltradas
                  .filter(receita => receita.categoria === 'Sobremesas')
                  .map((receita) => (
                    <div key={receita.id} className="flex justify-between items-center border-b border-amber-200 pb-2">
                      <Link 
                        to={`/receita/${receita.id}`}
                        className="text-amber-700 hover:text-amber-900 hover:underline font-medium"
                      >
                        {receita.id}. {receita.nome}
                      </Link>
                      <span className="font-bold text-amber-900 text-sm">→</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {receitas.length === 0 && (
            <div className="text-center py-8">
              <div className="font-mono text-amber-700 text-lg">
                CARREGANDO RECEITAS...
              </div>
              <div className="animate-pulse text-amber-500 mt-2">
                ██████████████
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Receitas;