const num = Number(prompt("Insert a number"));
if (num % 3 === 0 && num % 5 === 0) {
  console.log("bingbong");
} else if (num % 3 === 0) {
  console.log("bing");
} else if (num % 5 === 0) {
  console.log("bong");
} else {
  console.log(num);
}
