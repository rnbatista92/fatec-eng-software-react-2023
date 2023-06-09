import "../index/geral.css";
import Letreiro from './letreiro';
import Clock from './relogio';
import { Link } from "react-router-dom";

function Aula1() {
  return (
    <div>
      <div className="offset icon-box">
        <h2 className="title">Aula 2 - Letreiro e Relógio</h2>
        <div>
          <br/>
          <Clock/>
          <br/>
          <h2>Letreiro</h2>
          <Letreiro/>
          <br/>
        </div>
          <Link to="/" className="back button-format">Voltar</Link>
      </div>
    </div>
  )
}

export default Aula1;