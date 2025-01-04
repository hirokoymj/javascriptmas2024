const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

/* 
Example input: ":cry:"
Example output: ‍😄
*/

const emojifyWord = (word) => {
  if (word.startsWith(":") && word.endsWith(":")) {
    const emojiKey = word.slice(1, -1);
    if (hackedEmojis.hasOwnProperty(emojiKey)) {
      return hackedEmojis[emojiKey];
    }
  }
  return word;
};

console.log(emojifyWord(":angry:"));

///----FINAL---
const emojifyPhrase = (phrase) => {
  const wordArr = phrase.split(" ");
  const modifiedPhrase = wordArr.map((word) => emojifyWord(word)).join(" ");
  return modifiedPhrase;
};

console.log(emojifyPhrase("Those shoes :puke:"));
console.log(emojifyPhrase("Just read your article :thumbsdown:"));
console.log(emojifyPhrase("Just read your article :aaa:"));
