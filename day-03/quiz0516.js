const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

const findEmoji = (str) => {
  const text = str.slice(1, -1);
  for (const key in hackedEmojis) {
    if (key === text) {
      return hackedEmojis[key];
    }
  }
  return str;
};

console.log(findEmoji(":cry:"));
console.log(findEmoji("abc"));
