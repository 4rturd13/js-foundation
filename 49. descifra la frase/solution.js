const decipher = (str, obj) => {
  let newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i];
    if (obj.hasOwnProperty(char)) {
      newStr[i] = obj[char];
    }
  }

  let joinStr = newStr.join("");
  return joinStr;
};

console.log(decipher("h0l4", { 0: "o", 4: "a" }));
console.log(decipher("pyrmizo", { y: "e", z: "s" }));
console.log(decipher("igual", { h: "n" }));
