const prevCards = [{ A: 1 }, { B: 2 }, { C: 3 }, { D: 4 }];

const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

console.log(shuffle(prevCards));
