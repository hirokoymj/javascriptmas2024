# Day 8 - Seasonal Hangman

## Challenge

1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.

- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter.
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! - any removed parts of the snowman are reinstated. - the snowman gets sunglasses - the message "You Win!" is displayed in the "guess-container" div.
  -If the player guesses wrong 6 times: - only a puddle remains. - the message "You Lose!" is displayed in the "guess-container" div.

**_ Stretch Goals _**

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)

## Solution

[index.js](./index.js)

## Quiz 1

**Q1**

- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -.

```js
const guessContainer = document.getElementById("guess-container");
const word = "TREE";
```

**Q1:answer**

```js
let guessedLetters = word.split("").map(() => "_");
guessContainer.textContent = guessedLetters.join(" ");
```

<hr />

**Q2**

- The player selects a letter.

```js
import { renderKeyboard } from "./keyboard.js";
//<button class="letter" aria-label="Guess letter ${letter}" id=${letter}>${letter}</button>
document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);

function checkGuess(e) {
  ///here
}
```

**Q2:answer**

```js
function checkGuess(e) {
  let letter = e.target.id; /* Get the letter from the clicked button;s id */
}
```

<hr />

**Q3**

- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.

```js
const word = "TREE";
function checkGuess(e) {
  let letter = e.target.id; /* Get the letter from the clicked button;s id */
}
```

**Q3:answer**

```js
const word = "TREE";
let guessedLetters = word.split("").map(() => "_");

function checkGuess(e) {
  let letter = e.target.id; /* Get the letter from the clicked button;s id */
  if (word.includes(letter)) {
    word.split("").forEach((char, index) => {
      if (char === letter) guessedLetters[index] = letter;
    });
  } else {
    // Decrement guessed and update the attempts display
    guesses--;
  }
}
```
