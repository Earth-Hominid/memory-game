const GameOver = ({ score, highscore, highlevel }) => {
  return (
    <div>
      <div className="card_header">
        <h1 className="game-over">GAME OVERIALIDOCIOUS!</h1>
      </div>
      <div className="card_header">
        <h2 className="final-results">
          FINAL SCORE {score}
          <br></br>
          {score}
          <br></br>
          HIGH SCORE
          <br></br>
          {highscore}
          <br></br>
          HIGHEST LEVEL
          <br></br>
          {highlevel}
          <br></br>
        </h2>
        <br></br>
      </div>
      <div className="card_header">
        <button className="play-again">play again!</button>
      </div>
    </div>
  );
};

export default GameOver;
