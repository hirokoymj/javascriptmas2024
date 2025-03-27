import { addresses } from "./address.js";

const icons = [
  "bauble.png",
  "bow.png",
  "candy-cane.png",
  "deer.png",
  "gifts.png",
  "gingerbread-man.png",
  "santa-hat.png",
  "santa.png",
  "snowflake.png",
  "snowglobe.png",
  "snowman.png",
  "star-bauble.png",
  "star.png",
  "stocking.png",
  "tree.png",
  "wreath.png",
];

//const labelsContainer = document.querySelector(".labels-container");

const getRandomIcon = (array) => {
  const removedIndex = Math.floor(Math.random() * array.length);
  const icon = array.splice(removedIndex, 1)[0];
  return icon;
};

console.log(getRandomIcon(icons));

const filteredData = addresses.filter(
  (address) => address.isOnChristmasList === true
);
console.log(filteredData);

const getRandomIndex = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return randomNum;
};

// const generateLabel = (addressData) => {
//   console.log(getRandomIcon());
// };

// labelsContainer.innerHTML = generateLabel(addresses);
