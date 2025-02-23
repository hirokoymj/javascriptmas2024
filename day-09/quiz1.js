const guest = { dislike: ["kale", "tomato", "kiwi"] };
const hasDisliked = ["apple", "banana", "mango", "guava"].some((data) =>
  guest.dislike.includes(data)
);

console.log(hasDisliked);
