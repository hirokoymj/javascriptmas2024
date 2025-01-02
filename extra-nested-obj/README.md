# Nested object iteration

## Task

- Find "Todd" in toyCompay.

```js
const toyCompany = {
  redTeam: {
    production: {
      redProdManager: "Dan",
      redWorkerOne: "Steve",
      redWorkerTwo: "Larry",
    },
    sales: {
      redSalesManager: "Linda",
      redSalesOne: "Tony",
      redSalesTwo: "Matt",
    },
  },
  blueTeam: {
    production: {
      blueProdManager: "Stacy",
      blueworkerOne: "Kevin",
      blueWorkerTwo: "Robbie",
    },
    sales: {
      blueSalesManager: "Todd",
      blueSalesOne: "Jess",
      blueSalesTwo: "Nick",
    },
  },
};
```

## Solution #1

```js
const findEmployee = (name) => {
  for (const team in toyCompany) {
    for (const department in toyCompany[team]) {
      for (const role in toyCompany[team][department]) {
        if (name === toyCompany[team][department][role]) {
          return `Found ${name}`;
        }
      }
    }
  }
  return `not found`;
};
```

## Solution #2

```js
const findName = (name) => {
  Object.values(toyCompany).forEach((team) => {
    Object.values(team).forEach((department) => {
      Object.values(department).forEach((role) => {
        console.log(role);
      });
    });
  });
};
```

## transform #1

```js
const toyCompany2 = {
  redTeam: ["Dan", "Steve", "Larry", "Linda", "Tony", "Matt"],
  blueTeam: ["Stacy", "Kevin", "Robbie", "Todd", "Jess", "Nick"],
};
```

```js
const toyCompany2 = {};

for (const team in toyCompany) {
  toyCompany2[team] = [];
  for (const department in toyCompany[team]) {
    for (const role in toyCompany[team][department]) {
      toyCompany2[team].push(toyCompany[team][department][role]);
    }
  }
}
console.log(toyCompany2);

// const toyCompany2 = {
//   redTeam: ["Dan", "Steve", "Larry", "Linda", "Tony", "Matt"],
//   blueTeam: ["Stacy", "Kevin", "Robbie", "Todd", "Jess", "Nick"],
// };
```

## transform #3

```js
Object.entries(toyCompany).map(([team, teams]) => {
  Object.entries(teams).map(([department, departments]) => {
    Object.entries(departments).map(([role, name]) => {
      console.log(name);
    });
  });
});
```

## Transform #4

```js
const output = Object.entries(toyCompany).reduce((acc, [team, teams]) => {
  acc[team] = ["test"]; ///<--- acc must initialize here.
  Object.entries(teams).forEach(([department, departments]) => {
    Object.entries(departments).forEach(([role, name]) => {
      acc[team].push(name);
    });
  });
  return acc;
}, {});

// const output = {
//   redTeam: ["Dan", "Steve", "Larry", "Linda", "Tony", "Matt"],
//   blueTeam: ["Stacy", "Kevin", "Robbie", "Todd", "Jess", "Nick"],
// };
```

<hr />

### Access object data

- https://dev.to/ddrummer3993/nested-object-iteration-using-multiple-forin-loops-4k6l
- There are several ways to access object data in JavaScript:

1. Object.keys(objName) //=> returns an array of all keys.
2. Object.values(objName) //=> returns an array of all values.
3. Object.entries(objName) //=> returns an array of property arrays.
4. for...in loop

### Return

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- The return statement **ends** function execution and specifies a value to be returned to the function caller.

```js
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0
```
