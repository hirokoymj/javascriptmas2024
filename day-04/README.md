# Day 4 Xmas Movie Emoji Quiz

## Challenge

You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫 represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

The app should present the player with a set of emoji selected at random from the array in data.js.

The player will input their guess.

If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

If the player fails to guess correctly on the next two attempts, the app should display a message saying, The film was <Film Name Here>!. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

When all films in the array have been used, the player should see a message saying "That's all folks!".

Each film should only be used once. There should be no repetition.

## Solution

- [index.js](./index.js)

## Hint

- Array.splice() - remove an item from an original array
- `copyFilms.splice(randomIndex, 1); `
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

```js
const months = ["Jan", "March", "April", "June"];
const removed = months.splice(2, 1);
console.log(removed); // Array ["April"]
console.log(months); // Array ["Jan", "March", "June"]
```
