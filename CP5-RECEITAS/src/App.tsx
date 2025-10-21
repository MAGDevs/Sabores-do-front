import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Receita from "./Pages/Receita/Receita";
import Login from "./Pages/Login/Login";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Footer from "./Componentes/Footer/Footer";
import Receitas from "./Pages/Receitas/Receitas";

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/receita/:id' element={<Receita />} />
        <Route path='/receitas' element={<Receitas />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;