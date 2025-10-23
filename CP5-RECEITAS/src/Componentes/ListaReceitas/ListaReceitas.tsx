import React from 'react';
import { useReceitaForm } from '../../contexts/ReceitaFormContext';

const ListaReceitas: React.FC = () => {
  const { receitas, limparFormulario } = useReceitaForm();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Minhas Receitas ({receitas.length})</h2>
        <button
          onClick={limparFormulario}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Limpar Tudo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {receitas.map((receita, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            {receita.imagem && (
              <img 
                src={receita.imagem} 
                alt={receita.nome}
                className="w-full h-48 object-cover rounded mb-2"
              />
            )}
            <h3 className="text-xl font-bold">{receita.nome}</h3>
            <p className="text-pink-600">Categoria: {receita.categoria}</p>
            <p className="text-pink-600">Tempo: {receita.tempo}</p>
            
            <h4 className="font-bold mt-2">Ingredientes:</h4>
            <ul className="list-disc list-inside">
              {receita.ingredientes.map((ingrediente, idx) => (
                <li key={idx}>{ingrediente}</li>
              ))}
            </ul>
            
            <h4 className="font-bold mt-2">Modo de Preparo:</h4>
            <p>{receita.modoPreparo}</p>
          </div>
        ))}
      </div>

      {receitas.length === 0 && (
        <p className="text-center text-pink-500">Nenhuma receita adicionada ainda.</p>
      )}
    </div>
  );
};

export default ListaReceitas;