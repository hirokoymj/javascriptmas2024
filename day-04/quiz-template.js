import { films } from "./data.js";

//Show the emoji randamly.
// - Display emoji (🌇 💣 👮 ✈️ ️🔫) selected at random every 2 seconds from data.js.
//- The emoji should print in console. If there is no file, display "Game over!".
/*
🧝‍♂️ 🎅 🍝 🍬 🛷
📮 🎁 🎅 🏔️ 🛷
👹 💦 🍗 🕰️ 🌜
👻 🎩 ❄️ 💰 🕯️�
❤️ ✉️ 👩‍❤️‍💋‍👨 🤣 💔
🌇 💣 👮‍ ✈️ 🔫
🏠 🧒 🪶 🕷️ ✈️
🚂 🎟️ ❄️ ☕ 🔔
🎄 🐕 🎁 🛷 🟩
🎃 🦞 🧌 💀 🎁
Game over!
*/

const copyFilms = [...films];
const renderRandomEmoji = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const film = copyFilms.splice(randomIndex, 1)[0];
};

const interval = setInterval(() => {
  renderRandomEmoji(copyFilms);
}, 2000);
