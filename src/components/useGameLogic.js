import { useState } from 'react';

export const useGameLogic = () => {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  };

  const updateScore = (points) => {
    setScore((prevScore) => {
      const score = prevScore + points;

      if (score > highestScore) {
        setHighestScore(score);
      }

      return score;
    });
  };
  return [score, highestScore, resetScore, updateScore];
};
