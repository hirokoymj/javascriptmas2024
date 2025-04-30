const array = ["a", "b", "c", "d"];

if (array.length > 0) {
  const removedIndex = Math.floor(Math.random() * array.length);
  const removedItem = array.splice(removedIndex, 1);
  console.log(removedItem[0]);
}

const interval = setInterval(() => {
  const removedIndex = Math.floor(Math.random() * array.length);
  const removedItem = array.splice(removedIndex, 1);
  console.log(removedItem[0]);
}, 2000);

/* <img class="snowman-part body" src="./assets/images/body.png" alt="snowman's body">
<img class="snowman-part head" src="./assets/images/head.png" alt="snowman's head">
<img class="snowman-part scarf" src="./assets/images/scarf.png" alt="snowman's scarf">
<img class="snowman-part nose" src="./assets/images/nose.png" alt="snowman's nose">
<img class="snowman-part arm" src="./assets/images/arm.png" alt="snowman's arm">
<img class="snowman-part hat" src="./assets/images/hat.png" alt="snowman's hat"> */
