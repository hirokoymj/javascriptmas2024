// Guest and her preferences
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
};

const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "banana", "brown sugar", "kale", "butter"],
  },
];
///The some() method tests whether at least one element in the array.
//It returns true if it finds an element
const suitableRecipes = recipes.filter((recipe) => {
  const hasLovedIngredient = recipe.ingredients.some((ingredient) => {
    const result = guest.loves.includes(ingredient);
    console.log(result);
    return result;
  });
  return hasLovedIngredient;
});

console.log(suitableRecipes);

// false
// false
// false
// true
// [
//   {
//     name: 'Honey-Glazed Ham',
//     ingredients: [ 'pork', 'banana', 'brown sugar', 'kale', 'butter' ]
//   }
// ]
