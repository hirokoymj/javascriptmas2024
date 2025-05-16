// most popular toys
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
];
// RESULT

export const flattenAndSumToys = (toyRequests) => {
  return toyRequests.reduce((acc, data) => {
    data.toys.forEach((toyObj) => {
      const toyName = Object.keys(toyObj)[0];
      const amount = toyObj[toyName];
      const existingToy = acc.find((item) => item.hasOwnProperty(toyName));

      if (existingToy) {
        existingToy[toyName] += amount;
      } else {
        acc.push({ [toyName]: amount });
      }
    });
    return acc;
  }, []);
};

const flattenedToys = flattenAndSumToys(toysRequested);
console.log(flattenedToys);

flattenedToys.sort((a, b) => {
  const key_a = Object.keys(a)[0];
  const key_b = Object.keys(b)[0];
  return a[key_a] < b[key_b] ? 1 : -1;
});
console.log(flattenedToys);
console.log(flattenedToys[0]);

/*
[
  { '🚗 cars': 2500 },
  { '🪁 kites': 3500 },
  { '🎲 board games': 3000 },
  { '🎺 trumpets': 1000 },
  { '🧩 puzzles': 3000 },
  { '🛷 sleds': 2000 },
  { '🎨 art kits': 3000 },
  { '🔫 water guns': 2500 },
  { '🪆 nesting dolls': 2000 },
  { '🛹 skateboards': 2500 },
  { '🎮 video games': 2000 }
]
*/
