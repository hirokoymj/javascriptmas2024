# Day 18 - The cost of xmas

## Challenge

😱 Christmas can get expensive!

You've been on a shopping trip and spent too much money.
But how much of that can you blame on Christmas?

**Task**

- Calculate and return the total cost of only the gifts in the shopping cart.
- Each gift has the isGift boolean set to true.
- The total cost of gifts should be given to two decimal places.

Expected output: 559.93

**Stretch Goal**

- Use the reduce() method to complete this challenge.

### Solution

```js
function calculateCost(arr) {
  const total = arr.reduce((acc, data) => {
    if (data.isGift) acc = acc + data.price;
    return acc;
  }, 0); // Your code here!
  console.log(total); //559.9300000000001
  return Math.round(total * 100) / 100;
}

console.log(calculateCost(shoppingCartData)); //559.93
```
