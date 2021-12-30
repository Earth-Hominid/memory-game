const prevCards = [{ A: 1 }, { B: 2 }, { C: 3 }, { D: 4 }];

const getRandomIndex = (max) => Math.floor(Math.random() * max);

const shuffle = (prevCards) => {
  let cards = [...prevCards];
  const length = cards.length;
  let shuffled = [];
  let randomCard;

  for (let i = 0; i < length; i++) {
    randomCard = getRandomIndex(cards.length);
    shuffled = [...shuffled, ...cards.splice(randomCard, 1)];
  }
  return shuffled;
};

console.log(shuffle(prevCards));
