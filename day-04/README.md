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

## The "this" problem

- https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#the_this_problem
  > When you pass a method to setTimeout(), it will be invoked with a this value that may differ from your expectation. The general issue is explained in detail in the JavaScript reference.

## Callbacks

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks

> When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis).

## Solution

- **Use a wrapper function**
- A common way to solve the problem is to use a wrapper function that sets this to the required value:
- The wrapper function can be an arrow function:

```js
setTimeout(() => {
  myArray.myMethod();
}, 1000); // prints "zero,one,two" after 2 seconds
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks

> Callbacks
> When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis).

## Quiz

**Q1**

- Display emoji (🌇 💣 👮 ✈️ ️🔫) selected at random every 2 seconds from data.js.
- The emoji should print in console. If there is no file, display "Game over!".

**Q1-Answer**

```js
import { films } from "./data.js";

const copyFilms = [...films];

const renderRandomEmoji = () => {
  if (copyFilms.length === 0) {
    console.log("Game over");
    clearInterval(interval);
    return;
  }
  const randomIndex = Math.floor(Math.random() * copyFilms.length);
  const removedItemArr = copyFilms.splice(randomIndex, 1);
  const emoji = removedItemArr[0].emoji.join(" ");
  console.log(emoji);
};

const interval = setInterval(() => {
  renderRandomEmoji();
}, 2000);
```

## History

- 02/21/2025
