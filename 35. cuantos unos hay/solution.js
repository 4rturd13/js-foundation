const countOne = (array) => {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] === 1 ? count++ : count;
  }
  return count;
};
console.log(countOne([2, 3, 4, 1]));
