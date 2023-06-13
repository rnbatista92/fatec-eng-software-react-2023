import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './index/home';
import Aula1 from './aula1/aula1';
import Calculadora from './calculadora/calc';

import Gallery from './aula3/galeria';
import { Profile } from './aula3/galeria.js';
import TodoList from './aula3/todolist';
import Avatar from './aula3/avatar.js';
import PackingList from './aula3/packinglist';
import List from './aula3/list';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aula1/aula1" element={<Aula1 />} />

        <Route path="/calculadora/calc" element={<Calculadora />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;