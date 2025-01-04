import { toyCompany } from "./data.js";

// Transform
// const toyCompany2 = {
//   redTeam: ["Dan", "Steve", "Larry", "Linda", "Tony", "Matt"],
//   blueTeam: ["Stacy", "Kevin", "Robbie", "Todd", "Jess", "Nick"],
// };

///---Ex #1
const toyCompany1 = [];
for (const team in toyCompany) {
  toyCompany1[team] = [];
  for (const department in toyCompany[team]) {
    for (const employee in toyCompany[team][department]) {
      toyCompany1[team].push(toyCompany[team][department][employee]);
    }
  }
}
console.log(toyCompany1);

///---Ex #1
Object.keys(toyCompany).forEach((team) => {
  const output = Object.values(team).reduce((acc, department) => {
    Object.values(department).forEach((role) => {
      console.log(team);
      acc[team] = "";

      return acc;
    });
  }, {});
});

const findName = (name) => {
  Object.values(toyCompany).forEach((team) => {
    Object.values(team).forEach((department) => {
      Object.values(department).forEach((role) => {
        console.log(role);
      });
    });
  });
};

findName("Todd");

/// Ex #3
const toyCompany3 = Object.entries(toyCompany).reduce(
  (acc, [team, departments]) => {
    acc[team] = [];
    acc[team].push("a");
    return acc;
  },
  {}
);

console.log(toyCompany3);
