const listArr = ["talking picture frames"];

`
"talking picture frames";
"talking  picture frames";
"talking picture    frames";
" talking picture frames ";
`;

const checkDuplicate = (str) => {
  const item = str.trim().replace(/\s+/g, " ");
  const isExist = listArr.some(
    (data) => data.toLocaleLowerCase() === item.toLowerCase()
  );
  console.log(isExist);

  if (!isExist) {
    listArr.push(item);
  }
  console.log(listArr);
};

checkDuplicate("      talking picture frames     ");
