'use strict';
module.exports = (sequelize, DataTypes) => {
  const DayLink = sequelize.define('DayLink', {
    dayId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  DayLink.associate = function(models) {
    // associations can be defined here
  };
  return DayLink;
};