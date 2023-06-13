import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './index/home';
import Letreiro from './aula1/letreiro';
import Clock from './aula1/relogio';
import Aula1 from './aula1/aula1';
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

        {/* Aula 2 */}
        <Route path="/aula2/atividade1" element={<Relogio />} />
        <Route path="/aula2/atividade2" element={<Letreiro />} />
        {/* Aula 3 */}
        <Route path="/aula3/atividade1" element={<ContadorGenero />} />
        {/* Aula 4 */}
        <Route path="/aula4/atividade1" element={<Gallery />} />
        <Route path="/aula4/atividade2" element={<TodoListAula4 />} />
        <Route path="/aula4/atividade3" element={<PackingList />} />
        <Route path="/aula4/atividade4" element={<ListAula4 />} />
        {/* Aula 5 */}
        <Route path="/aula5/atividade1" element={<ToolBarAula5 />} />
        <Route path="/aula5/atividade2" element={<GalleryAula5 />} />
        <Route path="/aula5/atividade3" element={<FormAula5 />} />
        <Route path="/aula5/atividade4" element={<CounterAula5 />} />
        <Route path="/aula5/atividade5" element={<MovingDot />} />
        <Route path="/aula5/atividade6" element={<Form2 />} />
        <Route path="/aula5/atividade7" element={<Form3 />} />
        <Route path="/aula5/atividade8" element={<ListAula5 />} />
        <Route path="/aula5/atividade9" element={<List2Aula5 />} />
        <Route path="/aula5/atividade10" element={<ShapeEditor />} />
        <Route path="/aula5/atividade11" element={<CounterList/>} />
        <Route path="/aula5/atividade12" element={<List3Aula5 />} />
        <Route path="/aula5/atividade13" element={<List4Aula5 />} />
        <Route path="/aula5/atividade14" element={<BucketList />} />
        {/* Aula 6 */}
        <Route path="/aula6/atividade1" element={<FormQuiz/>} />
        <Route path="/aula6/atividade2" element={<FormTicket/>} />
        <Route path="/aula6/atividade3" element={<Accordion/>} />
        <Route path="/aula6/atividade4" element={<Messenger/>} />
        {/* Atividade 5 */}
        <Route path="/atividade5" element={<Calculadora/>} />
        {/* Atividade 6 */}
        <Route path="/atividade6" element={<JogoDaMemoria/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;