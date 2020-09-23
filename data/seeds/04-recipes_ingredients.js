exports.seed = function(knex) {
  return knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1.25 },
    { recipe_id: 1, ingredient_id: 2, quantity: 0.5 },
    { recipe_id: 1, ingredient_id: 3, quantity: 2.25 },
    { recipe_id: 1, ingredient_id: 4, quantity: 3 },
    { recipe_id: 1, ingredient_id: 5, quantity: 1.5 },
    { recipe_id: 1, ingredient_id: 6, quantity: 3 },
    { recipe_id: 1, ingredient_id: 7, quantity: 600 },
    { recipe_id: 2, ingredient_id: 8, quantity: 2 },
    { recipe_id: 2, ingredient_id: 6, quantity: 4 },
    { recipe_id: 2, ingredient_id: 9, quantity: 5 },
    { recipe_id: 2, ingredient_id: 10, quantity: 1 },
    { recipe_id: 3, ingredient_id: 11, quantity: 1.5 },
    { recipe_id: 3, ingredient_id: 12, quantity: 1 },
    { recipe_id: 3, ingredient_id: 13, quantity: 2.5 },
    { recipe_id: 3, ingredient_id: 14, quantity: 1 },
    { recipe_id: 3, ingredient_id: 6, quantity: 1 }
  ]);
};
