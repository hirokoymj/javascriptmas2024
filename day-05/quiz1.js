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

  array.forEach((data, index) => {
    const v1 = data[0]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const v2 = data[1]
      .replace(/\s+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    console.log(`${index} - ${v1}, ${v2}`);

    if (v1 === v2) {
      console.log(`${index} - ${v1}, ${v2}`);
      output.push(data);
    }
  });
  console.log(output);
};

findAnagrams(anagrams);
