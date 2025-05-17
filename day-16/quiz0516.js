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

const final = workshopData.map((data) => {});
