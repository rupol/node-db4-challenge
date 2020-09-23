exports.seed = async knex => {
  await knex("recipes").insert([
    {
      name: "pizza dough",
      servings: 4,
      calories_per_serving: 300,
      diet_type: "vegetarian"
    },
    {
      name: "refried beans",
      servings: 10,
      calories_per_serving: 200,
      diet_type: "vegetarian"
    },
    {
      name: "mac and cheese",
      servings: 4,
      calories_per_serving: 500,
      diet_type: "vegetarian"
    }
  ]);
};
