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

function findAnagrams(array) {
  // write your code here
  const formatted = anagrams.map((data) => {
    data[0] = data[0]
      .split(" ")
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    data[1] = data[1]
      .split(" ")
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    return data;
  });

  const output = formatted.reduce((acc, data) => {
    const [str1, str2] = data;
    if (str1 === str2) acc.push(data);
    return acc;
  }, []);
  return output;
}

console.log(findAnagrams(anagrams));
///[['aaaclnsstu', 'aaaclnsstu'], ['dddeeeeeefhilnnoorrrrstu', 'dddeeeeeefhilnnoorrrrstu'], ['acegilnorrss', 'acegilnorrss']]
