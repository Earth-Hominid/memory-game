import Card from './Card';

const Cards = ({ dealtCards, handleClick }) => {
  return (
    <>
      {dealtCards.map((card, index) => (
        <>
          <Card key={index} card={card} handleClick={handleClick} />
        </>
      ))}
    </>
  );
};

export default Cards;
