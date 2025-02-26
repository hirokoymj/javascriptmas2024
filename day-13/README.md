# Day 13 - Santa's Change

## Challenge

Santa needs your help to figure out if he has enough money to give everyone change!
Your goal will be to return true if everyone gets their correct change, and false if at least one person does not receive their correct change! Use the function below to get started!

- Santa will only accept $5, $10 and $20 bills.
- You cannot split a bill in half, for example if someone pays with a $10 and you only have a $10. You will take their $10 and they will not get any change!
- Your goal will be to return a boolean. You should return true if everyone received their correct change, or false if at least one person did not.

## Solution

[index.js](index.js)

```js
function correctChangeFromSanta(bills) {}

// Should return true
if (correctChangeFromSanta([5, 5, 5, 10, 20])) {
  console.log("Nice job Santa, everyone got their correct change!");
} else {
  console.log(
    "Looks like you have some work to do Santa, and bring some money next time!"
  );
}

// Should return false
if (correctChangeFromSanta([5, 5, 10, 10, 20])) {
  console.log("Nice job Santa, everyone got their correct change!");
} else {
  console.log(
    "Looks like you have some work to do Santa, and bring some money next time!"
  );
}
```

## Hint

- [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

```js
switch (expression) {
  case caseExpression1:
    statements;
  case caseExpression2:
    statements;
  // …
  case caseExpressionN:
    statements;
  default:
    statements;
}
```

**Example**

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0:
    console.log(0);
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

## for of vs for in

- [MDN - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- `for...of` - Array
- `for...in` - Object

```js
for (variable of iterable)
```

```js
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}
```

```js
for (variable in object)
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
```

## logic

```js
function correctChangeFromSanta(bills) {
  let fives = 0;
  let tens = 0;
  let twenties = 0;

  for (let bill of bills) {
    switch (bill) {
      case 5:
        return false; //Exits for...of loop and returns "false", which is the result of this function.
      case 10:
      case 20:
    }
  }
  return true; // Returns "true" if there is no false returns in the switch condition.
}
```

- https://scrimba.com/javascriptmas-c0javascriptmas/~06mj
