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
  }, {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  Day.associate = function(models) {
    Day.belongsTo(models.Week, {foreignKey: 'weekId'})
    Day.hasMany(models.DayLink, {foreignKey: 'dayId', onDelete: 'cascade', hooks: true})
    Day.hasMany(models.Project, {foreignKey: 'dayId', onDelete: 'cascade', hooks: true})
  };
  return Day;
};