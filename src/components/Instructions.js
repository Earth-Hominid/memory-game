const Instructions = ({ nextStep }) => {
  return (
    <div>
      <div className="card_header">
        <h2 className="text_header">
          You are about to be presented with images of famous celebrities. Your
          goal is to remember their original positions and select them in order.
          When one celebrity is clicked, the order will randomly change. The
          game ends if you click on the wrong image. When your ready to begin,
          start the game by clicking on the first celebrity. Good Luck!
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
