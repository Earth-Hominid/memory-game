import GameOver from './GameOver';
import GameScore from './GameScore';
import PlayAgain from './PlayAgain';

const FinalScoreBoard = () => {
  return (
    <div>
      <GameOver />
      <GameScore />
      <PlayAgain />
    </div>
  );
};

export default FinalScoreBoard;
