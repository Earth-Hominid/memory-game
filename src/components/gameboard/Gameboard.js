import Cards from './Cards';

const Gameboard = ({ cardDealtOrder }) => {
  return (
    <div className="game_area">
      <div className="game_board">
        <section className="cards">
          <Cards dealtCards={cardDealtOrder} />
        </section>
      </div>
    </div>
  );
};

export default Gameboard;
