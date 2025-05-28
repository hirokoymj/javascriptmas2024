//Contains at least one ingredient Alice likes
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
};

const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "banana", "brown sugar", "kale", "butter"],
  },
  {
    name: "Vegan Christmas Cookies",
    ingredients: ["oats", "maple syrup", "vanilla extract"],
  },
];
//array.some() true/false
//array.includes(a) true/false
const suitableRecipes = recipes.filter((recipe) => {
  const result = recipe.ingredients.some((ingredient) => {
    const hasLoved = guest.loves.includes(ingredient);
    return hasLoved;
  });
  return result;
});

console.log(suitableRecipes);
