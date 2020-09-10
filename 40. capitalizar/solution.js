const capitalize = (str) => {
  let newStr = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  return newStr;
};

console.log(capitalize("make it real"));
