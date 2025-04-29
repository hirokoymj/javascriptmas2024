import { renderKeyboard } from "./keyboard.js";

const guessContainer = document.getElementById("guess-container");

const word = "gift";
let guesses = 6;

document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);
renderKeyboard();

///Q1
//- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -.

const dashLetters = word.split.map((d) => "-").join(" ");
console.log(dashLetters);
guessContainer.textContent = dashLetters;
