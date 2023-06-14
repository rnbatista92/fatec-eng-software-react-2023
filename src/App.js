import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './index/home';
import Aula1 from './aula1/aula1';
import Calculadora from './calculadora/calc';
import MemoryGame from './memoria/jogo';
import ContadorGenero from "./aula3/index";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aula1/aula1" element={<Aula1 />} />

        <Route path="/aula3/index" element={<ContadorGenero />} />

        <Route path="/calculadora/calc" element={<Calculadora />} />

        <Route path="/memoria/jogo" element={<MemoryGame />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;