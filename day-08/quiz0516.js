const word = "tree";
let guessLetters = ["-", "-", "-", "-"]; // e -> ["-", "-", "e", "e"]
const letter = "e";
//output: ["-", "-", "e", "e"]

// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);

// if (word.includes(letter)) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) guessLetters[i] = letter;
//   }
// }

if (word.includes(letter)) {
  guessLetters = guessLetters.map((underscore, index) => {
    return word[index] === letter ? letter : underscore;
  });
}
console.log(guessLetters); // Output: ["-", "-", "e", "e"]
