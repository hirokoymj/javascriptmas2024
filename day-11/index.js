let emojiArray = [];
let revealedCards = [];
let matchedCards = 0;
const container = document.getElementById("game-board");

function flipCard(e) {
  const clickedCard = e.target;

  clickedCard.classList.remove("hidden");
  clickedCard.classList.add("revealed");
  clickedCard.textContent = clickedCard.dataset.emoji;

  revealedCards.push({
    element: clickedCard,
    value: clickedCard.dataset.emoji,
  });
  console.log(revealedCards);

  // If two cards are revealed, compare them
  if (revealedCards.length === 2) {
    const [firstCard, secondCard] = revealedCards;
    if (firstCard.value === secondCard.value) {
      // Keep the cards revealed
      revealedCards = [];
      matchedCards += 2;
      if (matchedCards === emojiArray.length) {
        alert("game over");
      }
    } else {
      // Hide the cards after a short delay
      setTimeout(() => {
        firstCard.element.classList.remove("revealed");
        firstCard.element.classList.add("hidden");
        firstCard.element.textContent = "";

        secondCard.element.classList.remove("revealed");
        secondCard.element.classList.add("hidden");
        secondCard.element.textContent = "";

        revealedCards = [];
      }, 1000);
    }
  }
}

function generateEmojis() {
  const emojis = ["🎄", "🎁", "🎅", "☃️"];
  return [...emojis, ...emojis];
}

function renderCards(emojis) {
  emojis.map((emoji) => {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.dataset.emoji = emoji;
    card.addEventListener("click", flipCard);
    container.appendChild(card);
  });
}

// // Suffles the cards randomly
function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const initGame = () => {
  matchedCards = 0;
  revealedCards = [];
  emojiArray = shuffleCards(generateEmojis());
  renderCards(emojiArray);
};

initGame();
