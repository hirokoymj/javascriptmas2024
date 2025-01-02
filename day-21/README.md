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
export const findMostRequestedToy = (toyRequests) => {
  const toyCounts = toyRequests.reduce((acc, location) => {
    location.toys.forEach((toy) => {
      const toyName = Object.keys(toy)[0];
      acc[toyName] = (acc[toyName] || 0) + toy[toyName];
    });
    return acc;
  }, {});
};
findMostRequestedToy(toysRequested);
// OUTPUT
//{🚗 cars: 2500, 🪁 kites: 3500, 🎲 board games: 9000, 🎺 trumpets: 2000, 🧩 puzzles: 6500, 🛷 sleds: 2000, 🎨 art kits: 5500, 🔫 water guns: 5000, 🪆 nesting dolls: 4000, 🛹 skateboards: 2500, 🎮 video games: 2000, 🚀 rocket ships: 5000, 🐉 dragon figurines: 5000, 🧙‍♂️ wizard wands: 6500, 🏀 basketballs: 1000, 📚 coloring books: 4000}

output.sort((a, b) => {
  const toyA = Object.values(a)[0];
  const toyB = Object.values(b)[0];
  return toyB - toyA;
});
```
