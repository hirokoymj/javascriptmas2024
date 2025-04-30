/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/

import { renderKeyboard } from "./keyboard.js";

const guessContainer = document.getElementById("guess-container");
const snowmanParts = [...document.getElementsByClassName("snowman-part")];
const attempts = document.getElementById("attemps");

const word = "gift";
let guesses = 6;
let errorCounter = 0;

// Initialize the guessed letters with underscores for each letter in the word
let guessedLetters = word.split("").map(() => "_");

// Disables all keyboard buttons after the game ends
function disabledButtons() {
  const allButtons = document.querySelectorAll("#keyboard-container button");
  allButtons.forEach((button) => (button.disabled = true));
}

// Updates the displayed guessed word by joining the guessedLetters array
function hideWord() {
  guessContainer.textContent = guessedLetters.join(" ");
}

// Resets the snowman visual and the number of guesses
function resetSnowman() {
  snowmanParts.forEach((part) => (part.style.visibility = "visible"));
  guesses = 6;
}

// Handles the logic for when a letter button is clicked
function checkGuess(e) {
  let letter = e.target.id; /* Get the letter from the clicked button;s id */

  // Ignore clicks that are not on a button
  if (e.target.tagName !== "BUTTON") return;

  e.target.disabled = true;

  // Check if the letter is in the word
  if (word.includes(letter)) {
    // Replace underscores with the correctly guessed letter in the guessedLetters array
    word.split("").forEach((char, index) => {
      if (char === letter) guessedLetters[index] = letter;
    });
  } else {
    // Decrement guessed and update the attempts display
    guesses--;
    renderAttempts();
    if (guesses < snowmanParts.length) {
      const partToHide = snowmanParts[snowmanParts.length - 1 - errorCounter];
      partToHide.style.visibility = "hidden";
      errorCounter++;
    }
  }

  // Update the displayed guessed word
  guessContainer.textContent = guessedLetters.join(" ");

  // Check for win or lose conditions
  if (!guessedLetters.includes("_")) {
    document.querySelector(".sunglasses").style.visibility = "visible";
    setTimeout(() => (guessContainer.textContent = `You Win! 🥳`), 2000);

    disabledButtons();
    resetSnowman();
  } else if (guesses === 0) {
    guessContainer.innerHTML = `You Lose! 😭<br>The word was ${word.toUpperCase()}`;
    disabledButtons();
  }
}

function renderAttempts() {
  attempts.textContent = `You have ${guesses} attempts left.`;
}

document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);
renderKeyboard();
hideWord();
renderAttempts();
