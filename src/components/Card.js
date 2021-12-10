const Card = ({ card }) => {
  return (
    <div className="image_holder">
      <img
        className="character_image"
        key={card.id}
        src={card.image}
        alt={card.name}
        data-id={card.id}
      />
      <h2 className="character_name">{card.name}</h2>
    </div>
  );
};

export default Card;
