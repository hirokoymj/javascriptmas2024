const workshopData = [
  {
    name: "Elf Ernest Tinkerer",
    toysMade: {
      "Board Game": 3,
      Doll: 18,
    },
    toysShipped: {
      SouthAmerica: {
        Brazil: [{ toy: "Board Game", count: 3 }],
        Argentina: [],
      },
      Africa: {
        Nigeria: [{ toy: "Doll", count: 10 }],
        Namibia: [{ toy: "Doll", count: 8 }],
      },
    },
  },
];

const result = workshopData.map((data) => {
  Object.values(data.toysShipped).forEach((region) => {
    Object.values(region).forEach((location) => {
      location.forEach((item) => {
        return item;
      });
    });
  });
});

console.log(result);

///--Example #2
// const newArray = workshopData.map((data) => ({
//   name: data.name,
//   totalShipped: Object.values(data.toysShipped).reduce((acc, region) => {
//     Object.values(region).forEach((location) => {
//       location.forEach((item) => {
//         acc[item.toy] = (acc[item.toy] || 0) + item.count;
//       });
//     });
//     return acc;
//   }, {}),
// }));

// console.log(newArray);

/*
[
  {
    name: 'Elf Tiberius III',
    totalShipped: { 'Teddy Bear': 10, 'Race Car': 5, Doll: 7 }
  },
  {
    name: 'Elf Herbert Drinklater',
    totalShipped: { Puzzle: 15, Blocks: 20 }
  },
  {
    name: 'Elf Kalvin Armadillo',
    totalShipped: { Drone: 1, Robot: 10 }
  },
*/
