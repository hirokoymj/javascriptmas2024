# Day 9

- [Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

- Array.some - `true` or `false`
- Array.includes - `true` or `false`
- Array.find - `matched element` or `undefined`
- Array.filter - `empty array` or `array`

## Checking whether a value exists in an array

**Q1:**
Checking whether loves item exist in an ingredients array

```js
const loves = ["avocado", "quinoa", "kale"];
const ingredients = [
  "bell peppers",
  "quinoa",
  "black beans",
  "corn",
  "tomato sauce",
  "kale",
];
```

**Q1 - Answer:**

```js
const loves = ["avocado", "quinoa", "kale"];
const ingredients = [
  "bell peppers",
  "quinoa",
  "black beans",
  "corn",
  "tomato sauce",
  "kale",
];

const output3 = ingredients.some((data) => {
  const hasLovedIngredient = loves.includes(data);
  return hasLovedIngredient;
});

console.log(output3); //true
```

<hr />

**Q2:**

- Checking wheather "grapefruit" or "banana" exist in the fruits array.

```js
const fruits = ["apple", "banana", "mango", "guava"];
```

**Q2-Answer**

```js
const fruits = ["apple", "banana", "mango", "guava"];

const output1 = fruits.some((d) => d === "grapefruit");
const output2 = fruits.some((d) => d === "banana");
console.log(output1); // false
console.log(output2); // true
```
