# Day 13 - Santa's Change

## Challenge

Santa needs your help to figure out if he has enough money to give everyone change!
Your goal will be to return true if everyone gets their correct change, and false if at least one person does not receive their correct change! Use the function below to get started!

- Santa will only accept $5, $10 and $20 bills.
- You cannot split a bill in half, for example if someone pays with a $10 and you only have a $10. You will take their $10 and they will not get any change!
- Your goal will be to return a boolean. You should return true if everyone received their correct change, or false if at least one person did not.

## Solution

[index.js](index.js)

## for of

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Syntax

  ```js
  for (variable of iterable)
  ```

  ```js
  const array1 = ["a", "b", "c"];

  for (const element of array1) {
    console.log(element);
  }

  // Expected output: "a"
  // Expected output: "b"
  // Expected output: "c"
  ```

## for in

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- Syntax

  ```js
  for (variable in object)
  ```

  ```js
  const object = { a: 1, b: 2, c: 3 };

  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }

  // Expected output:
  // "a: 1"
  // "b: 2"
  // "c: 3"
  ```
