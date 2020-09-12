const person = {
  name: "Maria",
  weight: 54,
  height: 1.7,
  greet: function (params) {
    return `Hi ${params}, my name is ${this.name}`;
  },
  bmi: function () {
    return this.weight / Math.pow(this.height, 2);
  },
};

console.log(person.greet("Pedro"));
console.log(person.greet("Juan"));
console.log(person.bmi());
