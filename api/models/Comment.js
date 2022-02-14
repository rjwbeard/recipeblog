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
    commentText: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userNickname: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    commentRecipeId: {
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
    commentText: "fuck this was delicious",
    userNickname: "rbccbeard",
    userId: "google-oauth2|101993076495107373546",
    commentRecipeId: 2,
    date: "Wednesday, Jan 26, 2022",
  }).catch((e) => {
    console.error(e);
  });
};

seedComments();

module.exports = { Comment };
