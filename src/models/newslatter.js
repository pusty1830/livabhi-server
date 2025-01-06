const Sequilize = require("sequelize");
const sequlizeConfig = require("../config/db.config");

const newslatter = sequlizeConfig.define("newslatter", {
  id: {
    type: Sequilize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
  },
});

module.exports = newslatter;
