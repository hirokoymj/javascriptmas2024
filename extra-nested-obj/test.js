const gestures = ["firstbump", "handshake", "glance"];

const generateGreeting = () => {
  if (gestures.length === 0) return "no gesture";
  const randomIndex = Math.floor(Math.random() * gestures.length);
  //const gesture = gestures[randomIndex];
  const result = gestures.splice(randomIndex, 1);
  const greeting = `Walk up to friend and perform a ${result}`;
  return greeting;
};

console.log(generateGreeting());
console.log(generateGreeting());
console.log(generateGreeting());
console.log(generateGreeting());
