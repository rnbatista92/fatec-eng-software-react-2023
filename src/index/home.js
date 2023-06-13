import "./geral.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Atividades em React das aulas de Laboratório de Engenharia de Software</h1>
      <br/>
      <h2>Rafael Batista - rafael.batista9@fatec.sp.gov.br - R.A. 1570482113041</h2>
      <br/><br/><br/>
      <div className="coluna">
        <div className="offset icon-box ">
          <h3 className="title">Aula 2 - Letreiro e Relógio</h3>          
          <div>
            <Link to="/aula1/aula1">Clique aqui</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 3</h3>
          <div>
            <Link to="/aula3/atividade1">Atividade 1: Contador de Generos</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 4</h3>
          <div>
            <Link to="/aula4/atividade1">Atividade 1: Galeria</Link>
          </div>
          <div>
            <Link to="/aula4/atividade2">Atividade 2: TodoList</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Calculadora</h3>
          <div>
            <Link to="/calculadora/calc">Clique aqui</Link>
          </div>
      
        </div>
        <div className="offset icon-box">
          <h3 className="title">Jogo da memória</h3>
          <div>
            <Link to="/atividade6">Clique aqui</Link>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Home;