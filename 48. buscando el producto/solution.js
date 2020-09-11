const searchProduct = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    return array[i].id === id ? array[i] : null;
  }
};

console.log(
  searchProduct(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
    ],
    1
  )
);

console.log(
  searchProduct(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
    ],
    566
  )
);
