import Quotes from './Quotes';

const Scoreboard = ({
  score,
  level,
  highscore,
  highlevel,
  randomQuote,
  getNewQuote,
}) => {
  return (
    <>
      <div className="board_area">
        <div className="score_board">
          <div className="quote_container">
            <Quotes randomQuote={randomQuote} getNewQuote={getNewQuote} />
            <div className="score_wrapper">
              <div className="score_container">
                <h3 className="score_heading">LEVEL</h3>
                <h3 className="score">{level}</h3>
              </div>
              <div className="score_container">
                <h3 className="score_heading">SCORE</h3>
                <h3 className="score">{score}</h3>
              </div>
              <div className="score_container">
                <h3 className="score_heading">HIGHEST SCORE</h3>
                <h3 className="score">{highscore}</h3>
              </div>
              <div className="score_container">
                <h3 className="score_heading">HIGHEST LEVEL</h3>
                <h3 className="score">{highlevel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scoreboard;
