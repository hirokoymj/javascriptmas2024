function handleTimer() {
  let avatarIndex = 0; /* Index of the current avatar */
  let imgIndex = 0; /* Index of the current image */

  const interval = setInterval(() => {
    console.log(imgIndex);
    console.log("AvatarIndex - " + avatarIndex);

    imgIndex++;

    if (imgIndex >= 3) {
      imgIndex = 0; /* Reset the image index */
      avatarIndex++; /* Move the next avatar */
    }

    if (avatarIndex >= 10) {
      clearInterval(interval);
    }
  }, 1500); /* Change the image every 1.5s */
}

handleTimer();
