const isMultiple = (num1, num2) => {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
};

isMultiple(15, 3);
