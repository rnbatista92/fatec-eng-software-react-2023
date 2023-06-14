import React, { useState, useEffect } from "react";
import "./memoria.css";
import { Link } from "react-router-dom";

const CARD_COUNT = 16;

function embaralha(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const emojis = [
  "🌮", "🍔", "🍕", "🍟", "🌭", "🍿", "🍝", "🥪", "🍳", "🍦", "🍰", "🍩", "🍭", "🍪", "🍫", "🍬"
];


const MemoryGame = () => {
  const handleRestartGame = () => {
    window.location.reload();
  };

  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [temporarilySelectedCard, setTemporarilySelectedCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const randomEmojis = emojis.slice(0, CARD_COUNT / 2);
    const duplicatedEmojis = randomEmojis.concat(randomEmojis);
    const shuffledCards = embaralha(
      duplicatedEmojis.map((emoji, index) => ({
        id: index,
        emoji,
        isMatched: false,
      }))
    );
    setCards(shuffledCards);
    setGameStarted(true);
  }, []);

  const selectCard = (id) => {
    if (!gameStarted) return;

    const selectedCard = cards.find((card) => card.id === id);
    if (selectedCard.isMatched || temporarilySelectedCard) return;

    if (selectedCards.length === 0) {
      setTemporarilySelectedCard(selectedCard);
      setTimeout(() => {
        setTemporarilySelectedCard(null);
        setSelectedCards([selectedCard]);
      }, 500);
    } else if (selectedCards.length === 1) {
      const secondSelectedCard = selectedCard;
      setTemporarilySelectedCard(selectedCard);
      setTimeout(() => {
        setTemporarilySelectedCard(null);
        setSelectedCards([...selectedCards, secondSelectedCard]);
        if (secondSelectedCard.emoji === selectedCards[0].emoji) {
          setMatchedPairs(matchedPairs + 1);
          if (matchedPairs + 1 === CARD_COUNT / 2) {
            setGameStarted(false);
          }
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === selectedCard.id || card.id === selectedCards[0].id
                ? { ...card, isMatched: true }
                : card
            )
          );
          setSelectedCards([]);
        } else {
          setTimeout(() => {
            setSelectedCards([]);
          }, 400);
        }
      }, 500);
    }
  };

  return (
    <div className="jogo">
      <h1>Jogo da Memória</h1>
      {gameStarted ? (
        <p className="message">
          Encontre os pares de emojis clicando nas cartas. Boa sorte!<br/>
        </p>
      ) : (
        <p className="message">
          <h2>Parabéns, você encontrou todos os pares.</h2>
          <br/>
          <Link to="/" onClick={handleRestartGame} className="reset">Jogar novamente</Link>        
        </p>
        
      )}
      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isMatched ? "matched" : ""}`}
            onClick={() => selectCard(card.id)}
          >
            {temporarilySelectedCard === card ||
            (Array.isArray(selectedCards) && selectedCards.includes(card)) ? (
              <span>{card.emoji}</span>
            ) : (
              <span>🃏</span>
            )}
          </div>
        ))}
      </div>
      {gameStarted ? (
        <Link to="/" className="back">Voltar</Link>
      ) : (
        <>         
          <br />
        <Link to="/" className="back">Voltar</Link>
        </>
      )}
    </div>
  );
};

export default MemoryGame;
