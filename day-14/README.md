# Day 14 - Build Northagram

### Challenge

The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:

- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.

## Solution

[index.js](./index.js)

## Reference

- [setInerval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
- [setInterval - W3school](https://www.w3schools.com/jsreF/tryit.asp?filename=tryjsref_win_setinterval)

- https://www.programiz.com/javascript/setInterval

#### Example 1: Display a Text Once Every 1 Second

```js
// program to display a text using setInterval method
function greet() {
  console.log("Hello world");
}

setInterval(greet, 1000);
```

```js
Hello world
Hello world
Hello world
Hello world
Hello world
...
```

<hr />

**Example 2: Display Time Every 5 Seconds**

```js
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // return the time
  let time = dateTime.toLocaleTimeString();

  console.log(time);
}

let display = setInterval(showTime, 5000);
```

```js
"5:15:28 PM"
"5:15:33 PM"
"5:15:38 PM"
....
```

#### Example 3: Use clearInterval() Method

```js
let count = 0;

let interval = setInterval(function () {
  count += 1;

  if (count === 5) {
    clearInterval(interval);
  }

  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
```

```js
4:47:41 PM
4:47:43 PM
4:47:45 PM
4:47:47 PM
4:47:49 PM
```

## Example 4 - two counter

```js
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
```
