Array.prototype.average = function () {
  const quantity = this.length;
  const reducer = this.reduce((acc, cur) => {
    return acc + cur;
  });
  const result = reducer / quantity;
  return result;
};

console.log([1, 2, 3, 4].average());
console.log([7, 8, 9].average());
console.log([300, 100].average());
