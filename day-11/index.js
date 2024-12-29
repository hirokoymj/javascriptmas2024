const emojis = ["🎄", "🎁", "🎅", "☃️"]; // Your set of emojis
const emojiArray = [...emojis, ...emojis];

const container = document.getElementById("game-board");
let revealedCards = [];
let matchedCards = 0;

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
        alert("alert");
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

while (emojiArray.length > 0) {
  const randomIndex = Math.floor(Math.random() * emojiArray.length);
  const removedEmoji = emojiArray.splice(randomIndex, 1)[0];
  //gameBorder.innerHTML += `<div class="card">${removedEmoji}</div>`
  const card = document.createElement("div");
  card.classList.add("card", "hidden");
  card.dataset.emoji = removedEmoji;
  card.addEventListener("click", flipCard);
  container.appendChild(card);
}
