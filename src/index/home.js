import "./geral.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="titulo">Laboratório de Engenharia de Software </h1>
      <h2>Atividades em React</h2>
      <h2>Rafael Batista - rafael.batista9@fatec.sp.gov.br <br/> R.A. 1570482113041 - 5º Modulo - Noturno</h2>
      <br/><br/>
      <div className="coluna">
        <div className="offset icon-box ">
          <h3 className="title">Aula 2 - Letreiro e Relógio</h3>          
          <div>
            <Link to="/aula1/aula1">Clique aqui</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 3 - Contador de Pessoas</h3>
          <div>
            <Link to="/aula3/contador">Clique aqui</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 4 - Galeria e ToDo List</h3>
          <div>
            <Link to="/aula4/aula4">Clique aqui</Link>
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
            <Link to="/memoria/jogo">Clique aqui</Link>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Home;