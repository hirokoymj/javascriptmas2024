const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

const findEmoji = (str) => {
  if (str.startsWith(":") && str.endsWith(":")) {
    const emoji = str.slice(1, -1); //Extract
    for (const key in hackedEmojis) {
      if (key === emoji) {
        return hackedEmojis[key]; //End and exit the function
      }
    }
  }
  return str; //End and exit this function
};

console.log(findEmoji(":cry:"));
console.log(findEmoji("abc"));
