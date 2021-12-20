import { useState, useEffect } from 'react';
import Nav from './header/Nav';
import Welcome from './header/Welcome';
import Instructions from './header/Instructions';
import Scoreboard from './scoreboard/Scoreboard';
import Gameboard from './gameboard/Gameboard';
import FinalScoreBoard from './endgame/FinalScoreBoard';
import data from './utils/data';
import quoteData from './utils/quotes';
const deckOfCards = data;
const startingQuote = 1;

function GamePlayLogic() {
  const [cardDealtOrder, setCardDealtOrder] = useState([]);
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highscore, setHighscore] = useState(0);
  const [highlevel, setHighlevel] = useState(0);
  const [levelCardAmount, setLevelCardAmount] = useState(4);
  const [selected, setSelected] = useState(false);
  const [randomQuote, setRandomQuote] = useState([]);

  const getRandomQuote = () => {
    const randomQuote = [];

    for (let i = 0; i < startingQuote; i++) {
      const quote = quoteData[Math.floor(Math.random() * quoteData.length)];
      randomQuote.push(quote);
    }
    setRandomQuote(randomQuote);
  };

  // Use effect used to get random quote and dynamically update if it changes.
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getNewQuote = () => getRandomQuote();

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

  // Proceed to next step
  const nextStep = () => setStep(step + 1);
  // Go back to prev step
  const prevStep = () => setStep(step - 1);
  // Increase score
  const increaseScore = () => setScore(score + 1);
  // Increase level
  const increaseLevel = () => setLevel(level + 1);
  // Increase cards dealt
  const increaseCards = () => setLevelCardAmount(levelCardAmount + 2);
  // Check highscore
  const checkHighScore = () => {
    if (score > highscore) {
      setHighscore(score);
    }
  };
  // Check if highest level
  const checkHighLevel = () => {
    if (level > highlevel) {
      setHighlevel(level);
    }
  };

  const handleClick = (id) => {
    shuffleDeck();
    handleScore();
    getNewQuote();
  };

  const handleScore = (id) => {
    cardDealtOrder.forEach((element) => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        setSelected(false);
        updateScoreboard();
      }
    });
  };
  const updateScoreboard = (id) => {
    increaseScore();
    increaseLevel();
    checkHighScore();
    checkHighLevel();
  };

  const newDeal = () => {
    increaseCards();
    dealCards();
  };

  const shuffleDeck = () => {
    // Shuffle the dealt cards
    const shuffledCardDeck = shuffle(cardDealtOrder);
    // set the dealt card new state
    setCardDealtOrder(shuffledCardDeck);
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      // Select a card
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // Change the card to the current card place
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  switch (step) {
    case 1:
      return (
        <>
          <Nav />
          <Welcome nextStep={nextStep} />
        </>
      );
    case 2:
      return (
        <>
          <Nav />
          <Instructions nextStep={nextStep} />
        </>
      );
    case 3:
      return (
        <>
          <Scoreboard
            score={score}
            level={level}
            highscore={highscore}
            highlevel={highlevel}
            randomQuote={randomQuote}
            getNewQuote={getNewQuote}
          />
          <Gameboard
            cardDealtOrder={cardDealtOrder}
            selected={selected}
            handleClick={handleClick}
          />
        </>
      );
    case 4:
      return (
        <>
          <FinalScoreBoard />
        </>
      );
    default:
      console.log('Memory Card, built by Earth Hominid, 2021.');
  }
}

export default GamePlayLogic;
