# Day 5 Find the anagrams

This Christmas, you’ve been tasked with running an anagram quiz at
the family gathering.

You have been given a list of anagrams, but you suspect that some
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would
be considered a valid anagram of "Bethlehem".

## Solution

```js
function findAnagrams(array) {
  // write your code here
  const formatted = anagrams.map((data) => {
    data[0] = data[0]
      .split(" ")
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    data[1] = data[1]
      .split(" ")
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    return data;
  });

  const output = formatted.reduce((acc, data) => {
    const [str1, str2] = data;
    if (str1 === str2) acc.push(data);
    return acc;
  }, []);
  return output;
}
//[['aaaclnsstu', 'aaaclnsstu'], ['dddeeeeeefhilnnoorrrrstu', 'dddeeeeeefhilnnoorrrrstu'], ['acegilnorrss', 'acegilnorrss']]
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
array1.sort((a, b) => a-b);
console.log(array1);
//Array [1, 4, 21, 30, 100000]
```




