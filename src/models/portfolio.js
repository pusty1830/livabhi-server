const portfolioProject = require("./portfolioProject");
const portfolioPhoto = require("./portfolioPhoto");
const portfolioAchivement = require("./portfolioAchivements");
const portfolioContact = require("./portfolioContact");

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");

const Portfolio = sequelize.define(
  "Portfolio",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tagline: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experienceOverview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    artistCategory: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Experience Fields
    experience: {
      type: DataTypes.JSON, // Store multiple experiences as an array of objects
      allowNull: true,
    },

    // Education Fields
    education: {
      type: DataTypes.JSON, // Store multiple education entries as an array of objects
      allowNull: true,
    },

    // Social Links Fields
    socialLinks: {
      type: DataTypes.JSON, // Store social links as an object
      allowNull: true,
    },
  },
  {
    tableName: "portfolio",
    timestamps: true,
  }
);

Portfolio.hasMany(portfolioProject, {
  foreignKey: "portfolioId",
  onDelete: "CASCADE",
});

Portfolio.hasMany(portfolioPhoto, {
  foreignKey: "portfolioId",
  onDelete: "CASCADE",
});

Portfolio.hasMany(portfolioAchivement, {
  foreignKey: "portfolioId",
  onDelete: "CASCADE",
});
Portfolio.hasMany(portfolioContact, {
  foreignKey: "portfolioId",
  onDelete: "CASCADE",
});

// Export the models
module.exports = Portfolio;
