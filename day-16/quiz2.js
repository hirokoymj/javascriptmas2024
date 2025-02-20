const workshopData = [
  {
    name: "Elf Tiberius III",
    toysMade: {
      "Teddy Bear": 10,
      "Race Car": 5,
      Doll: 7,
    },
    toysShipped: {
      //1
      NorthPole: {
        //2
        MainWarehouse: [
          //3
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

const result = workshopData.map((data) => {
  const newObj = Object.values(data.toysShipped).reduce((acc, data1) => {
    Object.values(data1).forEach((data2) => {
      data2.forEach((data3) => {
        console.log(data3.toy);
        console.log(data3.count);
      });
    });
  }, {});
});
