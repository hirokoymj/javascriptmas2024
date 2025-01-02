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

// const toyCompany2 = {
//   redTeam: ["Dan", "Steve", "Larry", "Linda", "Tony", "Matt"],
//   blueTeam: ["Stacy", "Kevin", "Robbie", "Todd", "Jess", "Nick"],
// };

//const toyCompany2 = {};

for (const team in toyCompany) {
  toyCompany2[team] = [];
  for (const department in toyCompany[team]) {
    for (const employee in toyCompany[team][department]) {
      toyCompany2[team].push(toyCompany[team][department][employee]);
    }
  }
}

console.log(toyCompany2);

// Object.keys(toyCompany).forEach((team) => {
//   const output = Object.values(team).reduce((acc, department) => {
//     Object.values(department).forEach((role) => {
//       console.log(team);
//       acc[team] = "";

//       return acc;
//     });
//   }, {});
// });

// const findName = (name) => {
//   Object.values(toyCompany).forEach((team) => {
//     Object.values(team).forEach((department) => {
//       Object.values(department).forEach((role) => {
//         console.log(role);
//       });
//     });
//   });
// };

// findName("Todd");

const toyCompany2 = Object.entries(toyCompany).reduce(
  (acc, [team, departments]) => {
    acc[team] = [];
    acc[team].push("a");
    return acc;
  },
  {}
);

//console.log(toyCompany2);
