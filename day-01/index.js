// Get references to DOM elements
const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const shoppingList = document.getElementById("shopping-list");
const listArr = [];

// Function to check item is not duplicate
function checkDuplicate() {
  /* ⚠️ You need to add code to this function! ⚠️*/
  const formatted = itemInput.value.trim().replace(/\s+/, " ");
  const found = listArr.includes(formatted);
  const itemText = itemInput.value;
  if (!found) listArr.push(itemText);
  renderList();
}

// Function to add an item to the shopping list
function renderList() {
  shoppingList.innerHTML = "";
  listArr.forEach((gift) => {
    const listItem = document.createElement("li");
    listItem.textContent = gift;
    shoppingList.appendChild(listItem);
  });
  itemInput.value = ""; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener("click", checkDuplicate);

// Allow adding items by pressing Enter key
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkDuplicate();
  }
});
