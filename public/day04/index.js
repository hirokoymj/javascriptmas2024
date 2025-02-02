const guessForm = document.getElementById("guess-form");
const messageContainer = document.getElementById("message-container");
const emojiCluesContainer = document.getElementById("emoji-clues-container");
const submitBtn = document.querySelector("button");

let currentTitle = "";
let attempts = 3;
const copyFilms = [...films];

function renderRandomEmoji() {
  if (copyFilms.length === 0) {
    emojiCluesContainer.textContent = `That's all folks!`;
    guessForm.disabled = true;
    return;
  }

  const randomIndex = Math.floor(Math.random() * copyFilms.length);

  emojiCluesContainer.textContent = copyFilms[randomIndex].emoji.join(" ");
  emojiCluesContainer.setAttribute(
    "ariaLabel",
    `${copyFilms[randomIndex].ariaLabel}`
  );
  currentTitle = copyFilms[randomIndex].title.toLowerCase();

  copyFilms.splice(randomIndex, 1);
}

function getUserGuess(e) {
  e.preventDefault();
  const formData = new FormData(guessForm);
  const userGuess = formData
    .get("guess-input")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
  return userGuess;
}

function comparison(filmTitle, userGuess) {
  if (filmTitle === userGuess) {
    messageContainer.textContent = `Correct! ✅`;
    submitBtn.disabled = true;
    attempts = 3;
    setTimeout(() => {
      renderRandomEmoji();
      messageContainer.textContent = `You have ${attempts} guesses remaining.`;
      submitBtn.disabled = false;
    }, 3000);
    guessForm.reset();
  } else {
    attempts--;
    messageContainer.textContent = `Incorrect! ❌`;
    submitBtn.disabled = true;

    setTimeout(() => {
      if (attempts > 0) {
        messageContainer.textContent = `You have ${attempts} guesses remaining.`;
        submitBtn.disabled = false;
      } else {
        attempts = 3;
        messageContainer.textContent = `The film was ${currentTitle.toUpperCase()}!`;
        setTimeout(() => {
          renderRandomEmoji();
          messageContainer.textContent = `You have ${attempts} guesses remaining.`;
          submitBtn.disabled = false;
        }, 3000);
      }
    }, 1500);

    guessForm.reset();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderRandomEmoji();
});

guessForm.addEventListener("submit", (e) => {
  const userGuess = getUserGuess(e);
  comparison(currentTitle, userGuess);
});
