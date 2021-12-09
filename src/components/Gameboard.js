import { useState, useEffect } from 'react';
import data from './utils/data';

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

  const startingOrder = startingCardOrder.map((cardDeck, index) => (
    <>
      <div className="card">
        <div className="image_holder">
          <img
            key={index}
            src={cardDeck.image}
            alt={cardDeck.name}
            data-id={index}
          />
          <div className="name_holder">
            <h2 className="character_name">{cardDeck.name}</h2>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <div className="game_area">
      <div className="game_board">{startingOrder}</div>
    </div>
  );
};

export default Gameboard;
