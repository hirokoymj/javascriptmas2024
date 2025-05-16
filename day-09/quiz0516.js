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
  const hasLoved = recipe.ingredients.some((ingredient) =>
    guest.loves.includes(ingredient)
  );
  return !hasLoved;
});

console.log(suitableRecipes);
