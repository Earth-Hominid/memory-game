import { useState, useEffect } from 'react';
import Nav from './header/Nav';
import Welcome from './header/Welcome';
import Instructions from './header/Instructions';
import Scoreboard from './scoreboard/Scoreboard';
import Gameboard from './gameboard/Gameboard';
import FinalScoreBoard from './endgame/FinalScoreBoard';
import data from './utils/data';

const deckOfCards = data;

function GamePlayLogic() {
  const [cardDealtOrder, setCardDealtOrder] = useState([]);
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highscore, setHighscore] = useState(0);
  const [highlevel, setHighlevel] = useState(0);
  const [levelCardAmount, setLevelCardAmount] = useState(4);

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
          />
          <Gameboard cardDealtOrder={cardDealtOrder} />
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
