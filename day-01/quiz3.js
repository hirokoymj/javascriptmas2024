//Q1
const listArr = ["talking picture frames"];

`
"talking picture frames";
"talking  picture frames";
"talking picture    frames";
" talking picture frames ";
`;

const checkDuplicate = (str) => {
  const text = str.trim().replace(/\s+/g, " ");
  if (!listArr.includes(text)) {
    listArr.push(text);
  }
};

checkDuplicate("      talking picture frames     ");
checkDuplicate("abc");
console.log(listArr);

//------------------
// Q2:
//Replace Xmas to Christmas
const str = "Twas the night before Xmas...";

const text = str.replace(/Xmas/i, "Christmas");
console.log(text);
