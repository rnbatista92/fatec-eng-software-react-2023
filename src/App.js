import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './index/home';
import Aula1 from './aula1/aula1';
import Calculadora from './calculadora/calc';
import Jogo from './memoria/jogo';
import ContadorGenero from "./aula3/index";

import Gallery from './aula4/galeria';
import { Profile } from './aula4/galeria.js';
import TodoList from './aula4/todolist';
import Avatar from './aula4/avatar.js';
import PackingList from './aula4/packinglist';
import List from './aula4/list';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aula1/aula1" element={<Aula1 />} />

        <Route path="/aula3/index" element={<ContadorGenero />} />

        <Route path="/calculadora/calc" element={<Calculadora />} />

        <Route path="/memoria/jogo" element={<Jogo />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;