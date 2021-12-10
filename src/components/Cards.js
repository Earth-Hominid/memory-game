import Card from './Card';

const Cards = ({ cardDeck }) => {
  return (
    <>
      {cardDeck.map((card, index) => (
        <>
          <Card key={index} card={card} />
        </>
      ))}
    </>
  );
};

export default Cards;
