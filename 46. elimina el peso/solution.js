const deleteWeight = (obj) => {
  if (obj.weight) {
    delete obj.weight;
    return obj;
  } else {
    return obj;
  }
};

deleteWeight({ name: "Juan", weight: 40 });
deleteWeight({ weight: 30 });
deleteWeight({ name: "Diana" });
