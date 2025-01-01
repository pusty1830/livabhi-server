const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const portfolioContact = sequelize.define(
  "portfolioContact",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "portfoliContact",
    timestamps: true,
  }
);

module.exports = portfolioContact;
