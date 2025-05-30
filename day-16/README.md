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
// [
//   {
//     name: "Elf Tiberius III",
//     totalShipped: { "Teddy Bear": 10, "Race Car": 5, Doll: 7 },
//   },
//   {
//     name: "Elf Herbert Drinklater",
//     totalShipped: { Puzzle: 15, Blocks: 20 },
//   },
// ];
```

## Hint

```js
toysShipped: {  //<----Level 1 == Object
  NorthPole: {    //<----Level 2 == Object
    MainWarehouse: [  //<----Level 3 == Array
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
```

- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
```

## Quiz

**Q1**: Flatten three nested toysShipped object.

```js
const workshopData = [
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
];

/*
Output
[
   {
     name: 'Elf Tiberius III',
     toysMade: { 'Teddy Bear': 10, 'Race Car': 5, Doll: 7 },
     toysShipped: { 'Teddy Bear': 10, 'Race Car': 5, Doll: 7 }
   }
 ]
*/
```

**Q1:answer**

```js
const result = workshopData.map((data) => {
  const output = Object.values(data.toysShipped).reduce((acc, region) => {
    Object.values(region).forEach((location) => {
      location.forEach((item) => {
        acc[item.toy] = (acc[item.toy] || 0) + item.count;
      });
    });
    return acc;
  }, {});
  return {
    ...data,
    toysShipped: output,
  };
});
```

## Reference

- https://github.com/mendezpvi/javascriptmas-2024
