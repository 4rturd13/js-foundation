const createArray = (num) => {
  const array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  return array;
};
console.log(createArray(5));
