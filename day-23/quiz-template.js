const santasArr = [
  "James",
  "Yi",
  "Grinch",
  "Fatima",
  "Tariq",
  "Grinch",
  "Clare",
  "Grinch",
];

const missingNamesArr = ["Florinda", "Jose", "Gibbs"];

// Expected Output: ['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']

const output = santasArr.map((name) => {
  if (name === "Grinch") {
    name = missingNamesArr.shift();
    return name;
  }
  return name;
});

console.log(output);
