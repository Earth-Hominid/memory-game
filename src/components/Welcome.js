const Welcome = ({ nextStep }) => {
  return (
    <div>
      <div className="card_header">
        <h2 className="welcome_header">
          Even though the sound of it,
          <br></br>
          is something quite atrocious.
          <br></br>
          If you say it loud enough,
          <br></br>
          you'll always sound precocious.
          <br></br>
        </h2>
      </div>
      <div className="card_header">
        <h1 className="larger_header">It's SuperMemoryCardExpialiDocious!</h1>
      </div>
      <div className="welcome_button_holder">
        <button className="welcome_button" onClick={nextStep}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Welcome;
