import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Receita from "./Pages/Receita/Receita";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Footer from "./Componentes/Footer/Footer";

const App = () => {
  return (
    <>
    <Cabecalho />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/receita/:link' element={<Receita />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;