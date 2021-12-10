import { useState, useEffect } from 'react';
import data from './utils/data';
import Cards from './Cards';

const startingGameWidth = 4;
const cardDeck = data;

const Gameboard = () => {
  const [startingCardOrder, setStartingCardOrder] = useState([]);

  const createStartingBoard = () => {
    const randomCardOrder = [];

    for (let i = 0; i < startingGameWidth; i++) {
      const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
      randomCardOrder.push(randomCard);
    }
    setStartingCardOrder(randomCardOrder);
  };

  // Use effect used to create the starting board on initial load.
  useEffect(() => {
    createStartingBoard();
  }, []);

  return (
    <div className="game_area">
      <div className="game_board">
        <section className="cards">
          <Cards cardDeck={startingCardOrder} />
        </section>
      </div>
    </div>
  );
};

export default Gameboard;
