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

Example input: ":cry:"
Example output: ‍😄
Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"

## Solution

[index.js](./index.js)

## Resources

- [String.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [String.endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [Object.hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

```js
const str = ':cry:';

console.log(str.slice(1, -1));
console.log(str.length);
console.log(str.slice(1, str.length-1));
> "cry"
> 5
> "cry"
```

## Using slice() with negative indexes

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#using_slice_to_create_a_new_string

```js
const str = "The morning is upon us.";
const s1 = str.slice(-3);
const s11 = str.slice(-4);
const s3 = str.slice(0, -1);

console.log(s1);
console.log(s11);
console.log(s3);

// "us."
// " us."
// "The morning is upon us"
```
