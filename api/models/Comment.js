const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userNickname: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

const seedComments = async () => {
  await Comment.sync({ force: true });
  await Comment.create({
    text: "fuck this was delicious",
    userNickname: "rbccbeard",
    userId: 0,
    recipeId: 2,
    date: "Wednesday, Jan 26, 2022",
  }).catch((e) => {
    console.error(e);
  });
};

seedComments();

module.exports = { Comment };
