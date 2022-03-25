'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectWalkthru = sequelize.define('ProjectWalkthru', {
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  ProjectWalkthru.associate = function(models) {
    ProjectWalkthru.belongsTo(models.Project, {foreignKey: 'projectId'})
    ProjectWalkthru.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return ProjectWalkthru;
};