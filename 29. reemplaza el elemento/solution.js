const replaceFunc = (array, position, value) => {
  array[position] = value;
  return array;
};

replaceFunc([1, 2, 3, 4], 1, 3);
