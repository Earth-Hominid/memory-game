import Cards from './Cards';

const Gameboard = ({ cardDealtOrder, handleClick }) => {
  return (
    <div className="game_area">
      <div className="game_board">
        <section className="cards">
          <Cards dealtCards={cardDealtOrder} handleClick={handleClick} />
        </section>
      </div>
    </div>
  );
};

export default Gameboard;
