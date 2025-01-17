const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Job = require("./job.model");

const JobApplication = sequelize.define(
  "job_application",
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
    // jobId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Job,
    //     key: "id",
    //   },
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expectedSalary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    coverLetter: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    resumeFilePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "job_application",
    timestamps: true,
  }
);

module.exports = JobApplication;
