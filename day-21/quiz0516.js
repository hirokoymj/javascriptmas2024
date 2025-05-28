// most popular toys
const toysRequested = [
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

// export const flattenAndSumToys = (toyRequests) => {
//   output = toyRequests.reduce((acc, data) => {
//     data.toys.forEach((toy) => {
//       const toyName = Object.keys(toy)[0];
//       const value = toy[toyName];
//       const found = acc.find((d) => d.hasOwnProperty[toyName]);
//       if (found) {
//         acc[key] += value;
//       } else {
//         acc.push(found);
//       }
//     });
//     return acc;
//   }, []);

//   return output;
// };
//console.log(flattenAndSumToys(toysRequested));
