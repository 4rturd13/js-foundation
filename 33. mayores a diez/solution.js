const greaterThanTen = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

greaterThanTen([8, 10, 15]);
