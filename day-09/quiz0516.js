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

const suitableRecipes = recipes.filter((recipe) => {
  const result = recipe.ingredients.some((data) => guest.loves.includes(data));
  return result;
});

console.log(suitableRecipes);
