let person = [
  { name: "Pedro" },
  { name: "Adela" },
  { name: "Maria" },
  { name: "Luis" },
];

const extracNames = (arr) => {
  const newArr = arr.map((e) => e.name);
  const findChartA = newArr.filter(
    (name) => name.includes("a") || name.includes("A")
  );
  return findChartA;
};

console.log(extracNames(person));
