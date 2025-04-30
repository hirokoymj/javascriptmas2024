// // The keyboard has been rendered for you
// import { renderKeyboard } from "./keyboard.js";
// document
//   .getElementById("keyboard-container")
//   .addEventListener("click", checkGuess);

// // Some useful elements
const guessContainer = document.getElementById("guess-container");
const snowmanParts = document.querySelectorAll(".snowman-part");

const removed = () => {
  const removedIndex = Math.floor(Math.random() * snowmanParts.length);
  const removed = snowmanParts.splice(removedIndex, 1)[0];
  removed.style.visibility = visible;
};
/*
Challenge
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.

- If the player guesses the entire word, they win!
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.

*** Stretch Goals ***

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/

// Set the word to guess
const word = "gift";
// 6 guesses for the 6 parts of the snowman
let guesses = 6;

//- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
//      <div id="guess-container" aria-live="polite"></div>
let dashLetters = word.split("").map((d) => "_");
guessContainer.textContent = dashLetters.join(" ");

//- The player selects a letter.
//    return `<button class="letter" aria-label="Guess letter ${letter}" id=${letter}>${letter}</button>`;
// Add eventListener
//- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
//- If the selected letter does not appear in the word, one part of the snowman gets removed.

document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);

function checkGuess(e) {
  const letter = e.target.id;
  if (word.includes(letter)) {
    const updates = word.split("").map((d, index) => {
      if (d === letter) return (dashLetters[index] = letter);
      return dashLetters[index];
    });
    guessContainer.textContent = updates.join(" ");
  } else {
    guesses--;
    removedPart();
  }
}

// -If the player guesses wrong 6 times:
//     - only a puddle remains.
//     - the message "You Lose!" is displayed in the "guess-container" div.
const removedPart = () => {
  if (snowmanParts.length === 0) {
    guessContainer.textContent = "You Lose!";
    return;
  }
  const removedIndex = Math.floor(Math.random() * snowmanParts.length);
  const removed = snowmanParts.splice(removedIndex, 1)[0];
  removed.style.visibility = "hidden";
};

function resetSnowman() {
  snowmanParts.forEach((part) => (part.style.visibility = "visible"));
  guesses = 6;
}

if (!dashLetters.includes("-")) {
  guessContainer.textContent = "You Win!";
  //document.getElementsByClassName("sunglasses").visibility = "visible";
  document.querySelector(".sunglasses").style.visibility = "visible";
  const snowmanParts = [...document.getElementsByClassName("snowman-part")];
  snowmanParts.forEach((element) => (element.style.visibility = "visibler"));
} else if (guess === 0) {
  guessContainer.innerHTML = `You Lose! 😭<br>The word was ${word.toUpperCase()}`;
  disabledButtons();
}

renderKeyboard();

///innerHTML returns HTML, as its name indicates. Sometimes people use innerHTML to retrieve or write text inside an element, but textContent has better performance because its value is not parsed as HTML. Moreover, using textContent can prevent XSS

///
//
/*
HTML DOM
const guessContainer = document.getElementById("guess-container");
const snowmanParts = document.querySelectorAll(".snowman-part");
const sunglasses = document.querySelector(".sunglasses");

document.getElementById("keyboard-container").addEventListener("click", checkGuess);
guessContainer.innerHTML = "<b>TEST</b>"
guessContainer.textContent = "You Lose!";
*/
