'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectLink = sequelize.define('ProjectLink', {
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 30]
      }
    },
    url: {
      type: DataTypes.TEXT,
      validate: {isUrl: true},
      allowNull: false
    },
  }, {});
  ProjectLink.associate = function(models) {
    // associations can be defined here
  };
  return ProjectLink;
};