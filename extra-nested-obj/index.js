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

const output = Object.entries(toyCompany).reduce((acc, [team, teams]) => {
  acc[team] = [];
  Object.entries(teams).forEach(([department, departments]) => {
    Object.entries(departments).forEach(([role, name]) => {
      acc[team].push(name);
    });
  });
  return acc;
}, {});

console.log(output);

const toyCompany2 = Object.entries(toyCompany).reduce(
  (acc, [team, departments]) => {
    acc[team] = [];
    acc[team].push("a");
    return acc;
  },
  {}
);

//console.log(toyCompany2);
