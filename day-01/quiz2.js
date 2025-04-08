const listArr = ["talking picture frames"];

`
"talking picture frames";
"talking  picture frames";
"talking picture    frames";
" talking picture frames ";
`;

const checkDuplicate = (str) => {
  const text = str.trim().replace(/\s+/g, " ");
  console.log(text);
  const result = listArr.some((data) => data.toLowerCase() === text);
  if (!result) {
    listArr.push(text);
  } else {
    console.log("duplicated!");
  }
};

checkDuplicate("talking       picture    frames");
checkDuplicate("talking       picture frames");
checkDuplicate("   talking       picture frames");
checkDuplicate("Xmas Tree");
console.log(listArr);
