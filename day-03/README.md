# Day 3 Santa's Emoji Hack

## Challenge

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

- Example input: ":cry:"
- Example output: ‍😄
- Example input: "Just read your article :thumbsdown:"
- Example output: "Just read your article 👏"

## Solution

[index.js](./index.js)

## Hint

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- There is no way to **stop** or break a `forEach()` loop other than by throwing an exception. If you need such behavior, the `forEach()` method is the wrong tool.
- Early termination may be accomplished with looping statements like for, `for...of`, and `for...in`. Array methods like `every()`, `some()`, `find()`, and `findIndex()` also **stops** iteration immediately when further iteration is not necessary.

**Example**

- Check if the hackedEmojis object has a "cry" key and, if so, return its value.

```js
const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};
const key = "cry";

//Use a for...in loop instead of forEach to allow early exit when the key is found.
for (const key in hackedEmojis) {
  if (key === emojiKey) return hackedEmojis[key];
}
```

## Quiz

**Q1**

- Output ":cry:" to "cry".

```js
const str = ":cry:";
```

**Q1-Answer 1**

```js
const str = ":cry:";
console.log(str.slice(1, -1));
```

**Q1-Answer 2**

```js
const str = ":cry:";
console.log(str.slice(1, str.length - 1));
```

<hr />

**Q2**

- Identify if a given word is emoji.
- `:angry:` is the emoji.

```js
const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

console.log(emojifyWord(":angry:"));
```

**Q2-Answer-1**

```js
const emojifyWord = (word) => {
  if (word.startsWith(":") && word.endsWith(":")) {
    const emojiKey = word.slice(1, -1);
    if (hackedEmojis.hasOwnProperty(emojiKey)) {
      return hackedEmojis[emojiKey];
    }
  }
  return word;
};
```

**Q2-Answer-2**

```js
const emojifyWord2 = (word) => {
  if (word.startsWith(":") && word.endsWith(":")) {
    const emojiKey = word.slice(1, -1);

    for (const key in hackedEmojis) {
      if (key === emojiKey) return hackedEmojis[key];
    }
  }
  return word;
};

console.log(emojifyWord2(":angry:"));
```

## History

2/21/20205 - 15 mins
