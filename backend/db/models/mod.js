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
    // associations can be defined here
  };
  return Mod;
};