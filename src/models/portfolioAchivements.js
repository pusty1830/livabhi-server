const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const portfolioAchivements = sequelize.define("portfolioAchivements", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  achievements: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  testimonies: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = portfolioAchivements;
