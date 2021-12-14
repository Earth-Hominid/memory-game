const Instructions = ({ nextStep }) => {
  return (
    <div>
      <div className="card_header">
        <h2 className="text_header">
          Remember the playing cards original positions and select them in order
          by double clicking. The cards will shuffle on every click. Good Luck!
        </h2>{' '}
      </div>

      <div className="welcome_button_holder">
        <button className="start_button" onClick={nextStep}>
          GO!
        </button>
      </div>
    </div>
  );
};

export default Instructions;
