function emojifyWord(word) {
  const start = word.startsWith(":");
  const end = word.endsWith(":");
  let result = word;

  if (start && end) {
    const formatted = word.slice(1, word.length - 1);
    for (const key in hackedEmojis) {
      if (key === formatted) {
        result = hackedEmojis[key];
        break;
      }
    }
  }
  return result;
}

console.log(emojifyWord(":angry:"));

function emojifyPhrase(phrase) {
  const array = phrase.split(" ");
  const output = array.map((d) => emojifyWord(d));
  return output.join(" ");
}

console.log(emojifyPhrase("Those shoes :puke:"));
console.log(emojifyPhrase("Just read your article :thumbsdown:"));
console.log(emojifyPhrase("Just read your article :aaa:"));
