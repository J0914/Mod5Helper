'use strict';
module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define('Day', {
    weekId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Day.associate = function(models) {
    // associations can be defined here
  };
  return Day;
};