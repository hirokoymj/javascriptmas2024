＃ Day 11 - Card Matching Game

## Challenge

const emojis = ['🎄', '🎁', '🎅', '☃️']; // Your set of emojis

**Requirements:**

- This is a classic "Find the Pair" game with a christmas theme.
- The player should be able to reveal cards by clicking on them.
- When the player reveals one card, it should stay revealed until a second card is revealed.
- When the player reveals two cards:
  - If they are the same, they should remain revealed for the rest of the game.
  - If they are different, they should be flipped back to hidden.
- The cards should be shuffled at the start of each game.

**Stretch Goals:**

- Add a point system where points are awarded for each correctly revealed pair
  and deducted for each incorrect pair (you decide the exact points for each action).
- Implement a high-score system using the browser's local storage.
- Add a "Restart Game" button that appears when the game ends so the user can start over.

## Solution

[index.js](./index.js)

## Shuffle array

- Example 1

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
console.log(shuffledArray);
```

- Example 2

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (array.length > 0) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const removed = array.splice(randomIndex, 1)[0];
  newArray.push(removed);
}
console.log(newArray);
```

- Example 3

```js
const array2 = [1, 2, 3, 4, 5];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleArray(array2);
```

- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
- https://github.com/mendezpvi/javascriptmas-2024/tree/main/day-11
