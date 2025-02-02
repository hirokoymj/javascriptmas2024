# Day 5 Find the anagrams

This Christmas, you’ve been tasked with running an anagram quiz at
the family gathering.

You have been given a list of anagrams, but you suspect that some
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would
be considered a valid anagram of "Bethlehem".

## What is anagram?

An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
Here's an example:

- Original phrase: "Astronomer"
- Anagram: "Moon starer"

## Solution

[index.js](index.js)

## Quiz

**Q1**

```js
let anagrams = [
  ["Can Assault", "Santa Claus"],
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
  ["Frosty The Snowman", "Honesty Warms Front"],
  ["Drastic Charms", "Christmas Cards"],
  ["Congress Liar", "Carol Singers"],
  ["The Tin Glints", "Silent Night"],
  ["Be The Helm", "Betlehem"],
  ["Is Car Thieves", "Christmas Eve"],
];
```

**Q1-Answer**

```js
const findAnagrams = (array) => {
  const output = [];

  array.forEach((data, index) => {
    const v1 = data[0]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const v2 = data[1]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    if (v1 === v2) {
      output.push(data);
    }
  });
  console.log(output);
};
```

## HINT

- [Array.sort](https://github.com/hirokoymj/JavaScript/tree/master/Array/Array-Sort)
- Accending order - return `-1`
- Decending orer - return `1`

```js
(a<b) return -1 // acending order
(a<b) return 1 // decending order
```

- [MDN - Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(array1);
//Array [1, 4, 21, 30, 100000]
```
