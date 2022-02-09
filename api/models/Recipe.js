const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Recipe = sequelize.define(
  "Recipe",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    activeTime: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    totalTime: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    yield: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1000),
      // allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

const seedRecipes = async () => {
  await Recipe.sync({ force: true });
  await Recipe.create({
    name: "Pizza Dough",
    description:
      "Pizza is the perfect vehicle for leftovers- make this dough and pile it high with whatever's in the fridge!",
    ingredients: `
      - 1 T sugar
      - 2.25 T active dry yeast
      - 1.5 c water
      - 4 T olive oil
      - 4 c AP flour
      - 1 t salt
    `,
    activeTime: "20 min.",
    totalTime: "2 hours 30 min.",
    yield: "2 medium pies",
    method: `
      1. Preheat the oven to 550 degrees. Mix the water, yeast, and sugar in a small bowl. Let it sit for 10 minutes or until frothy.
      2. While the yeast is blooming, mix all of the dry ingredients in a large bowl.
      3. Whisk the oil into the yeast once it has bloomed and add the wet ingredients to the dry.
      4. Knead the dough for 5-7 minutes until is tacky and smooth.
      5. Place the dough in a lightly greased bowl and place a plate on top. Let the dough rest in the refrigerator for 2-3 hours.
      6. Turn the dough out onto a well-oiled baking sheet and divide it in two with a bench scraper.
      7. Stretch each half of dough to fit a half sheet pan and cover with desired toppings.
      8. Bake each pizza separately for 8-10 minutes or until golden brown.
      9. Wait a few minutes before slicing!
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Mushroom Pot Pie",
    description:
      "Skip the hassle and use prepared puff pastry for the crust of this super savory pie.",
    ingredients: "",
    activeTime: "40 min.",
    totalTime: "90 min.",
    yield: "6 servings",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/6605636/pexels-photo-6605636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Fresh Pita",
    description: "Soft pitas so fluffy you could take a nap on them :)",
    ingredients: "",
    activeTime: "40 min.",
    totalTime: "2 hours",
    yield: "8 pitas",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/6419753/pexels-photo-6419753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Maple Mustard Dressing",
    description:
      "The secret to this dijon dressing is a splash of sweet pickle brine :)",
    ingredients: "",
    activeTime: "10 min.",
    totalTime: "10 min.",
    yield: "8oz",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/3535391/pexels-photo-3535391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Kale + Bean Soup",
    description:
      "Our favorite soup! Make a big batch and freeze some for an easy meal down the road.",
    ingredients: "",
    activeTime: "25 min.",
    totalTime: "1 hour",
    yield: "4 quarts",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Veggie Burgers",
    description: "Easy and filling weeknight dinner :)",
    ingredients: "",
    activeTime: "15 min.",
    totalTime: "30 min.",
    yield: "6 servings",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Chocolate Chip Cookies",
    description: "Salty, chewy, and nutty!",
    ingredients: "",
    activeTime: "35 min.",
    totalTime: "4 hours",
    yield: "2 dozen",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/8456501/pexels-photo-8456501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Sourdough Pancakes",
    description: "These pancakes are light, tangy, and not-too-sweet!",
    ingredients: "",
    activeTime: "15 min.",
    totalTime: "30 min.",
    yield: "4 servings",
    method: "",
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });
};

seedRecipes();

module.exports = { Recipe };
