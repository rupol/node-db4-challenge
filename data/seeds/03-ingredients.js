exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "cup water" },
    { name: "cup white wine" },
    { name: "teaspoon yeast" },
    { name: "tablespoon olive oil" },
    { name: "teaspoon honey" },
    { name: "teaspoon salt" },
    { name: "g flour" },
    { name: "cup pinto beans" },
    { name: "stick dried oregano" },
    { name: "onion" },
    { name: "cup milk" },
    { name: "package macaroni" },
    { name: "cup grated cheese" },
    { name: "cup bread crumbs" }
  ]);
};
