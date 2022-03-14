'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mod = sequelize.define('Mod', {
    title: DataTypes.STRING
  }, {});
  Mod.associate = function(models) {
    // associations can be defined here
  };
  return Mod;
};