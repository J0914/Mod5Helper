'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectLink = sequelize.define('ProjectLink', {
    projectId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.TEXT
  }, {});
  ProjectLink.associate = function(models) {
    // associations can be defined here
  };
  return ProjectLink;
};