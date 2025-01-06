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
      type: DataTypes.STRING,
      allowNull: true,
    },
    creators: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    directors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    writers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    producers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dop: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    music: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tabaleName: "movies",
    timestamps: true,
  }
);

module.exports = Movie;
