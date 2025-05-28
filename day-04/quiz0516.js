import { films } from "./data.js";

const copyFilms = [...films];

const renderRandomEmoji = () => {
  if (copyFilms.length === 0) {
    console.log("Game Over");
    clearInterval(interval);
  }
  const randomIndex = Math.floor(Math.random() * copyFilms.length);
  const film = copyFilms.splice(randomIndex, 1)[0];
  const emoji = film.emoji.join(" ");
  console.log(emoji);
};

//renderRandomEmoji();
const interval = setInterval(() => {
  renderRandomEmoji();
}, 2000);
