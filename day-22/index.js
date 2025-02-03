import { addresses } from "./addresses.js";

const labelsContainer = document.querySelector(".labels-container");

const getRandomIndex = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return randomNum;
};

const generateLabel = (addressData) => {
  const printableAddress = addressData.filter((data) => {
    if (data.isOnChristmasList === true) {
      const { name, address1, town, state, country } = data;
      const icon1 = getRandomIndex(icons);
      const icon2 = getRandomIndex(icons);
      let html = `
            <section>
                <p>${name}</p>
                <p>${address1}</p>
                <p>${town}</p>
                <p>${state}</p>
                <p>${country}</p>
                <img scr="icons/${icon1}" alt="${icon1}" />
                <img scr="icons/${icon2}" alt="${icon2}" />
            </section>`;
      return html;
    }
  });
};

labelsContainer.innerHTML = generateLabel(addresses);

const labelsContainer = document.querySelector(".labels-container");
