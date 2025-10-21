import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Home = () => {
  const [receitas, setReceitas] = useState<ReceitaTipos[]>([]);
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
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            <Link to={`receita/${receita.id}`}>{receita.nome}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;