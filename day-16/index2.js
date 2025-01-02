///--My example #1 - Not work
// let temp = {};
// for (const elf of workshopData) {
//   for (const region in elf.toysShipped) {
//     for (const subregion in elf.toysShipped[region]) {
//       let shipped = [];
//       elf.toysShipped[region][subregion].forEach((data) => {
//         shipped.push(data);
//       });
//       // // [
//       // //   { toy: 'Board Game', count: 3 },
//       // //   { toy: 'Doll', count: 10 },
//       // //   { toy: 'Doll', count: 8 }
//       // // ]
//       const output = shipped.reduce((acc, currentVal) => {
//         const { toy, count } = currentVal;
//         acc[toy] = (acc[toy] || 0) + count;
//         return acc;
//       }, {});
//       console.log(output);
//       shipped.length = 0;
//     }
//   }
// }
