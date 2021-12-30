const dealCards = () => {
  let cardsDealt = [];
  for (let card of deckOfCards) {
    const randomCard =
      deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
    if (cardsDealt.indexOf(card) >= 0 && cardsDealt.length <= levelCardAmount) {
      cardsDealt.push(randomCard);
    }
  }
  setCards(cardsDealt);
};
