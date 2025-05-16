// let anagrams = [
//   ["Can Assault", "Santa Claus"],
//   ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
//   ["Frosty The Snowman", "Honesty Warms Front"],
//   ["Drastic Charms", "Christmas Cards"],
//   ["Congress Liar", "Carol Singers"],
//   ["The Tin Glints", "Silent Night"],
//   ["Be The Helm", "Betlehem"],
//   ["Is Car Thieves", "Christmas Eve"],
// ];

// const findAnagrams = (array) => {
//   const output = [];
//   array.forEach((data) => {
//     const text1 = data[0]
//       .replace(/\s+/g, "")
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     const text2 = data[1]
//       .replace(/\s+/g, "")
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     console.log(text1);
//     if (text1 == text2) output.push(data);
//   });
//   return output;
// };
// console.log(findAnagrams(anagrams));

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
  const index_a = monthList.findIndex((data) => data === a);
  const index_b = monthList.findIndex((data) => data === b);
  return index_a < index_b ? -1 : 1;
});

months.sort((a, b) => {
  const index_a = monthList.indexOf(a);
  const index_b = monthList.indexOf(b);
  return index_a < index_b ? -1 : 1;
});

console.log(months); //[ 'Jan', 'Feb', 'March', 'Dec' ]
