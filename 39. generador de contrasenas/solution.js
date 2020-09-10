const password = (string) => {
  let newString = string
    .split(" ")
    .toString()
    .replace(/,/gi, "")
    .replace(/a/gi, "4")
    .replace(/e/gi, "3")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0");
  return newString;
};
console.log(password("This is a test"));
