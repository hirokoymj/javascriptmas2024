import { feedData } from "./data.js";

function renderImage(image) {
  let html = `<img src="./images/${image.imageUrl}" alt="${image.alt}" class="feature-image">`;
  console.log(html);
}

function handleTimer() {
  let avatarIndex = 0;
  let imgIndex = 0;

  const interval = setInterval(() => {
    const currentAvatar = feedData[avatarIndex];
    const currentImage = currentAvatar.features[imgIndex];

    renderImage(currentImage);
    imgIndex++;

    if (imgIndex >= 3) {
      imgIndex = 0;
      avatarIndex++; //Next data
    }

    if (avatarIndex >= 3) {
      clearInterval(interval);
    }
  }, 1500);
}

handleTimer();
