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

console.log(findEmployee("Todd"));

console.log(findEmployee("Hiroko"));

///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
//The return statement ends function execution and specifies a value to be returned to the function caller.
