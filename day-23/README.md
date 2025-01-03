# Day 23 - Santa got hacked!

## Task

Santa has been hacked! In the list of kids to deliver to, the Grinch has replaced some kids' names with his own name.

The original array looked like this:
['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']

**Task**

- Remove 'Grinch' from santasArr and put the missing kids back in their original places!

**Stretch goal**

- Do this without creating a new array and using no array methods other than .forEach().

```js
const santasArr = ['James', 'Yi', 'Grinch', 'Fatima', 'Tariq', 'Grinch', 'Clare', 'Grinch']
const missingNamesArr = ['Florinda', 'Jose', 'Gibbs']
Expected Output: ['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']
```

## Solution #1

```js
const santasArr = [
  "James",
  "Yi",
  "Grinch",
  "Fatima",
  "Tariq",
  "Grinch",
  "Clare",
  "Grinch",
];
const missingNamesArr = ["Florinda", "Jose", "Gibbs"];

let indexArr = []; ///2, 5, 7
const result = santasArr.filter((data, index) => {
  if (data === "Grinch") indexArr.push(index);
});

for (let i = 0; i < indexArr.length; i++) {
  santasArr.splice(indexArr[i], 1, missingNamesArr[i]);
}
```

## Solution #2

```js
santasArr = [
  "James",
  "Yi",
  "Grinch",
  "Fatima",
  "Tariq",
  "Grinch",
  "Clare",
  "Grinch",
];
missingNamesArr = ["Florinda", "Jose", "Gibbs"];

santasArr.forEach((name, index) => {
  if (name === "Grinch") {
    santasArr[index] = missingNamesArr.shift();
  }
});
```

## Reference

- [Array.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- removes the first element from an array
- Returns undefined if array is empty.

```js
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // Expected output: Array [2, 3]
console.log(firstElement); // Expected output: 1
```

<hr />

- [Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- removes the last element from an array

```js
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```
