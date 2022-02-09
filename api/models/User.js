const { DataTypes } = require("sequelize");

const defineUserModel = async (sequelize) => {
  const User = await sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userNickname: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      favoriteRecipes: {
        type: DataTypes.STRING(1000),
      },
    },
    {
      freezeTableName: true,
    }
  );

  await User.sync({ force: true });
  return User;
};

const seedUsers = async (model) => {
  await model
    .create({
      userNickname: "rbccbeard",
    })
    .catch((e) => {
      console.error(e);
    });
};

module.exports = { defineUserModel, seedUsers };
