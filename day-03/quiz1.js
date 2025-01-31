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
  let output = "";
  if (str.startsWith(":") && str.endsWith(":")) {
    const formatted = str.slice(1, -1);

    for (const key in hackedEmojis) {
      if (key === formatted) {
        output = hackedEmojis[key];
      }
    }
  } else {
    output = str;
  }
  return output;
};

console.log(findEmoji(":cry:"));
