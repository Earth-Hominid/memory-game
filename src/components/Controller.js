import { useState, useEffect } from 'react';
import data from './utils/data';
import Nav from './Nav';
import Welcome from './Welcome';
import Instructions from './Instructions';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import FinalScoreBoard from './FinalScoreBoard';

const firstLevelCardAmount = 4;
const playingCardDeck = data;

function Controller() {
  const [step, setStep] = useState(1);
  const [currentPlayingCardOrder, setCurrentPlayingCardOrder] = useState([]);
  const [userSelectedCard, setUserSelectedCard] = useState(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highscore, setHighScore] = useState(0);

  // Proceed to next step
  const nextStep = () => setStep(step + 1);

  // Go back to prev step
  const prevStep = () => setStep(step - 1);

  // Increase score
  const increaseScore = () => setScore(score + 1);

  //Reset score
  const resetScore = () => {
    setScore(0);
  };
  // Increase level
  const increaseLevel = () => setLevel(level + 1);
  // Check if highscore
  const checkIfHighScore = () => {
    if (score > highscore) {
      setHighScore(score);
    }
  };

  const checkIfCardMatches = () => {
    const chosenCard = parseInt();
    const correctCard = currentPlayingCardOrder[0];

    if (chosenCard === correctCard) {
      increaseScore();
      increaseLevel();
      checkIfHighScore();

      return true;
    }
  };

  const chosenCard = (e) => {
    setUserSelectedCard(e.target);
  };

  const whenCardSelected = () => {
    const userSelectedCardId = parseInt(
      userSelectedCard.getAttribute('data-id')
    );

    const cardIsAMatch = checkIfCardMatches();

    if (userSelectedCardId && cardIsAMatch) {
      setUserSelectedCard = null;
    } else {
      // endgame()
      return;
    }
  };

  const createStartingBoard = () => {
    const randomcurrentPlayingCardOrder = [];

    for (let i = 0; i < firstLevelCardAmount; i++) {
      const randomCard =
        playingCardDeck[Math.floor(Math.random() * playingCardDeck.length)];
      randomcurrentPlayingCardOrder.push(randomCard);
    }
    setCurrentPlayingCardOrder(randomcurrentPlayingCardOrder);
  };
  // Create the starting board on initial load.
  useEffect(() => {
    createStartingBoard();
  }, []);

  // const checkForCardMatch = () => {
  //   const correctCard = currentOrder[0];

  //   if (userSelectedCard === correctCard) {
  //     removeCard();
  //     increaseScore();
  //     checkIfLevelIncrease();
  //   }
  // };

  //Initialize double click for cards
  const onDoubleClick = (e) => {
    const card = e.target;
    console.log(data);
  };

  // const checkIfLevelIncrease = () => {
  //   const currentArray = currentPlayingArray;

  //   if (currentArray === []) {
  //     increaseLevel();
  //   }
  // };

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
          <Scoreboard score={increaseScore} level={increaseLevel} />
          <Gameboard
            cardDeck={currentPlayingCardOrder}
            onDoubleClick={onDoubleClick}
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

export default Controller;
