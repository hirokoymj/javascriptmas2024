import { films } from "./data.js";

//Show the emoji randamly.
// - Display emoji (🌇 💣 👮 ✈️ ️🔫) selected at random every 2 seconds from data.js.
//- The emoji should print in console. If there is no file, display "Game over!".

const copyFilms = [...films];

const renderRandomEmoji = (array) => {
  if (array.length === 0) {
    clearInterval(interval);
    console.log("Game over!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(array.length);
  //const data = array.splice(1, randomIndex)[0];
  const data = array.splice(randomIndex, 1)[0];
  console.log(data.emoji.join(" "));
};

const interval = setInterval(() => {
  renderRandomEmoji(copyFilms);
}, 2000);
