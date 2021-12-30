import GameOver from './GameOver';
import GameScore from './GameScore';
import PlayAgain from './PlayAgain';

const FinalScoreBoard = ({ score, level, highscore, highlevel }) => {
  return (
    <div>
      <GameOver score={score} />
      <GameScore />
      <PlayAgain />
    </div>
  );
};

export default FinalScoreBoard;
