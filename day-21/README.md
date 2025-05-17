# Day 21 - Santa's Data Analysis

### Task

```js
export const toysRequested = [
  {
    location: "Germany",
    amount: 11000,
    toys: [
      { "🚗 cars": 2500 },
      { "🪁 kites": 3500 },
      { "🎲 board games": 1500 },
      { "🎺 trumpets": 1000 },
      { "🧩 puzzles": 1500 },
      { "🛷 sleds": 1000 },
    ],
  },
  {
    location: "USA",
    amount: 16000,
    toys: [
      { "🎨 art kits": 3000 },
      { "🔫 water guns": 2500 },
      { "🪆 nesting dolls": 2000 },
      { "🛹 skateboards": 2500 },
      { "🎮 video games": 2000 },
      { "🧩 puzzles": 1500 },
      { "🎲 board games": 1500 },
      { "🛷 sleds": 1000 },
    ],
  },
  {
    location: "Japan",
    amount: 18500,
    toys: [
      { "🚀 rocket ships": 3000 },
      { "🐉 dragon figurines": 2500 },
      { "🧩 puzzles": 2000 },
      { "🧙‍♂️ wizard wands": 4000 },
      { "🎲 board games": 4500 },
      { "🎨 art kits": 2500 },
    ],
  },
  {
    location: "Zimbabwe",
    amount: 11500,
    toys: [
      { "🚀 rocket ships": 2000 },
      { "🐉 dragon figurines": 2500 },
      { "🔫 water guns": 2500 },
      { "🪆 nesting dolls": 2000 },
      { "🧩 puzzles": 1500 },
      { "🏀 basketballs": 1000 },
    ],
  },
  {
    location: "India",
    amount: 9000,
    toys: [
      { "📚 coloring books": 4000 },
      { "🧙‍♂️ wizard wands": 2500 },
      { "🎲 board games": 1500 },
      { "🎺 trumpets": 1000 },
    ],
  },
];
```

## Solution

```js
const flatten = toysRequested.reduce((acc, data) => {
  data.toys.forEach((toy) => {
    const toyName = Object.keys(toy)[0];
    const amount = toy[toyName];
    const isExist = acc.find((d) => d.hasOwnProperty(toyName));

    if (isExist) {
      isExist[toyName] += amount;
    } else {
      acc.push({ [toyName]: amount });
    }
  });
  return acc;
}, []);
console.log(flatten);
```
