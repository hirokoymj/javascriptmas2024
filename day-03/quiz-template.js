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
      // for in loop ===> early exit
      if (key === emoji) {
        return hackedEmojis[key];
      }
    }
    return str;
  }
};

console.log(findEmoji(":cry:"));
