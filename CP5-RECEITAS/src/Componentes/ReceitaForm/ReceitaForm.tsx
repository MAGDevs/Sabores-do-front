import React, { useState } from 'react';
import { useReceitaForm } from '../../contexts/ReceitaFormContext';
import type { ReceitaFormData } from '../../Types/ReceitaTipos';

const ReceitaForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    watch,
    setValue,
    adicionarReceita
  } = useReceitaForm();

  const [novoIngrediente, setNovoIngrediente] = useState('');

  const adicionarIngrediente = () => {
    if (novoIngrediente.trim()) {
      const ingredientesAtuais = watch('ingredientes') || [];
      setValue('ingredientes', [...ingredientesAtuais, novoIngrediente.trim()]);
      setNovoIngrediente('');
    }
  };

  const removerIngrediente = (index: number) => {
    const ingredientesAtuais = watch('ingredientes') || [];
    setValue('ingredientes', ingredientesAtuais.filter((_, i) => i !== index));
  };

  const onSubmit = (data: ReceitaFormData) => {
    adicionarReceita(data);
    alert('Receita adicionada com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Adicionar Nova Receita</h2>
      
      <div className="mb-4">
        <label className="block text-pink-700 mb-2">Nome da Receita</label>
        <input
          {...register('nome', { required: 'Nome é obrigatório' })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        {errors.nome && <span className="text-red-600 text-sm">{errors.nome.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-pink-700 mb-2">Categoria</label>
        <select
          {...register('categoria', { required: 'A seleção de Categoria é obrigatória' })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">Selecione...</option>
          <option value="entrada">Entrada</option>
          <option value="prato-principal">Prato Principal</option>
          <option value="sobremesa">Sobremesa</option>
        </select>
        {errors.categoria && <span className="text-red-600 text-sm">{errors.categoria.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-pink-700 mb-2">Ingredientes</label>
        <div className="flex gap-2 mb-2">
          <input
            value={novoIngrediente} 
            onChange={(e) => setNovoIngrediente(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                adicionarIngrediente();
              }
            }}
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Adicionar ingrediente"
          />
          <button
            type="button"
            onClick={adicionarIngrediente}
            className="bg-pink-500 text-white px-4 rounded hover:bg-pink-600 transition-colors"
          >
            +
          </button>
        </div>
        
        <ul className="space-y-1">
          {(watch('ingredientes') || []).map((ingrediente, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
              <span>{ingrediente}</span>
              <button
                type="button"
                onClick={() => removerIngrediente(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <label className="block text-pink-700 mb-2">Modo de Preparo</label>
        <textarea
          {...register('modoPreparo', { required: 'O Modo de preparo é obrigatório' })}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        {errors.modoPreparo && <span className="text-red-600 text-sm">{errors.modoPreparo.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-pink-700 mb-2">Tempo de Preparo</label>
        <input
          {...register('tempo', { required: 'Tempo é obrigatório' })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="ex: 30 minutos"
        />
        {errors.tempo && <span className="text-red-600 text-sm">{errors.tempo.message}</span>}
      </div>

      <div className="mb-6">
        <label className="block text-pink-700 mb-2">URL da Imagem</label>
        <input
          {...register('imagem')}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="https://exemplo.com/imagem.jpg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition-colors font-semibold"
      >
        Adicionar Receita
      </button>
    </form>
  );
};

export default ReceitaForm;