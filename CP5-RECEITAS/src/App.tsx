import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Receita from "./Pages/Receita/Receita";
import Login from "./Pages/Login/Login";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Footer from "./Componentes/Footer/Footer";
import ReceitaForm from "./Componentes/ReceitaForm/ReceitaForm";
import ListaReceitas from "./Componentes/ListaReceitas/ListaReceitas";
import Receitas from "./Pages/Receitas/Receitas";
import Entradas from "./Pages/Entradas/Entradas";
import PratosPrincipais from "./Pages/PratosPrincipais/PratosPrincipais";
import Sobremesas from "./Pages/Sobremesas/Sobremesas";

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/receita/:id' element={<Receita />} />
        <Route path='/receitas' element={<Receitas />} />
        <Route path='/login' element={<Login />} />
        <Route path='/receita/:link' element={<Receita />} />
        <Route path='/receita/:link' element={<Receita />} />
        <Route path="/admin" element={
            <div className="container mx-auto py-8">
              <ReceitaForm />
              <ListaReceitas />
            </div>
          } />
        <Route path='/entradas' element={<Entradas />} />
        <Route path='/pratos' element={<PratosPrincipais />} />
        <Route path='/sobremesas' element={<Sobremesas />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;



