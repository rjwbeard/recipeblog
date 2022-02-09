const { DataTypes } = require("sequelize");

const defineMethodModel = async (sequelize) => {
  const Method = await sequelize.define(
    "Method",
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
      text: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  await Method.sync({ force: true });
  return Method;
};

const seedMethods = async (model) => {
  await model
    .create({
      recipeId: 1000,
      text: "mash the potatoes over and over and over again",
    })
    .catch((e) => {
      console.error(e);
    });
};

module.exports = { defineMethodModel, seedMethods };
