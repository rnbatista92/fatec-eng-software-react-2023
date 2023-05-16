import React, { useState, useEffect } from 'react';

function Letreiro() {
  const [texto, setTexto] = useState('');
  const [indice, setIndice] = useState(0);

  const mensagem = 'Venha estudar na Fatec';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (indice < mensagem.length) {
        setTexto(texto + mensagem.charAt(indice));
        setIndice(indice + 1);
      } else {
        setTexto('');
        setIndice(0);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [texto, indice]);

  return <h1>{texto}</h1>;
}



export default Letreiro;
