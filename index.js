const express = require("express");
const helmet = require("helmet");

const recipes = require("./data/db-model");

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());

server.get("/api/recipes", (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      next(error);
    });
});

server.get("/api/recipes/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  recipes
    .getShoppingList(id)
    .then(list => {
      res.json(list);
    })
    .catch(error => {
      next(error);
    });
});

server.get("/api/recipes/:id/instructions", (req, res) => {
  const { id } = req.params;
  recipes
    .getInstructions(id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(error => {
      next(error);
    });
});

server.use((req, res) => {
  res.status(404).json({
    message: "Route was not found"
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An internal error occurred, please try again later"
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
