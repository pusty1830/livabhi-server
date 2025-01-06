const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Course = require("./course.model");

const video = sequelize.define("Video", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = video;
