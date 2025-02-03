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

///{ 'Teddy Bear': 10, 'Race Car': 5, Doll: 7 }

const newArray = workshopData.map((data) => {
  const result = Object.values(data.toysShipped).reduce((acc, region) => {
    Object.values(region).forEach((location) => {
      location.forEach((data) => {
        acc[data.toy] = (acc[data.toy] || 0) + data.count;
      });
    });
    return acc;
  }, {});
  console.log(result);
});
//console.log(newArray);
