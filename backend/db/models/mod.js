'use strict';
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
  }, {});
  Mod.associate = function(models) {
    Mod.hasMany(models.User, {foreignKey: 'modId'})
    Mod.hasMany(models.Project, {foreignKey: 'modId'})
    Mod.hasMany(models.Week, {foreignKey: 'modId'})
  };
  return Mod;
};