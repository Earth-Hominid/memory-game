const myArray = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];
console.log(myArray)

const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const playingArray = shuffle(myArray);

console.log(playingArray)

// const play = (myArray) => {
//   const indexArray = myArray.map(myArray[myArray]);
//   return indexArray;
// };

// console.log(prop2map);

const objectToSearch = 'F';

const matchedIndex = myArray
  .map((object) => object.name)
  .indexOf(objectToSearch);

const isItAMatch = () => {
  if (objectToSeach === matchedIndex)
}

console.log(matchedIndex);
