const addWeight = (obj, num) => {
  obj.age = num;
  return obj;
};

addWeight({ name: "Peter" }, 30);
