const countA = (value) => {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "a") {
      count++;
    }
  }
  return count;
};

countA("Run program");
