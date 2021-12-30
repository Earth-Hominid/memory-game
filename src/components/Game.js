import { useState, useEffect } from 'react';

import Gameboard from './gameboard/Gameboard';

import data from './utils/data';
const deckOfCards = data;

function Game() {
  const [cardDealtOrder, setCardDealtOrder] = useState([]);
  const [remainingCards, setRemainingCards] = useState([cardDealtOrder]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highscore, setHighscore] = useState(0);
  const [highlevel, setHighlevel] = useState(0);
  const [levelCardAmount, setLevelCardAmount] = useState(4);
  const [selected, setSelected] = useState(false);

  const dealCards = () => {
    const cardsDealt = [];

    for (let i = 0; i < levelCardAmount; i++) {
      const randomCard =
        deckOfCards[Math.floor(Math.random() * deckOfCards.length)];

      cardsDealt.push(randomCard);
    }
    setCardDealtOrder(cardsDealt);
  };

  useEffect(() => {
    dealCards();
  }, []);

  const removeCard = (array) => {
    const cardToRemove = array[0];
    const cardsLeftOver = array.filter((card) => cardToRemove);
    setRemainingCards(cardsLeftOver);
  };

  const isMatch = (firstCard, secondCard) => {
    if (firstCard === secondCard) {
      return true;
    } else {
      return false;
    }
  };
  const handleClick = (e) => {
    const marvelCharacter = e.target.parentNode.lastChild.textContent;
    const matchingCard = cardDealtOrder[0].name;
    isMatch(marvelCharacter, matchingCard) ? continueGame() : endGame();
  };

  const continueGame = (mavelCharacter) => {
    
    removeCard(remainingCards);
    console.log('continue game');
  };

  const endGame = () => {
    console.log('endgame');
  };

  const shuffleDeck = () => {
    // Shuffle the dealt cards
    const shuffledCardDeck = shuffle(cardDealtOrder);
    // set the dealt card new state
    setCardDealtOrder(shuffledCardDeck);
  };

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  return (
    <>
      <Gameboard
        cardDealtOrder={cardDealtOrder}
        selected={selected}
        handleClick={handleClick}
      />
    </>
  );
}

export default Game;
