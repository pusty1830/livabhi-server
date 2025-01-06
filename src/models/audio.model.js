const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const audio = sequelize.define(
  "audio",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    audioUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "audio",
    timestamps: true,
  }
);

module.exports = audio;
