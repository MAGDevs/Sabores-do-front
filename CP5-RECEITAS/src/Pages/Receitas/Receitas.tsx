import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Receitas = () => {
  const [receitas, setReceitas] = useState<ReceitaTipos[]>([]);
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("categoria");

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
    ? receitas.filter(
        (receita) =>
          (categoria === "entradas" && receita.categoria === "Entradas") ||
          (categoria === "pratos" && receita.categoria === "Pratos Principais") ||
          (categoria === "sobremesas" && receita.categoria === "Sobremesas")
      )
    : receitas;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-6xl bg-[#ff88a6] border-[#00cc66] rounded-3xl shadow-xl p-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center mb-12">
          <Link to="/" className="mb-6">
            <button className="bg-[#ff88a6] hover:bg-[#00cc66] text-amber-50 font-mono px-6 py-2 rounded-lg border-2 border-[#00cc66] transition">
              ← VOLTAR PARA HOME
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-black tracking-wide text-center">
            {categoria
              ? `FUNCTION ${categoria.toUpperCase()} ()`
              : "FUNCTION RECEITAS ()"}
          </h1>
          <p className="mt-2 text-white font-mono text-sm text-center">
            Escolha uma das opções abaixo para visualizar a receita completa 🍴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { titulo: "FUNCTION ENTRADAS ()", tipo: "Entradas" },
            { titulo: "FUNCTION PRATOS ()", tipo: "Pratos Principais" },
            { titulo: "FUNCTION SOBREMESAS ()", tipo: "Sobremesas" },
          ].map((secao) => (
            <div
              key={secao.titulo}
              className="bg-amber-50 border-2 border-[#00cc66] rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-black mb-4 text-center font-mono">
                {secao.titulo}
              </h3>
              <div className="space-y-3">
                {receitasFiltradas
                  .filter((r) => r.categoria === secao.tipo)
                  .map((receita) => (
                    <div
                      key={receita.id}
                      className="flex justify-between items-center border-b border-[#00cc66] pb-2"
                    >
                      <Link
                        to={`/receita/${receita.id}`}
                        className="text-black hover:text-[#00cc66] hover:underline font-medium transition-colors"
                      >
                        {receita.id}. {receita.nome}
                      </Link>
                      <span className="font-bold text-amber-900 text-sm">→</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Loading */}
        {receitas.length === 0 && (
          <div className="text-center py-10">
            <p className="font-mono text-amber-700 text-lg">
              CARREGANDO RECEITAS...
            </p>
            <div className="animate-pulse text-amber-500 mt-2 text-2xl">
              ██████████████
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Receitas;
