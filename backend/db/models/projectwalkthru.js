'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectWalkthru = sequelize.define('ProjectWalkthru', {
    projectId: DataTypes.INTEGER,
    lecturer: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {});
  ProjectWalkthru.associate = function(models) {
    // associations can be defined here
  };
  return ProjectWalkthru;
};