'use strict';
const Week = require('./week');

module.exports = (sequelize, DataTypes) => {
  const Mod = sequelize.define('Mod', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [2,30]
      }
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  Mod.associate = function(models) {
    Mod.hasMany(models.User, {foreignKey: 'modId'})
    Mod.hasMany(models.Project, {foreignKey: 'modId', onDelete: 'cascade', hooks: true})
    Mod.hasMany(models.Week, {foreignKey: 'modId', onDelete: 'cascade', hooks: true})
  };
  return Mod;
};