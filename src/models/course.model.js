const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const Video = require("./video.model");
const Audio = require("./audio.model");
const Pdf = require("./pdf.model");
const comment = require("./comment.model");

const course = sequelize.define(
  "course",
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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    courseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "course",
    timeStamps: true,
  }
);

course.hasOne(Video, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
});
course.hasOne(Audio, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
});
course.hasOne(Pdf, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
});
course.hasMany(comment, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
});

module.exports = course;
