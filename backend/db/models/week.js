'use strict';
module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define('Week', {
    modId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2,30]
      }
    },
  }, {});
  Week.associate = function(models) {
    Week.belongsTo(models.Mod, {foreignKey: 'modId'})
    Week.hasMany(models.Day, {foreignKey: 'weekId'})
    Week.hasMany(models.Project, {foreignKey: 'weekId'})
  };
  return Week;
};