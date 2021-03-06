const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { Recipe } = require("./models/Recipe");
const { Comment } = require("./models/Comment");

app.get("/recipes/", async (req, res) => {
  await Recipe.findAll()
    .then((recipes) => res.json(recipes))
    .catch((e) => console.error(e));
});

app.get("/recipes/:id", async (req, res) => {
  await Recipe.findAll({ where: { id: req.params.id } })
    .then((recipes) => res.json(recipes))
    .catch((e) => console.error(e));
});

app.post("/recipes/add", async (req, res) => {
  await Recipe.create(
    {
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      activeTime: req.body.activeTime,
      totalTime: req.body.totalTime,
      yield: req.body.totalYield,
      method: req.body.method,
      notes: req.body.notes,
      image: req.body.image,
    },
    { isNewRecord: true }
  )
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((e) => {
      console.error(e);
    });
});

app.delete("/recipes/:id", async (req, res) => {
  await Recipe.findByPk(req.params.id)
    .then((data) => {
      if (!data) {
        return new Error("Data not found.");
      }
      return Recipe.destroy({ where: { id: req.params.id } });
    })
    .then(() => {
      console.log("Data destroyed.");
      res.status(200).json({ message: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Deleting data failed" });
    });
});

app.get("/comments", async (req, res) => {
  Comment.findAll().then((comments) => res.json(comments));
});

app.post("/comments/add", async (req, res) => {
  await Comment.create(
    {
      commentText: req.body.commentText,
      userNickname: req.body.userNickname,
      userId: req.body.userId,
      commentRecipeId: req.body.commentRecipeId,
      date: req.body.date,
    },
    { isNewRecord: true }
  )
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((e) => {
      console.error(e);
    });
});

app.listen(port, () => console.log(`listening to port ${port}!`));
