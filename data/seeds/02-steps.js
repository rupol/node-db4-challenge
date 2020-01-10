exports.seed = function(knex) {
  return knex("steps").insert([
    {
      step_number: 1,
      instructions: "whisk together water, wine, and yeast",
      recipe_id: 1
    },
    {
      step_number: 2,
      instructions: "add olive oil, honey, and salt and mix thoroughly",
      recipe_id: 1
    },
    {
      step_number: 3,
      instructions:
        "add flour, small amounts at a time, mixing until dough starts to form",
      recipe_id: 1
    },
    {
      step_number: 4,
      instructions:
        "knead, adding more flour until dough is moist but not sticky and gluten has formed",
      recipe_id: 1
    },
    {
      step_number: 5,
      instructions:
        "divide into four even balls, coat with olive oil, and cover",
      recipe_id: 1
    },
    {
      step_number: 6,
      instructions: "let rise for 1-2 hours, then stretch into disc for pizza!",
      recipe_id: 1
    },
    {
      step_number: 1,
      instructions: "thoroughly rinse beans",
      recipe_id: 2
    },
    {
      step_number: 2,
      instructions:
        "add beans, water, salt, oregano, and quartered onion into instant pot",
      recipe_id: 2
    },
    {
      step_number: 3,
      instructions: "pressure cook on high for 45 minutes",
      recipe_id: 2
    },
    {
      step_number: 4,
      instructions: "drain beans, saving water",
      recipe_id: 2
    },
    {
      step_number: 5,
      instructions: "sautee diced onions in butter/lard",
      recipe_id: 2
    },
    {
      step_number: 6,
      instructions:
        "add beans and mash, adding bean water to hydrate until they are a creamy texture",
      recipe_id: 2
    },
    {
      step_number: 1,
      instructions:
        "preheat oven to 400 and melt the butter in a sauce pan, adding flour when melted",
      recipe_id: 3
    },
    {
      step_number: 2,
      instructions:
        "add milk slowly while constantly whisking, then slowly add grated cheese until roux is thick and cheesy",
      recipe_id: 3
    },
    {
      step_number: 3,
      instructions:
        "add cooked macaroni, transfer to oven dish, and add grated cheese and bread crumbs to top",
      recipe_id: 3
    },
    {
      step_number: 4,
      instructions: "bake for 20 minutes or until golden",
      recipe_id: 3
    }
  ]);
};
