import Quote from './Quote.js';

const Quotes = ({ randomQuote, getNewQuote }) => {
  return (
    <>
      {randomQuote.map((quote, index) => (
        <>
          <Quote key={index} quote={quote} getNewQuote={getNewQuote} />
        </>
      ))}
    </>
  );
};

export default Quotes;
