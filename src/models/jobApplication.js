const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const Job = require("./job.model");

const JobApplication = sequelize.define(
  "JobApplication",
  {
    application_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    applied_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

JobApplication.belongsTo(User, { foreignKey: "applicant_id", as: "Applicant" });
JobApplication.belongsTo(Job, { foreignKey: "job_id" });
Job.hasMany(JobApplication, { foreignKey: "job_id" });
User.hasMany(JobApplication, { foreignKey: "applicant_id" });

module.exports = JobApplication;
