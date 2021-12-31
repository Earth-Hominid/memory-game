import { useState, useEffect } from 'react';
import Nav from './header/Nav';
import Welcome from './header/Welcome';
import Instructions from './header/Instructions';
import Scoreboard from './scoreboard/Scoreboard';
import Gameboard from './gameboard/Gameboard';
import FinalScoreBoard from './endgame/FinalScoreBoard';
import deckOfCards from './utils/deckOfCards';
import quoteData from './utils/quotes';
const startingQuote = 1;
const maxCardLevel = 18;

function PlayRound() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highscore, setHighscore] = useState(0);
  const [highlevel, setHighlevel] = useState(0);
  const [levelCardAmount, setLevelCardAmount] = useState(4);
  const [randomQuote, setRandomQuote] = useState([]);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

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

  // Get random quote
  const getNewQuote = () => getRandomQuote();
  // Increase the level
  const dealNextLevel = () => dealCards();
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
  // Check if highest level
  const checkHighLevel = () => {
    if (level > highlevel) {
      setHighlevel(level);
    }
  };

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const dealNewGame = () => {
    let newCards = shuffle(deckOfCards);
    newCards.splice(4);
    setCards(newCards);
    setLevelCardAmount(4);
  };
  // Cards dealt restricted to current game level and no duplicate cards can be dealt.
  const dealCards = () => {
    let newCards = shuffle(deckOfCards);
    newCards.splice(levelCardAmount);
    setCards(newCards);
  };

  useEffect(() => {
    dealCards();
  }, []);

  // const playerHasClickedAllCards = (number) => {
  //   clickedCards.length === number - 1;
  // };

  const playRound = (marvelCharacter) => {
    if (!clickedCards.includes(marvelCharacter)) {
      increaseScore();
      checkHighScore();
      setClickedCards((prevState) => [...prevState, marvelCharacter]);
      checkHighLevel();
      console.log('increase score');
      if (clickedCards.length === cards.length - 1) {
        startNextLevel();
        console.log('increase level');
      } else {
        setCards(shuffle(cards));
        console.log('cards shuffled');
      }
    } else {
      checkHighScore();
      checkHighLevel();
      endGame();
      console.log('game over');
    }
  };
  const endGame = () => {
    nextStep();
  };

  const handleClick = (e) => {
    const marvelCharacter = e.target.parentNode.lastChild.textContent;
    playRound(marvelCharacter);
  };

  // Reset clicked cards
  const clearClickedCards = () => setClickedCards([]);

  // Start new level
  const startNextLevel = () => {
    checkHighScore();
    clearClickedCards();
    increaseLevel();
    increaseCards();
    getNewQuote();
    dealNextLevel();
  };

  //Start new game
  const startNewGame = () => {
    clearClickedCards();
    setLevelCardAmount(4);
    setScore(0);
    setLevel(1);
    getNewQuote();
    dealNewGame();
    console.log(levelCardAmount);
    console.log('new game dealt');
  };

  // Play new game
  const handlePlayAgainClick = () => {
    startNewGame();
    prevStep();
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
          <Gameboard cards={cards} handleClick={handleClick} />
        </>
      );
    case 4:
      return (
        <>
          <FinalScoreBoard
            score={score}
            highscore={highscore}
            highlevel={highlevel}
            handleClick={handlePlayAgainClick}
          />
        </>
      );
    default:
      console.log('Memory Card, built by Earth Hominid, 2021.');
  }
}

export default PlayRound;
