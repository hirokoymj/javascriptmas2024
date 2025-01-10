import { feedData } from "./data.js"

const feedAvatarsEl = document.querySelector('.feed-avatars')
const feedImagesEl = document.querySelector('.feed-images')

function renderAvatars() {
  // Generate the HTML for each avatar using the feedData array
  feedAvatarsEl.innerHTML = feedData.map(avatar => {
    return `<img src="./images/${avatar.avatarUrl}" alt="${avatar.handle} smiling at the camera." class="avatar">`
  }).join('')
}

function renderImage(images) {

  // Clear previous content
  feedImagesEl.innerHTML = ''
  feedImagesEl.innerHTML += `
    <figure>
      <img src="./images/${images.imageUrl}" alt="${images.alt}" class="feature-image">
      <p class="feature-text">${images.alt}</p>
    </figure>`
}

function renderHighlight(avatarIndex) {
  const avatars = [...document.getElementsByClassName('avatar')] /* Convert HTMLCollection to an array */

  avatars.forEach((avatar, index) => {
    if (avatarIndex === index) {
      avatar.classList.add('highlight')
      avatar.style.opacity = 1
    }
    else {
      avatar.classList.remove('highlight')
      avatar.style.opacity = .5
    }

  })
}

// Handle the timer to switch images and highlight avatars
function handleTimer() {
  let avatarIndex = 0 /* Index of the current avatar */
  let imgIndex = 0 /* Index of the current image */

  const interval = setInterval(() => {

    const currentAvatar = feedData[avatarIndex] 
    const currentImage = currentAvatar.features[imgIndex]

    renderImage(currentImage)
    imgIndex++

    if (imgIndex >= currentAvatar.features.length) {
      imgIndex = 0 /* Reset the image index */
      avatarIndex++ /* Move the next avatar */
    }

    if (avatarIndex >= feedData.length) {
      clearInterval(interval)
      renderHighlight(-1) /* Remove avatar highlights */
    }

  }, 1500) /* Change the image every 1.5s */
}

renderAvatars()
handleTimer()






/*----My ORG (1hr)----
import { feedData } from './data.js'

const avatarContainer = document.getElementsByClassName("feed-avatars");
const imageContainer = document.getElementsByClassName("feed-images");
let current = 0;

const renderAvatars = () => {
    const avatarHTML = feedData.map((data)=> {
        let html = `<img src=${data.avatarUrl} class="feed-avatars" />`;
        return html;
    });
    return avatarHTML.join("");
}

const renderImage = (id) => {
    console.log("renderImage");
    const found = feedData.find((data, index)=>{
        if (index === id) return data}).features;
    console.log(found);
 
}

console.log(renderImage(2));



const initPage = () =>{
    avatarContainer.innerHTML = renderAvatars();
    
}

const handleTimer = (array) =>{
    array.forEach((data) => setTimeout(
        imageContainer.innterHTML = data
    ), 3000);
}

/*----My ORG (1hr)----



