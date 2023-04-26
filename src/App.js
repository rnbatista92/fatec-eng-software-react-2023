import logo from './logo.svg';
import './App.css';
import Letreiro from './aula2/letreiro';
import Clock from './aula2/relogio';
import Gallery from './aula4/galeria';
import { Profile } from './aula4/galeria.js';
import TodoList from './aula4/todolist';
import Avatar from './aula4/avatar.js';

function App() {
  return (
    <div>
      <h1>Aula 2</h1>
      <Letreiro/>

      <Clock/>
      <hr></hr>
      <h1>Aula 4</h1>
      <Profile/>
      <TodoList/>
      <Avatar/>
    </div>
    
  )
}

export default App;