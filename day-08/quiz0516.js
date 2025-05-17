const word = "tree";
let guessLetters = ["-", "-", "-", "-"]; // e -> ["-", "-", "e", "e"]
const letter = "e";
//output: ["-", "-", "e", "e"]

// if (word.includes(letter)) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       guessLetters[i] = letter;
//     }
//   }
// }

const updated = guessLetters.map((data, index) =>
  word[index] === letter ? letter : data
);
console.log(updated);
//console.log(guessLetters);
