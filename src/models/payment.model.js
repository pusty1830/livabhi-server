const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Course = require("./course.model");
const User = require("./user.model");

const payment = sequelize.define(
  "payment1",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      // defaultValue: 1,
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "The Razorpay payment or transaction ID",
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "The UPI ID used for payment",
    },
    status: {
      type: DataTypes.ENUM("success", "failed", "pending"),
      allowNull: false,
      defaultValue: "pending",
      comment: "Payment transaction status",
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "The amount paid for the transaction",
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refereferences: {
        model: Course,
        key: "id",
      },
      comment: "Reference to the course being purchased",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      comment: "Reference to the user making the payment",
    },
  },
  {
    tableName: "payment1",
    timestamps: true,
  }
);

module.exports = payment;
