const weight = Number(prompt("What's your weight?"));
const tall = Number(prompt("How tall are you?"));
const bmi = weight / tall ** 2;
console.log(bmi);

if (bmi < 18.5) {
  console.log("Low weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
