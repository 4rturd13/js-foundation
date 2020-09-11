const existKey = (obj, str) => {
  let findKey = obj.hasOwnProperty(str);
  return findKey;
};

console.log(existKey({ name: "Alejo" }, "name")); // true
console.log(existKey({ name: "Alejo" }, "age")); // false
console.log(existKey({}, "weight")); // false
console.log(existKey({ name: "Alejo", weight: 67 }, "weight")); // true
