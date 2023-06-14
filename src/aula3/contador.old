import React from "react";
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

export default Contador;