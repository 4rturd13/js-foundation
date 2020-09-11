const greet = (obj) => {
  return obj.name && obj.age
    ? `Hello ${obj.name}, you are ${obj.age} years old`
    : `Hello ${obj.name}`;
};

console.log(greet({ name: "Peter", age: 30 }));
