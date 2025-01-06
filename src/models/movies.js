const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");

const Movie = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plot: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    starring: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    creators: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    directors: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    writers: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    producers: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    dop: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    music: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    genre: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tabaleName: "movies",
    timestamps: true,
  }
);

module.exports = Movie;
