const word = "tree";
let guessLetters = ["-", "-", "-", "-"]; // e -> ["-", "-", "e", "e"]
const letter = "e";
//output: ["-", "-", "e", "e"]

const convertText = (letter) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      guessLetters[i] = letter;
    }
  }
};
const text = "tree";
console.log(text[0]);

// convertText("t");
// console.log(guessLetters);
// convertText("e");
// console.log(guessLetters);
// convertText("r");
// console.log(guessLetters);
