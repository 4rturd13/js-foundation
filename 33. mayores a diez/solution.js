const greaterThanTen = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(greaterThanTen([8, 10, 15]));
