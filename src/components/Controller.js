import { useState } from 'react';
import Nav from './header/Nav';
import Welcome from './header/Welcome';
import Instructions from './header/Instructions';
import Scoreboard from './scoreboard/Scoreboard';
import Gameboard from './gameboard/Gameboard';
import FinalScoreBoard from './endgame/FinalScoreBoard';

function Controller() {
  const [step, setStep] = useState(1);

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
          <Scoreboard />
          <Gameboard />
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
