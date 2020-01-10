const db = require("./db-config");

function getRecipes() {
  return db("recipes").select();
}

function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("recipes_ingredients as ri", "i.id", "ri.ingredient_id")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .where({ recipe_id })
    .select("ri.quantity", "i.name");
}

function getInstructions(recipe_id) {
  return db("steps as s")
    .join("recipes as r", "r.id", "s.recipe_id")
    .where({ recipe_id })
    .orderBy("s.step_number")
    .select("s.id", "r.name as recipe_name", "s.step_number", "s.instructions");
}

function getIngredientRecipes(ingredient_id) {
  return db("ingredients as i")
    .join("recipes_ingredients as ri", "i.id", "ri.ingredient_id")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .where({ ingredient_id })
    .select("i.name as ingredient_name", "r.name as recipe_name");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getIngredientRecipes
};
