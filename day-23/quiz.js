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

const output = santasArr.map((santa) => {
  if (santa === "Grinch") {
    return missingNamesArr.shift();
  }
  return santa;
});

console.log(output);
