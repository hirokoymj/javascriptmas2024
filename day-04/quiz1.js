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
}, 1500);
