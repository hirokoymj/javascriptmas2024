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

const result = workshopData.map((data) => {
  const output = Object.values(data.toysShipped).reduce((acc, region) => {
    Object.values(region).forEach((location) => {
      location.forEach((item) => {
        const toyName = item.toy;
        const count = item.count;
        acc[toyName] = acc[toyName] || 0 + count;
      });
    });
    return acc;
  }, {});
  return {
    ...data,
    toysShipped: output,
  };
});

console.log(result);
