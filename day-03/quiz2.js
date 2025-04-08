const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

const findEmoji = (str) => {
  if (str.startsWith(":") && str.endsWith(":")) {
    const emoji = str.slice(1, -1);
    for (const key in hackedEmojis) {
      if (emoji === key) return hackedEmojis[key];
    }
  }
  return str;
};

console.log(findEmoji(":cry:"));
