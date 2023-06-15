import React, { useState, useEffect } from "react";
import "./calc.css";
import { Link } from "react-router-dom";
import * as math from "mathjs";

function Calculadora() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isResultShown, setIsResultShown] = useState(false);

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setInput("");
        setResult("");
        setIsResultShown(false);
        break;
      case "delete":
        setInput((prevInput) => prevInput.slice(0, -1));
        break;
      case "=":
        handleEnterKey();
        break;
      default:
        if (isResultShown) {
          setInput(value);
          setResult("0");
          setIsResultShown(false);
        } else {
          setInput((prevInput) => prevInput + value);
        }
        break;
    }
  };

  const handleEnterKey = () => {
    try {
      const evaluated = math.evaluate(input);
      setResult(evaluated.toString());
    } catch (error) {
      setResult(error);
    }
    setIsResultShown(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      const validKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", // Dígitos
        ".", "+", "-", "*", "/", // Operadores
        "Enter", "Equal", // Tecla Enter ou igual
        "Backspace", "Delete", // Tecla de exclusão
        "Escape", "c" // Tecla Escape ou "c" para limpar
      ];

      if (validKeys.includes(key)) {
        if (key === "Enter") {
          handleEnterKey();
        } else {
          handleClick({ target: { getAttribute: () => key } });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="index">
      <div className="calculadora">
        <div className="input">{input || "0"}</div>
        <div className="result">{result || "0"}</div>

        <button data-value="7" onClick={handleClick}>
          7
        </button>
        <button data-value="8" onClick={handleClick}>
          8
        </button>
        <button data-value="9" onClick={handleClick}>
          9
        </button>
        <button className="operator" data-value="delete" onClick={handleClick}>
          &lt;
        </button>
        <button data-value="4" onClick={handleClick}>
          4
        </button>
        <button data-value="5" onClick={handleClick}>
          5
        </button>
        <button data-value="6" onClick={handleClick}>
          6
        </button>
        <button className="operator" data-value="+" onClick={handleClick}>
          +
        </button>
        <button data-value="1" onClick={handleClick}>
          1
        </button>
        <button data-value="2" onClick={handleClick}>
          2
        </button>
        <button data-value="3" onClick={handleClick}>
          3
        </button>
        <button className="operator" data-value="-" onClick={handleClick}>
          -
        </button>
        <button data-value="0" onClick={handleClick}>
          0
        </button>
        <button data-value="." onClick={handleClick}>
          .
        </button>
        <button className="operator" data-value="clear" onClick={handleClick}>
          AC
        </button>
        <button className="operator" data-value="*" onClick={handleClick}>
          ×
        </button>
        <button className="operator" data-value="=" onClick={handleClick}>
          =
        </button>
        <button className="operator" data-value="/" onClick={handleClick}>
          ÷
        </button>
      </div>
      <Link to="/" className="back button-format">Voltar</Link>
    </div>
  );
}

export default Calculadora;
