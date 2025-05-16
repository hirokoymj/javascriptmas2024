// let myArray = [
//   { id: 0, name: "Jhon" },
//   { id: 1, name: "Sara" },
//   { id: 2, name: "Domnic" },
//   { id: 3, name: "Bravo" },
// ];

// //The name of the data with ID 2 is "Lala".
// const found = myArray.find((d) => d.id === 2);
// found.name = "Lala";

// console.log(myArray);

//Delete id2 from myArray

let myArray = [
  { id: 0, name: "Jhon" },
  { id: 1, name: "Sara" },
  { id: 2, name: "Domnic" },
  { id: 3, name: "Bravo" },
];

const removeIndex = myArray.findIndex((d) => d.id === 2);
myArray.splice(removeIndex, 1);
console.log(myArray);
