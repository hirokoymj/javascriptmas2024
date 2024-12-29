// Guest and her preferences
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
  dislikes: [
    "pork",
    "chicken",
    "turkey",
    "beef",
    "dairy",
    "butter",
    "eggs",
    "gluten",
    "nuts",
    "soy",
    "flour",
  ],
};

// List of Christmas-themed recipes with their ingredients
const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "honey", "brown sugar", "cloves", "butter"],
  },
  {
    name: "Roast Turkey with Stuffing",
    ingredients: [
      "turkey",
      "bread crumbs",
      "gluten",
      "celery",
      "onions",
      "tomatoes",
      "butter",
    ],
  },
  {
    name: "Classic Beef Wellington",
    ingredients: ["beef", "mushrooms", "puff pastry", "eggs"],
  },
  {
    name: "Gingerbread Cookies",
    ingredients: ["flour", "molasses", "ginger", "cinnamon", "butter", "eggs"],
  },
  {
    name: "Vegan Stuffed Peppers",
    ingredients: [
      "bell peppers",
      "quinoa",
      "black beans",
      "corn",
      "tomato sauce",
      "kale",
    ],
  },
  {
    name: "Roasted Brussels Sprouts",
    ingredients: ["brussels sprouts", "olive oil", "garlic"],
  },
  {
    name: "Vegan Avocado Chocolate Mousse",
    ingredients: ["avocado", "cocoa powder", "maple syrup", "flour"],
  },
  {
    name: "Vegan Christmas Cookies",
    ingredients: ["oats", "maple syrup", "vanilla extract"],
  },
  {
    name: "Quinoa Salad",
    ingredients: ["kale", "quinoa", "cranberries", "lemon juice"],
  },
  {
    name: "Vegan Lentil Loaf",
    ingredients: ["lentils", "carrots", "celery", "onions", "tomato paste"],
  },
];

// Requirements for a suitable recipe
// 1: Contains at least one ingredient Alice likes
// 2: Contains zero ingredients that Alice dislikes

// Step 1: Filter recipes based on Alice's preferences

// const suitableRecipes = recipes.filter((recipe) => {
//   const {loves, dislikes} = guest;
//   const {ingredients, name} = recipe;
//   let isLike = false;
//   let isHate = false;

// for(let i=0; i<loves.length; i++){
//   const found = ingredients.find((d) => d === loves[i]);
//   if(found) isLike = true;
//   break;
// }

// for(let i=0; i<dislikes.length; i++){
//   const found = ingredients.find((d) => d === loves[i]);
//   if(found) isHate = true;
//   break;
// }

// console.log(`${isLike}/${isHate}/${name}`);

//   // const final = (isLike && !disLike) ? name: "No favolite recipe found";
//   // return final;
// });

const suitableRecipes = recipes.filter((recipe) => {
  const hasLovedIngredient = recipe.ingredients.some((ingredient) =>
    guest.loves.includes(ingredient)
  );

  const hasDislikedIngredient = recipe.ingredients.some((ingredient) =>
    guest.dislikes.includes(ingredient)
  );

  return hasLovedIngredient && !hasDislikedIngredient;
});

console.log(suitableRecipes);
