const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Course = require("./course.model");

const pdf = sequelize.define(
  "pdf",
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
    pdfUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "pdf",
  }
);

module.exports = pdf;
