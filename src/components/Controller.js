import { useState } from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import Instructions from './Instructions';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

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
    default:
      console.log('Memory Card, built by Earth Hominid, 2021.');
  }
}

export default Controller;
