function correctChangeFromSanta(bills) {
  let fives = 0;
  let tens = 0;
  let twenties = 0;

  for (let bill of bills) {
    switch (bill) {
      case 5:
        fives++;
        break;
      case 10:
        if (fives >= 1) {
          fives--;
        } else {
          return false;
        }
        tens++;
        break;
      case 20:
        if (tens >= 1 && fives >= 1) {
          tens--;
          fives--;
        } else if (fives >= 3) {
          fives -= 3;
        } else {
          return false;
        }
        twenties++;
        break;
    }
  }

  return true;
}

if (correctChangeFromSanta([5, 5, 5, 10, 20])) {
  console.log("Nice job Santa, everyone got their correct change!");
} else {
  console.log(
    "Looks like you have some work to do Santa, and bring some money next time!"
  );
}

if (correctChangeFromSanta([5, 5, 10, 10, 20])) {
  console.log("Nice job Santa, everyone got their correct change!");
} else {
  console.log(
    "Looks like you have some work to do Santa, and bring some money next time!"
  );
}
