import Thanos from '../assets/images/thanos.jpg';

const GameOver = ({ score, highscore, highlevel, handleClick }) => {
  return (
    <>
      <div className="gameover-backdrop">
        <div className="center">
          <h1 className="game-over">GAME OVER!</h1>
        </div>
        <div className="final-score-container">
          <div className="score-square">
            <h2 className="final-results">FINAL SCORE </h2>
            <h2 className="final-score-board">{score}</h2>
          </div>
          <div className="score-square">
            <h2 className="final-results">HIGH SCORE </h2>
            <h2 className="final-score-board">{highscore}</h2>
          </div>
          <div className="score-square">
            <h2 className="final-results">HIGH LEVEL </h2>
            <h2 className="final-score-board">{highlevel}</h2>
          </div>
        </div>
        <div className="center">
          <button onClick={handleClick} className="play-again">
            play again!
          </button>
        </div>
      </div>
    </>
  );
};

export default GameOver;
