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

santasArr.forEach((name, index) => {
  if (name === "Grinch") {
    santasArr[index] = missingNamesArr.shift();
  }
});
