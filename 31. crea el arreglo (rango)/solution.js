const createRange = (num1, num2) => {
  const array = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
  return array;
};

console.log(createRange(1, 5));
