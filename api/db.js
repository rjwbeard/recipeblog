const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host: process.env.HOST,
  dialect: "postgres",
});

try {
  sequelize.authenticate().then(() => {
    console.log("database connected");
  });
} catch (error) {
  console.error("unable to connect to db", error);
}

module.exports = sequelize;
