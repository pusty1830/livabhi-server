const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const ContactUs = sequelize.define(
  "ContactUs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tabaleName: "contactus",
    timestamps: true,
  }
);

module.exports = ContactUs;
