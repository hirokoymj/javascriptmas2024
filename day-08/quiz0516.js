const word = "tree";
let guessLetters = ["-", "-", "-", "-"]; // e -> ["-", "-", "e", "e"]
const letter = "e";
//output: ["-", "-", "e", "e"]

// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);

// for (let i = 0; i < word.length; i++) {
//   if (word[i] === letter) {
//     guessLetters[i] = letter;
//   }
// }

const updated = guessLetters.map((data, index) => {
  return word[index] === letter ? letter : data;
});
guessLetters = updated;
console.log(guessLetters);
