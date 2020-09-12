function Product(name, price) {
  this.name = name;
  this.price = price;
}

const bread = new Product("Bread", 2.5);
const milk = new Product("Milk", 3.7);

console.log(bread);
console.log(milk);
