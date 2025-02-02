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

const suitableRecipes = recipes.filter((recipe) => {
  // Check if the recipe contains at least one favorite ingredient
  // Check if the recipe contains any disliked ingredients
  // Return true if it contains at least one favorite and no dislikes
});

console.log(suitableRecipes);
