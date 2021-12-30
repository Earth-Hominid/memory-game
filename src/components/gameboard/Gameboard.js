import Cards from './Cards';

const Gameboard = ({ cards, handleClick }) => {
  return (
    <div className="game_area">
      <div className="game_board">
        <section className="cards">
          <Cards dealtCards={cards} handleClick={handleClick} />
        </section>
      </div>
    </div>
  );
};

export default Gameboard;
