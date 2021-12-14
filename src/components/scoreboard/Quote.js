const Quote = ({ quote, getNewQuote }) => {
  return (
    <h2 key={quote.id} className="quote" onClick={getNewQuote}>
      {quote.quote}
    </h2>
  );
};

export default Quote;
