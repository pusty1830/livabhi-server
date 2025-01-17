const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const JobApplied = require("./jobapplication.model");

const JobPosting = sequelize.define(
  "JobPosting",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    responsibilities: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    qualifications: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    skills: {
      type: DataTypes.JSON, // Use JSON to store arrays
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    jobType: {
      type: DataTypes.ENUM("Full-time", "Part-time"),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "jobpostings",
    timestamps: true,
  }
);
JobPosting.hasMany(JobApplied, {
  foreignKey: "jobId",
  onDelete: "CASCADE",
});
module.exports = JobPosting;
