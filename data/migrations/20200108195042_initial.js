exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.integer("servings").notNullable();
    table.integer("calories_per_serving");
    table.string("diet_type");
  });

  await knex.schema.createTable("steps", table => {
    table.increments("id");
    table.integer("step_number").notNullable();
    table.string("instructions").notNullable();
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.integer("name").notNullable();
  });

  await knex.schema.createTable("recipes_ingredients", table => {
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.integer("quantity");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("recipes");
};
