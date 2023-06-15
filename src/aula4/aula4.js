import "../index/geral.css";
import Gallery from "./galeria";
import TodoList from "./todolist";
import { Link } from "react-router-dom";
import "./aula4.css";

function Aula1() {
  return (
    <div>
      <div className="offset box">
        <h2 className="title">Aula 4 - Galeria e ToDo List</h2>
        <div>
          <br/>
          <h2>Galeria</h2>
          <Gallery/>
          <br/>
          <h2>ToDo List</h2>
          <TodoList/>
          <br/>
        </div>
          <Link to="/" className="back button-format">Voltar</Link>
      </div>
    </div>
  )
}

export default Aula1;