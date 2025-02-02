import { films } from "./data.js";

const copyFilems = [...films];
//console.log(copyFilems);

const renderEmoji = () => {
  const randomNum = Math.floor(Math.random() * copyFilems.length);
  const removedItemArr = copyFilems.splice(randomNum, 1);
  console.log(removedItemArr[0].emoji);
  if (copyFilems.length === 0) console.log("Game Over");
};

renderEmoji();
renderEmoji();
renderEmoji();
