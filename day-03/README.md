# Day 3 Santa's Emoji Hack

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.

```js
const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};
```

1. Write a function that checks if a lowercase word starts and
   ends with a colon. If it does, check if it exists in the hackedEmojis object,
   and replace it with the corresponding emoji. If not, return the original word.

Example input: ":cry:"
Example output: ‍😄

1. Strings in JavaScript has a .startsWith(), .endsWith(), and .slice() methods
   that all will come in handy when solving the first part of this challenge.
2. Split the sentence into words using .split() and then map over them to see
   if the given word is indeed an emoji shortcode or not.

Stretch goal: for this one, you're one your own!
