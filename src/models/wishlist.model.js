const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const Course = require("./course.model");

const Wishlist = sequelize.define(
  "Wishlist",
  {
    wishlist_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: true }
);

Wishlist.belongsTo(User, { foreignKey: "user_id" });
Wishlist.belongsTo(Course, { foreignKey: "course_id" });

module.exports = Wishlist;
