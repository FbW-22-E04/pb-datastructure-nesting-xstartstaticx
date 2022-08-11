// 1. 2D Array
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];
for (const boardArr of board) {
  for (const item of boardArr) {
    console.log(item);
  }
}

// 2. Doggo
const doggo = {
  name: "Clifford",
  breed: "Big Red Dog",
  favoriteFoods: [
    "chicken",
    "peanut butter",
    "food that falls off my humans table",
  ],
  printFavFoods: function () {
    for (const food of doggo.favoriteFoods) {
      console.log("Q2.4:", food);
    }
  },
};
console.log("Q2.3:", doggo.favoriteFoods[1]);

doggo.printFavFoods();

// 3
const recipes = {
  ingredients: {
    butter: "one stick",
    sugar: "one cup",
    flour: "two cups",
    salt: "one pinch",
  },
  printRecipe: function () {
    console.log("Q3.5:", Object.values(recipes.ingredients));
  },
};

recipes.ingredients = { ...recipes.ingredients, ginger: "one stick" };
console.log("Q3.3:", recipes.ingredients);

delete recipes.ingredients.sugar;

recipes.ingredients = { ...recipes.ingredients, brownSugar: "one cup" };

console.log("Q3.4:", recipes.ingredients);

recipes.printRecipe();
