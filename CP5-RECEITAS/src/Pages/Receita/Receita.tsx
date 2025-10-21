import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Receita = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState<ReceitaTipos | null>(null);
    
  console.log("ID da URL:", id); 
  
  useEffect(() => {
  fetch("/data/receitas.json")
    .then((res) => res.json())
    .then((data: ReceitaTipos[]) => {
      console.log("Todos os IDs disponíveis:", data.map(r => r.id));
      const encontrado = data.find((p) => p.id.toString() === id);
      setReceita(encontrado || null);
    })
    .catch(() => setReceita(null));
}, [id]);

  if (!receita) {
    return (
      <>
        <h1>Receita não encontrada!</h1>
      </>
    );
  }

  return (
    <>
      <h1>Receita</h1>
      <b>ID: {receita.id}</b><br />
      <b>Nome: {receita.nome}</b><br />
      <img src={receita.imagem} alt={receita.nome} width='20%' />      
      <b>Categoria: {receita.categoria}</b><br />
      <b>Ingredientes: </b>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <b>Modo de preparo: </b> {receita.modoPreparo} <br />
      <b>Tempo: </b>{receita.tempo}
    </>
  );
};

export default Receita;