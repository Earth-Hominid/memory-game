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
  const [remainingCardOrder, setRemainingCardOrder] = useState(cardDealtOrder);
  const [selectedCards, setSelectedCards] = useState([]);
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

  // Check if card is equal to setRemainingCardOrder[0].
  const checkMatch = (e) => {
    const marvelCharacter = e.target.parentNode.lastChild.textContent;
    const matchingCard = remainingCardOrder[0].name;
    // if true
    if (marvelCharacter === matchingCard) {
      //increase score, set new highscore if needed
      updateScoreboard();
      // remove card from cardArray
      removeCard();
    } else return;
  };

  const removeCard = (card) => {
    const cardToRemove = remainingCardOrder[0];
    const remainingCards = remainingCardOrder.filter((card) => cardToRemove);
    setRemainingCardOrder(remainingCards);
  };

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
    } else return;
  };
  // Start new game
  const startNewGame = () => {
    setSelectedCards([]);
    setScore(0);
    setLevel(1);
  };

  // Check if highest level
  const checkHighLevel = () => {
    if (level > highlevel) {
      setHighlevel(level);
    }
  };

  const handleClick = (e) => {
    const marvelCharacter = e.target.parentNode.lastChild.textContent;
    const matchingCard = cardDealtOrder[0].name;
    if (marvelCharacter === matchingCard) {
      updateScoreboard();
      removeCard();
    } else return;
    // shuffleDeck();
    // handleScore();
    // getNewQuote();
  };

  // const play = (marvelCharacter) => {
  //   if (marvelCharacter === )
  // }

  const handleScore = (id) => {
    cardDealtOrder.forEach((element) => {
      if (id === element.id && element.selected === false) {
        element.selected = true;
        setSelected(false);
        updateScoreboard();
      }
    });
  };
  const updateScoreboard = () => {
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
    return [...array].sort(() => Math.random() - 0.5);
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
