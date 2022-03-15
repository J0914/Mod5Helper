'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectWalkthru = sequelize.define('ProjectWalkthru', {
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lecturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {});
  ProjectWalkthru.associate = function(models) {
    // associations can be defined here
  };
  return ProjectWalkthru;
};