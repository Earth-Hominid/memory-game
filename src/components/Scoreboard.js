import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import quotes from './utils/quotes';

const quotesArray = quotes;

const Scoreboard = () => {
  const [startingQuote, setStartingQuote] = useState('');

  const getRandomQuote = () => {
    const randomStartingQuote = '';

    for (let i = 0; i < quotesArray.length; i++) {
      const randomStartingQuote =
        quotesArray[Math.floor(Math.random() * quotesArray.length)];
      return randomStartingQuote;
    }
    setStartingQuote(randomStartingQuote);
  };

  // Use effect used to get random quote and dynamically update if it changes.

  useEffect(() => {
    getRandomQuote();
  }, [startingQuote]);

  return (
    <>
      <div className="board_area">
        <div className="score_board">
          <div className="quote_container">
            <h2 className="quote">{startingQuote}</h2>
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
