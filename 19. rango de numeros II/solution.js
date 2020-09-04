const num1 = Number(prompt("Insert a number"));
const num2 = Number(prompt("Insert other number"));
const foo = (value1, value2) => {
  if (value1 < value2) {
    for (let i = value1; i <= value2; i++) {
      console.log(i);
    }
  } else {
    for (let i = value1; i >= value2; i--) {
      console.log(i);
    }
  }
};
foo(num1, num2);
