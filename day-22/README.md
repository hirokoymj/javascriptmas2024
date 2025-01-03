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

const getRandomIndex = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return randomNum;
};

const generateLabel = (addressData) => {
  const printableAddress = addressData.filter(
    (data) => data.isOnChristmasList === true
  );
  const final = printableAddress
    .map((data) => {
      const { name, state, country } = data;
      const icon1 = getRandomIndex(icons);
      const icon2 = getRandomIndex(icons);
      let html = `
            <section>
                <p>${name}</p>
                <p>${state}</p>
                <img scr="icons/${icon1}" alt="${icon1}" />
                <img scr="icons/${icon2}" alt="${icon2}" />
            </section>`;
      return html;
    })
    .join("");
  return final;
};

labelsContainer.innerHTML = generateLabel(addresses);
```

## Reference:

- [Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"
```
