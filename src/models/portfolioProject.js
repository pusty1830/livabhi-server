// models/project.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const portfolioProject = sequelize.define(
  "portfolioProject",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true, // Assuming title is required
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, // Description can be nullable
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true, // You can change this to a DATE type if it's an actual date
    },
    collaborators: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    awards: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageFile: {
      type: DataTypes.STRING, // You can store the file path or URL if necessary
      allowNull: true,
    },
  },
  {
    tableName: "portfolioProject",
    timestamps: true,
  }
);

module.exports = portfolioProject;
