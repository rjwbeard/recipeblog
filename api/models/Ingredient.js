const { DataTypes } = require("sequelize");

const defineIngredientModel = async (sequelize) => {
  const Ingredient = await sequelize.define(
    "Ingredient",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      recipeId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  await Ingredient.sync({ force: true });
  return Ingredient;
};

const seedIngredients = async (model) => {
  await model
    .create({
      recipeId: 0,
      name: "butter",
    })
    .catch((e) => {
      console.error(e);
    });
};
module.exports = { defineIngredientModel, seedIngredients };
