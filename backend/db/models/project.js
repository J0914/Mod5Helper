'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    modId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weekId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 100]
      }
    },
    starter: {
      type: DataTypes.TEXT,
      validate: {isUrl: true},
      allowNull: true
    },
    curriculum: {
      type: DataTypes.TEXT,
      validate: {isUrl: true},
      allowNull: true
    },
    solution: {
      type: DataTypes.TEXT,
      validate: {isUrl: true},
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};