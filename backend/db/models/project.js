'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    modId: DataTypes.INTEGER,
    weekId: DataTypes.INTEGER,
    dayId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    starter: DataTypes.TEXT,
    curriculum: DataTypes.TEXT,
    solution: DataTypes.TEXT,
    notes: DataTypes.TEXT
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};