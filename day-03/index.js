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

// function emojifyWord(word) {
//   const start = word.startsWith(":");
//   const end = word.endsWith(":");
//   let result = word;

//   if(start && end){
//       const formatted = word.slice(1, word.length-1);
//       for(const key in hackedEmojis){
//           if(key === formatted){
//               result = hackedEmojis[key];
//               break;
//           }
//       }
//   }
//   return result;
// }

// const emojifyWord = (word) => {
//   if (word.startsWith && word.endsWith(":")) {
//     const emojiKey = word.slice(1, -1);
//     if (emojiKey in hackedEmojis) {
//       return hackedEmojis[emojiKey];
//     }
//   }
//   return word;
// };

///----FINAL---
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

// function emojifyPhrase(phrase){
//   const array = phrase.split(" ");
//   const output = array.map((d) => emojifyWord(d));
//   return output.join(" ");
// }

///----FINAL---
const emojifyPhrase = (phrase) => {
  const wordArr = phrase.split(" ");
  const modifiedPhrase = wordArr.map((word) => emojifyWord(word)).join(" ");
  return modifiedPhrase;
};

console.log(emojifyPhrase("Those shoes :puke:"));
console.log(emojifyPhrase("Just read your article :thumbsdown:"));
console.log(emojifyPhrase("Just read your article :aaa:"));

// Stretch goal: don't just replace the shortcodes, but also
// any emojis are added directly to the text.
