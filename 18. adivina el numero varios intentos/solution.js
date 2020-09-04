let randomNum = Math.floor(Math.random() * 10);
let guessNum = Number(prompt("Guess the number"));

while (randomNum !== guessNum) {
  console.log("Sorry, try again");
  guessNum = Number(prompt("Guess the number"));
}
console.log("You guessed the number!");
