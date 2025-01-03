# Day 21 Xmas Label Maker

Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task **

1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good!

** Stretch goals **

1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.

```js
const labelsContainer = document.querySelector(".labels-container");

const addressList = addresses.filter((data) => data.isOnChistmasList === true);

addressList.forEach((data) => {
  const { name, address, town, state, country } = data;
  console.log(name);
  labelsContainer.innterHTML = `<div>${name}</div>`;
});
```
