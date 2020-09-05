const stairs = (num) => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += "#";
    }
    string += "\n";
    result += string;
  }
  return result;
};

stairs(3);
