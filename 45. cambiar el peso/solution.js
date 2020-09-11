const changeWeight = (obj) => {
  if (obj.weight) {
    obj.weight = obj.weight * 2;
    return obj;
  } else {
    return null;
  }
};

console.log(changeWeight({ name: "Maria", weight: 50 }));
