import { addresses } from "./addresses.js";

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

const labelsContainer = document.querySelector(".labels-container");
