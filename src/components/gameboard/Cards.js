import Card from './Card';

const Cards = ({ dealtCards }) => {
  return (
    <>
      {dealtCards.map((card, index) => (
        <>
          <Card key={index} card={card} />
        </>
      ))}
    </>
  );
};

export default Cards;
