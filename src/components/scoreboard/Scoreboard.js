import { useEffect, useState } from 'react';
import quoteData from '../utils/quotes';
import Quotes from './Quotes';

const startingQuote = 1;

const Scoreboard = () => {
  const [randomQuote, setRandomQuote] = useState([]);

  const getRandomQuote = () => {
    const randomQuote = [];

    for (let i = 0; i < startingQuote; i++) {
      const quote = quoteData[Math.floor(Math.random() * quoteData.length)];
      randomQuote.push(quote);
    }
    setRandomQuote(randomQuote);
  };

  // Use effect used to get random quote and dynamically update if it changes.
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getNewQuote = () => getRandomQuote();

  return (
    <>
      <div className="board_area">
        <div className="score_board">
          <div className="quote_container">
            <Quotes randomQuote={randomQuote} getNewQuote={getNewQuote} />
            <div className="score_wrapper">
              <div className="score_container">
                <h3 className="score_heading">SCORE</h3>
                <h3 className="score">1</h3>
              </div>
              <div className="score_container">
                <h3 className="score_heading">LEVEL</h3>
                <h3 className="score">1</h3>
              </div>
              <div className="score_container">
                <h3 className="score_heading">HIGHEST SCORE</h3>
                <h3 className="score">1</h3>
              </div>
              <div className="score_container">
                <h3 className="score_heading">HIGHEST LEVEL</h3>
                <h3 className="score">1</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scoreboard;
