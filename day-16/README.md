# Day 16 - Find the naughty elf

```js
export const workshopData = [
  {
    name: "Elf Tiberius III",
    toysMade: {
      "Teddy Bear": 10,
      "Race Car": 5,
      Doll: 7,
    },
    toysShipped: {
      NorthPole: {
        MainWarehouse: [
          { toy: "Teddy Bear", count: 3 },
          { toy: "Race Car", count: 5 },
        ],
        Overflow: [{ toy: "Teddy Bear", count: 2 }],
      },
      Europe: {
        Germany: [{ toy: "Teddy Bear", count: 5 }],
        France: [{ toy: "Doll", count: 7 }],
      },
    },
  },
  {...},
  {...},
  {...}
];
```

## Solution 1

```js
const newArray = workshopData.map((data) => ({
  name: data.name,
  totalShipped: Object.values(data.toysShipped).reduce((acc, region) => {
    Object.values(region).forEach((location) => {
      location.forEach((item) => {
        acc[item.toy] = (acc[item.toy] || 0) + item.count;
      });
    });
    return acc;
  }, {}),
}));
console.log(newArray);
```

**OUTPUT**

```js
[
  {
    name: "Elf Tiberius III",
    totalShipped: { "Teddy Bear": 10, "Race Car": 5, Doll: 7 },
  },
  {
    name: "Elf Herbert Drinklater",
    totalShipped: { Puzzle: 15, Blocks: 20 },
  },
  {
    name: "Elf Kalvin Armadillo",
    totalShipped: { Drone: 1, Robot: 10 },
  },
  {
    name: "Elf Ernest Tinkerer",
    totalShipped: { "Board Game": 3, Doll: 18 },
  },
];
```

- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

https://github.com/mendezpvi/javascriptmas-2024
