import React, { useState, useEffect } from "react";
import "./memoria.css";
import { Link } from "react-router-dom";

const qtdeCartas = 16;

function embaralha(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const emojis = [
  "🌮",
  "🍔",
  "🍕",
  "🍟",
  "🌭",
  "🍿",
  "🥨",
  "🥓",
  "🍳",
  "🍣",
  "🍦",
  "🍰",
  "🍩",
  "🍭",
  "🍪",
  "🍫",
  "🍬",
  "🍯",
  "🥛",
  "🍺",
  "🍷",
  "🍹",
  "🍸",
  "🥤",
  "🍵",
  "🥔",
  "🧅",
  "🥐",
  "🥯",
  "🥖",
  "🥪",
  "🥫",
  "🍞",
  "🥚",
  "🥩",
  "🍖",
  "🍗",
  "🍠",
  "🥟",
  "🍱",
  "🥡",
  "🍲",
  "🍛",
  "🍜",
  "🍝",
  "🍚",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍢",
  "🍡",
  "🍧",
  "🍨",
  "🍦",
  "🥧",
  "🍮",
  "🍭",
  "🍬",
  "🍫",
  "🍿",
  "🍩",
  "🍪",
  "🌰",
  "🥜",
  "🍯",
  "🥛",
  "🍼",
  "☕",
  "🍵",
  "🍶",
  "🍺",
  "🍻",
  "🥂",
  "🍷",
  "🍸",
  "🍹",
  "🧉",
  "🍾",
];



const Jogo = () => {
  const handleReloadPage = () => {
    window.location.reload();
  };
  const [inGame, setInGame] = useState(true);
  const [cartas, setCartas] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [selecionadaTemporariamente, setSelecionadaTemporariamente] = useState(null);
  const [paresEncontrados, setParesEncontrados] = useState(0);

  useEffect(() => {
    let cartasAleatorias = [];
    for (let i = 0; i < qtdeCartas; i += 2) {
      const indiceAleatorio = Math.floor(Math.random() * emojis.length);
      cartasAleatorias.push({
        emoji: emojis[indiceAleatorio],
        foiEncontrada: false,
        id: i,
      });
      cartasAleatorias.push({
        emoji: emojis[indiceAleatorio],
        foiEncontrada: false,
        id: i + 1,
      });
    }
    cartasAleatorias = embaralha(cartasAleatorias);
    setCartas(cartasAleatorias);
  }, []);


  const selecionarCarta = (id) => {
    const cartaSelecionada = cartas.find((carta) => carta.id === id);
    if (cartaSelecionada.foiEncontrada) {
      return;
    }
    if (selecionadaTemporariamente !== null) {
      return;
    }
    if (selecionadas.length === 0) {
      setSelecionadaTemporariamente(cartaSelecionada);
      setTimeout(() => {
        setSelecionadaTemporariamente(null);
        setSelecionadas([cartaSelecionada]);
      }, 500);
    } else if (selecionadas.length === 1) {
      const segundaSelecionada = cartaSelecionada;
      setSelecionadaTemporariamente(cartaSelecionada);
      setTimeout(() => {
        setSelecionadaTemporariamente(null);
        setSelecionadas([...selecionadas, segundaSelecionada]);
        if (segundaSelecionada.emoji === selecionadas[0].emoji) {
          setParesEncontrados(paresEncontrados + 1);
          if(paresEncontrados+1 === qtdeCartas/2) {
            setInGame(false);
          }
          const novasCartas = cartas.map((carta) => {
            if (
              carta.id === cartaSelecionada.id ||
              carta.id === selecionadas[0].id
            ) {
              carta.foiEncontrada = true;
            }
            return carta;
          });
          setCartas(novasCartas);
          setSelecionadas([]);
        } else {
          setTimeout(() => {
            setSelecionadas([]);
          }, 400);
        }
      }, 500);
    }
  };

  
  if (inGame) {
    return (
      <div>
        <h1>Jogo da Memória</h1>

        <p className="frase">
          Você encontrou{" "}
          {paresEncontrados} {paresEncontrados === 1 ? "par" : "pares"} até
          agora. 
        </p>
        <div className="cartas">
          {cartas.map((carta) => (
            <div
              key={carta.id}
              className={`carta ${carta.foiEncontrada ? "encontrada" : ""}`}
              onClick={() => selecionarCarta(carta.id)}
            >
              {selecionadaTemporariamente === carta ||
                (Array.isArray(selecionadas) && selecionadas.includes(carta)) ? (
                  <span>{carta.emoji}</span>
                ) : (
                  <span>🃏</span>
              )}
            </div>
          ))}
        </div>
        <Link to="/">Voltar</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Jogo da Memória</h1>

        <p className="frase">
        Parabens, você encontrou todos os pares.
        </p>
        <Link to="/" onClick={handleReloadPage}>Jogar novamente</Link> 
        <br/>
        <Link to="/" >Voltar</Link>
      </div>
    )
  }
};

export default Jogo;