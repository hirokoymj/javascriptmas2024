const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const shoppingList = document.getElementById("shopping-list");
const listArr = [];

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
