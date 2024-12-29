# Day 9 - Which recipe should Grandma make?

Requirements for a suitable recipe
1: Contains at least one ingredient Alice likes
2: Contains zero ingredients that Alice dislikes

Step 1: Filter recipes based on Alice's preferences
Step 2: Output the suitable recipes

```js
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
  dislikes: [
    "pork",
    "chicken",
    "turkey",
    "beef",
    "dairy",
    "butter",
    "eggs",
    "gluten",
    "nuts",
    "soy",
    "flour",
  ],
};

const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "honey", "brown sugar", "cloves", "butter"],
  },
  {
    name: "Roast Turkey with Stuffing",
    ingredients: [
      "turkey",
      "bread crumbs",
      "gluten",
      "celery",
      "onions",
      "tomatoes",
      "butter",
    ],
  },
  {
    name: "Classic Beef Wellington",
    ingredients: ["beef", "mushrooms", "puff pastry", "eggs"],
  },
  {
    name: "Gingerbread Cookies",
    ingredients: ["flour", "molasses", "ginger", "cinnamon", "butter", "eggs"],
  },
  {
    name: "Vegan Stuffed Peppers",
    ingredients: [
      "bell peppers",
      "quinoa",
      "black beans",
      "corn",
      "tomato sauce",
      "kale",
    ],
  },
  {
    name: "Roasted Brussels Sprouts",
    ingredients: ["brussels sprouts", "olive oil", "garlic"],
  },
  {
    name: "Vegan Avocado Chocolate Mousse",
    ingredients: ["avocado", "cocoa powder", "maple syrup", "flour"],
  },
  {
    name: "Vegan Christmas Cookies",
    ingredients: ["oats", "maple syrup", "vanilla extract"],
  },
  {
    name: "Quinoa Salad",
    ingredients: ["kale", "quinoa", "cranberries", "lemon juice"],
  },
  {
    name: "Vegan Lentil Loaf",
    ingredients: ["lentils", "carrots", "celery", "onions", "tomato paste"],
  },
];
```

## Solution

[index.js](./index.js)

## Hint

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
