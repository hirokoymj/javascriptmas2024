const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const shoppingList = document.getElementById("shopping-list");
const listArr = [];

/*
- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "
*/

//---ORG
// function checkDuplicate() {
//   const formatted = itemInput.value.trim().replace(/\s+/, " ");
//   const found = listArr.includes(formatted);
//   const itemText = itemInput.value;
//   if (!found) listArr.push(itemText);
//   renderList();
// }

//

function checkDuplicate() {
  const itemText = itemInput.value.trim().replace(/\s+/g, " ");
  const isExist = listArr.some((d) => d.toLowerCase() === itemText);

  if (!isExist) {
    listArr.push(itemText);
  } else {
    alert("the item is already exists in the list");
  }
  renderList();
}

///---Sample
function checkDuplicate() {
  const itemText = itemInput.value.trim().replace(/\s+/g, " ");
  const exitInList = listArr.some(
    (item) => item.toLowerCase() === itemText.toLowerCase()
  );
  if (!exitInList) {
    listArr.push(itemText);
  } else {
    alert(`${itemText.toUpperCase()} already exists in the list.`);
  }

  renderList();
}

function renderList() {
  shoppingList.innerHTML = "";
  listArr.forEach((gift) => {
    const listItem = document.createElement("li");
    listItem.textContent = gift;
    shoppingList.appendChild(listItem);
  });
  itemInput.value = ""; // Clear the input field
}

addItemButton.addEventListener("click", checkDuplicate);

itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkDuplicate();
  }
});
