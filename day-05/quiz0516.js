const months = ["March", "Jan", "Feb", "Dec"];
const monthList = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

months.sort((a, b) => {
  const index_a = monthList.indexOf(a);
  const index_b = monthList.indexOf(b);
  return index_a < index_b ? -1 : 1;
});

console.log(months);
// months.sort((a, b) => {
//   const index_a = monthList.findIndex((data) => data === a);
//   const index_b = monthList.findIndex((data) => data === b);
//   return index_a < index_b ? -1 : 1;
// });

// months.sort((a, b) => {
//   const index_a = monthList.indexOf(a);
//   const index_b = monthList.indexOf(b);
//   return index_a < index_b ? -1 : 1;
// });

// console.log(months); //[ 'Jan', 'Feb', 'March', 'Dec' ]
