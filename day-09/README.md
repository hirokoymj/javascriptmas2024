# Day 9 - Which recipe should Grandma make?

Requirements for a suitable recipe
1: Contains at least one ingredient Alice likes
2: Contains zero ingredients that Alice dislikes

Step 1: Filter recipes based on Alice's preferences
Step 2: Output the suitable recipes

```php
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
  dislikes: ["pork","chicken","turkey","beef","dairy","butter","eggs","gluten","nuts","soy","flour"],
};

const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "honey", "brown sugar", "cloves", "butter"]
  },
  {
    name: "Roast Turkey with Stuffing",
    ingredients: ["turkey","bread crumbs","gluten","celery","onions","tomatoes","butter"]
  },
  {
    name: "Classic Beef Wellington",
    ingredients: ["beef", "mushrooms", "puff pastry", "eggs"]
  },
  {
    name: "Gingerbread Cookies",
    ingredients: ["flour", "molasses", "ginger", "cinnamon", "butter", "eggs"]
  },
  {
    name: "Vegan Stuffed Peppers",
    ingredients: ["bell peppers","quinoa","black beans","corn","tomato sauce","kale"]
  },
  {
    name: "Roasted Brussels Sprouts",
    ingredients: ["brussels sprouts", "olive oil", "garlic"]
  },
  {
    name: "Vegan Avocado Chocolate Mousse",
    ingredients: ["avocado", "cocoa powder", "maple syrup", "flour"]
  },
  {
    name: "Vegan Christmas Cookies",
    ingredients: ["oats", "maple syrup", "vanilla extract"]
  },
  {
    name: "Quinoa Salad",
    ingredients: ["kale", "quinoa", "cranberries", "lemon juice"]
  },
  {
    name: "Vegan Lentil Loaf",
    ingredients: ["lentils", "carrots", "celery", "onions", "tomato paste"]
  },
];
```

## Solution

[index.js](./index.js)

## What is different between Array.some() and Array.includes()

- [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
Array.some(callback); // returns true or false
Array.includes(value); // returns true or false
Array.filter(callback); // returns Array or empty array
```

- **some** takes in a callback function where you can write your own logic to determine if an array contains some element which matches the conditions you wrote.
- The some() method of Array instances tests whether **at least one** element in the array passes the condition. It returns `true`.
- **includes** does a generic `equalTo` comparison on every element and will return true if at least one element in the array is equal to the value to find.

## Example

- Check if at least one element finds in an array

```js
const guest = { loves: "banana" };
const hasLoved = ["apple", "banana", "mango", "guava"].some(
  (data) => data === guest.loves
);
console.log(hasLoved); // true
```

```js
const guest = { dislike: ["kale", "tomato", "kiwi"] };
const hasDisliked = ["apple", "banana", "mango", "guava"].some((data) =>
  guest.dislike.includes(data)
);
console.log(hasDisliked); //false
```

<hr />

**Q1:**

- Contains at least one ingredient Alice likes

```js
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
};

const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "banana", "brown sugar", "kale", "butter"],
  },
];

const suitableRecipes = recipes.filter((recipe) => {});
```

**Q1 - Answer:**

```js
const suitableRecipes = recipes.filter((recipe) => {
  const hasLovedIngredient = recipe.ingredients.some((ingredient) => guest.loves.includes(ingredient););
  return hasLovedIngredient;
});

console.log(suitableRecipes);
```

## history

02/22, 02/23
