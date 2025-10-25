import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";
import Cabecalho from "../../Componentes/Cabecalho/Cabecalho";
import Footer from "../../Componentes/Footer/Footer";

const Receita = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState<ReceitaTipos | null>(null);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data: ReceitaTipos[]) => {
        const encontrado = data.find((p) => p.id.toString() === id);
        setReceita(encontrado || null);
      })
      .catch(() => setReceita(null));
  }, [id]);

  if (!receita) {
    return (
      <>
        <Cabecalho />
        <div className="min-h-screen flex items-center justify-center font-mono text-gray-700">
          <h1>Receita não encontrada!</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#f5faef] flex flex-col items-center py-10 font-mono text-gray-900">
        <div className="bg-[#f5faef] w-full max-w-md rounded-3xl shadow-lg overflow-hidden">

          <div className="bg-[#ffcc33] h-12 flex items-center justify-start gap-2 px-4">
            <div className="w-3 h-3 rounded-full bg-[#ff4d94]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ff8c00]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00cc66]"></div>
          </div>

          <img
            src={receita.imagem}
            alt={receita.nome}
            className="w-full h-56 object-cover"
          />

          <div className="bg-[#ff88a6] text-black px-6 py-6">
            <h2 className="font-bold text-lg mb-4">
              RECEITA: {receita.nome.toUpperCase()}
            </h2>

            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
{`{
  "id": ${receita.id},
  "categoria": "${receita.categoria}",
  "nome": "${receita.nome}",
  
  "ingredientes": [
    ${receita.ingredientes.map((ing) => `"${ing}"`).join(",\n    ")}
  ],
  
  "modoPreparo": "${receita.modoPreparo}",
  "tempo": "${receita.tempo}",
  "imagem": "${receita.imagem}"
}`}
            </pre>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Receita;
