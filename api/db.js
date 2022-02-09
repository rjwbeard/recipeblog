const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://pi:Lemon~Magician7~Batboy@localhost:5432/recipeblog",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate().then(() => {
    console.log("database connected");
  });
} catch (error) {
  console.error("unable to connect to db", error);
}

module.exports = sequelize;
