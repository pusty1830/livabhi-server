const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");

const NewsAndBlogs = sequelize.define(
  "NewsAndBlogs",
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
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("photo", "video"),
      allowNull: false,
    },
    newsType: {
      type: DataTypes.ENUM(
        "Hero Section",
        "Trending News",
        "News & Blogs",
        "Featured Post",
        "Recent Posts",
        "Trending News Video"
      ),
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "newsandblogs",
    timestamps: true,
  }
);

module.exports = NewsAndBlogs;
