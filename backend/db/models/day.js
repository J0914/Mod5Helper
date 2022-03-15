'use strict';
module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define('Day', {
    weekId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len: [2, 30]
      }
    },
  }, {});
  Day.associate = function(models) {
    Day.belongsTo(models.Week, {foreignKey: 'weekId'})
    Day.hasMany(models.DayLink, {foreignKey: 'dayId'})
    Day.hasMany(models.Project, {foreignKey: 'dayId'})
  };
  return Day;
};