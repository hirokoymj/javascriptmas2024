# Day 8 - Seasonal Hangman

- https://scrimba.com/javascriptmas-c0javascriptmas/~03eh

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

- const word = "TREE" -> `- - - -`
- const word = "gift" -> `- - - -`

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

- HTML DOM
- Add click event lister for keyboard-container HTML element.

```js
<div id="keyboard-container">
  <button class="letter" aria-label="Guess letter a" id="a">
    a
  </button>
  <button class="letter" aria-label="Guess letter b" id="b">
    b
  </button>
</div>
```

**Q2:answer**

```js
document
  .getElementById("keyboard-container")
  .addEventListener("click", checkGuess);
```

<hr />

**Q3**

- Replace a guessword to a letter

```js
const word = "tree";
let guessLetters = ["-", "-", "-", "-"]; // e -> ["-", "-", "E", "E"]
const letter = "e";
//console.log(guessLetters); // Output: ["-", "-", "e", "e"]
```

**Q3:answer**

- word sting can access `word[0]`, `word[1]`.

```js
// Solution #1
// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);
const word = "tree";
let guessLetters = ["-", "-", "-", "-"];
const letter = "e";

if (word.includes(letter)) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      guessLetters[i] = letter;
    }
  }
}
console.log(guessLetters); // Output: ["-", "-", "e", "e"]

// Solution #2

if (word.includes(letter)) {
  guessLetters = guessLetters.map((underscore, index) => {
    return word[index] === letter ? letter : underscore;
  });
}

console.log(guessLetters); // Output: ["-", "-", "e", "e"]
```

**Q4:**

- Hide one of `snowman-part` elements when clicking the letter button.

```js
<div class="snowman-container">
  <img class="snowman-part body" src="images/body.png" alt="snowman's body">
  <img class="snowman-part head" src="images/head.png" alt="snowman's head">
  <img class="snowman-part scarf" src="images/scarf.png" alt="snowman's scarf">
  <img class="snowman-part nose" src="images/nose.png" alt="snowman's nose">
  <img class="snowman-part arm" src="images/arm.png" alt="snowman's arm">
  <img class="snowman-part hat" src="images/hat.png" alt="snowman's hat">
</div>
```

**Q4:answer**

```js
const snowmanParts = [...document.querySelectorAll(".snowman-part")];
//const snowmanParts = [...document.getElementsByClassName("snowman-part")];
const hidden = () => {
  if (snowmanParts.length > 0) {
    const removedIndex = Math.floor(Math.random() * snowmanParts.length);
    console.log(removedIndex);
    const removedItem = snowmanParts.splice(removedIndex, 1)[0];
    console.log(removedItem);
    removedItem.style.visibility = "hidden";
  }
};
```

- [MDN querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  > Returns a static (not live) NodeList
- [MDN getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
  > Returns a live HTMLCollection of found elements.

<hr />

**Q5: HTML DOM**

1. Select `sunglasses` element.
2. Select all `snowman-part` elements.
3. Select `guess-container` element.
4. Hide the `sunglasses` element.
5. Print `You Win!` to `guess-container`.
6. Print `<b>You Win!</b>` to `guess-container`.
7. Add click listener.

```js
<div class="snowman-container">
  <img class="sunglasses" src="images/sunglasses.png" alt="sunglasses">
  <img class="snowman-part body" src="images/body.png" alt="snowman's body">
  <img class="snowman-part head" src="images/head.png" alt="snowman's head">
  <img class="snowman-part scarf" src="images/scarf.png" alt="snowman's scarf">
  <img class="puddle" src="images/puddle.png" alt="puddle" />
</div>
<div id="guess-container" aria-live="polite"></div>
<div id="keyboard-container"></div>
```

**Q6:Answer**

- HTML DOM Selector

```js
//1.
const sunglasses = document.querySelector(".sunglasses");
//2.
const snowmanParts = document.querySelectorAll(".snowman-part");
//3.
const guessContainer = document.getElementById("guess-container");
//4.
document.querySelector(".sunglasses").style.visibility = "hidden";
//5
document.getElementById("guess-container").textContent = "You Win!";
document.getElementById("guess-container").innerHTML = "<b>TEST</b>";
document
  .getElementById("keyboard-container")
  .addEventListener("click", () => {});
```
