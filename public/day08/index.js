import { renderKeyboard } from "./keyboard.js";
document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);

const guessContainer = document.getElementById("guess-container");
const snowmanParts = [...document.querySelectorAll(".snowman-part")];
//const snowmanParts = [...document.getElementsByClassName('snowman-part')]

console.log(snowmanParts);

const word = "gift";
let guesses = 6;

const dashLetters = word.split("").map((d) => "-");
guessContainer.textContent = dashLetters.join(" ");

// function checkGuess(e) {
//   const letter = e.target.id;
//   console.log(letter)
//   if (word.split("").includes(letter)) {
//       const updated = word.split("").map((data, index) => {
//           if (data === letter) {
//               return dashLetters[index] = letter
//           }
//           return dashLetters[index]
//       })
//       guessContainer.textContent = updated.join("")
//   } else {
//       guesses--;
//       hidden()
//   }
// }

//const word = "tree";
//const guessLetters = ["-", "-", "-", "-"]; // e -> ["-", "-", "e", "e"]

function checkGuess(e) {
  const letter = e.target.id;
  const index = word.indexOf(letter);
  console.log(index);
  if (letter !== -1) {
    console.log("test");
    dashLetters.split(" ")[index] = letter;
    console.log(dashLetters);
  }
}
renderKeyboard();

const hidden = () => {
  console.log("hidden");
  if (snowmanParts.length > 0) {
    const removedIndex = Math.floor(Math.random() * snowmanParts.length);
    console.log(removedIndex);
    const removedItem = snowmanParts.splice(removedIndex, 1)[0];
    console.log(removedItem);
    removedItem.style.visibility = "hidden";
    //partToHide.style.visibility = "hidden";
  }
};

hidden();
