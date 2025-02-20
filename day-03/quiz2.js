/**
- Output ":cry:" to "cry".
- const str = ":cry:";
 */

const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

const findEmoji = (str) => {
  if (str.startsWith(":") && str.endsWith(":")) {
    const formatted = str.slice(1, -1);
    Object.keys(hackedEmojis).forEach((key) => {
      if (key === formatted) {
        console.log(hackedEmojis[key]);
        return hackedEmojis[key];
      }
    });
    return found;
  } else {
    return str;
  }
};

console.log(findEmoji(":cry:"));
