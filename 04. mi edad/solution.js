const age = Number(prompt("What's your year of birth"));
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(`You are ${year - age} years old`);
