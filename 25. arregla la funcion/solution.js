function calcularColor(num) {
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "white";
  } else if (num === 3) {
    color = "red";
  } else {
    color = "green";
  }
  return "The color is " + color;
}
calcularColor(3);
