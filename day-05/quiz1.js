let anagrams = [
  ["Can Assault", "Santa Claus"],
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
  ["Frosty The Snowman", "Honesty Warms Front"],
  ["Drastic Charms", "Christmas Cards"],
  ["Congress Liar", "Carol Singers"],
  ["The Tin Glints", "Silent Night"],
  ["Be The Helm", "Betlehem"],
  ["Is Car Thieves", "Christmas Eve"],
];

const findAnagrams = (array) => {
  const output = [];
  array.map((data) => {
    const text1 = data[0]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const text2 = data[1]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    if (text1 === text2) output.push(data);
    console.log(`${text1} - ${text2}`);
  });
  console.log(output);
};
// // itelate all element -> map, forEach
// // eary exit -> for, some, find, filter,
// //sort(a, b)
findAnagrams(anagrams);

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
months.sort((a, b) => (monthList.indexOf(a) < monthList.indexOf(b) ? -1 : 1));
console.log(months); //[ 'Jan', 'Feb', 'March', 'Dec' ]
