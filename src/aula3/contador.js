import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./contador.css";

const Contador = ({ value, onChange }) => {
  const incrementCount = () => {
    onChange(value + 1);
  };

  const decrementCount = () => {
    onChange(value - 1);    
  };

  return (
    <div className="contador">
      <div className="contador-buttons-container">
        <button className="contador-button-increment" onClick={incrementCount}>
          +
        </button>
        
        <button className="contador-button-decrement" onClick={decrementCount}>
          -
        </button>
      </div>
      <br/>
      <div className="contador-input-container">
        <input
          id="contador-input"
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          disabled
        />
      </div>
    </div>
  );
};

const ContadorGenero = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [total, setTotal] = useState(0);

  const handleHomensChange = (value) => {
    if(value < 0) {
        value = 0;
    }
    setHomens(value);
    setTotal(value + mulheres);
  };

  const handleMulheresChange = (value) => {
    if(value < 0) {
        value = 0;
    }
    setMulheres(value);
    setTotal(homens + value);
  };

  const reset = () => {
    setHomens(0);
    setMulheres(0);
    setTotal(0);
  };

  return (
    <div className="contador-genero">
      <div className="contador-genero-row">
        <div className="contador-genero-column">
          <div className="contador-genero-icon homem-icon"></div>
          <div className="contador-genero-titulo">Homens</div>
          <Contador value={homens} onChange={handleHomensChange} />
        </div>
        <div className="contador-genero-column">
          <div className="contador-genero-icon mulher-icon"></div>
          <div className="contador-genero-titulo">Mulheres</div>
          <Contador value={mulheres} onChange={handleMulheresChange} />
        </div>
      </div>
      <div className="contador-genero-row">
        <label htmlFor="contador-total-input" style={{ marginRight: "10px" }}>Total:</label>
        <input id="contador-total-input" type="number" value={total} disabled />
      </div>
      <br/><br/>
      <button className="reset" onClick={reset}>
        Reiniciar
      </button>
      <br/>
      <Link to="/" className="back">Voltar</Link>
    </div>
  );
};

export default ContadorGenero;