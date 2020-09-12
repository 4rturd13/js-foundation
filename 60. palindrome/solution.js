String.prototype.palindrome = function () {
  const str = this.toLowerCase().replace(/[\W_]/g, "");
  const reverse = str.split("").reverse().join("");
  const resolve = str === reverse;
  return resolve;
};

console.log("anita lava la tina".palindrome());
console.log("aman a panama".palindrome());
console.log("hola mundo".palindrome());
