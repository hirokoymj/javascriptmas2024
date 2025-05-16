import { films } from "./data.js";

const copyFilms = [...films];

const renderRandomEmoji = () => {
  if (copyFilms.length === 0) {
    clearInterval(interval);
    return console.log("Game Over!");
  }
  const randomIndex = Math.floor(Math.random() * copyFilms.length);
  const film = copyFilms.splice(randomIndex, 1)[0];
  const emoji = film.emoji;
  console.log(emoji);
};

//renderRandomEmoji();
const interval = setInterval(() => {
  renderRandomEmoji();
}, 2000);
