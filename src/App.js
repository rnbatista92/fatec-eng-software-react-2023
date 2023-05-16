import logo from './logo.svg';
import './App.css';
import Letreiro from './aula1/letreiro';
import Clock from './aula1/relogio';
import Gallery from './aula3/galeria';
import { Profile } from './aula3/galeria.js';
import TodoList from './aula3/todolist';
import Avatar from './aula3/avatar.js';
import PackingList from './aula3/packinglist';
import List from './aula3/list';

function App() {
  return (
    <div>
      <h1>Aula 1</h1>
      <Letreiro/>

      <Clock/>
      <hr></hr>
      <h1>Aula 3</h1>
      <Profile/>
      <TodoList/>
      <Gallery/>
      <PackingList/>
      <List/>
    </div>
    
  )
}

export default App;