import Cards from './Cards';

const Gameboard = ({ cardDeck, onDoubleClick }) => {
  // const [shuffledGameOrder, setShuffledGameOrder] = useState([]);

  // const [cards, setCards] = useState([]);

  // const [levelDisplay, setLevelDisplay] = useState(1);
  // const [highscoreDisplay, setHighscoreDisplay] = useState(0);

  // const removeCard = (id) => {
  //   setCards(cards.filter((card) => card.id !== id));
  // };

  // const shuffle = (cards) => {
  //   const shuffledCardOrder = [];

  //   for (let i = 0; i < cards.length; i++) {
  //     const randomCard = cards[Math.floor(Math.random() * cards.length)];
  //     shuffledCardOrder.push(randomCard);
  //   }
  //   setShuffledGameOrder(shuffledCardOrder);
  // };

  // useEffect(() => {
  //   shuffle();
  // }, [shuffle]);

  return (
    <div className="game_area">
      <div className="game_board">
        <section className="cards">
          <Cards
            cardDeck={cardDeck}
            onDoubleClick={onDoubleClick}
            // shuffledOrder={shuffledGameOrder}
          />
        </section>
      </div>
    </div>
  );
};

export default Gameboard;
