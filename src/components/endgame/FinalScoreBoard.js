import GameOver from './GameOver';

const FinalScoreBoard = ({ score, highscore, highlevel, handleClick }) => {
  return (
    <>
      <GameOver
        score={score}
        highscore={highscore}
        highlevel={highlevel}
        handleClick={handleClick}
      />
    </>
  );
};

export default FinalScoreBoard;
