const Card = ({ card }) => {
  return (
    <div className="image_holder" data-id={card.id}>
      <img
        className="character_image"
        key={card.id}
        src={card.image}
        alt={card.name}
      />
      <h2 className="character_name">{card.name}</h2>
    </div>
  );
};

export default Card;
