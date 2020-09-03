const yearOfBirth = Number(prompt("Insert your year of birth"));

const foo = (year) => {
  if (year < 1945) {
    console.log("Great generation");
  } else if (year >= 1945 && year <= 1964) {
    console.log("Baby boomer");
  } else if (year >= 1965 && year <= 1981) {
    console.log("X");
  } else if (year >= 1982 && year <= 1994) {
    console.log("Millenial");
  } else {
    console.log("Z");
  }
};
console.log(foo(yearOfBirth));
