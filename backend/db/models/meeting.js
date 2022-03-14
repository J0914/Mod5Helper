'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define('Meeting', {
    userId: DataTypes.INTEGER,
    attended: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {});
  Meeting.associate = function(models) {
    // associations can be defined here
  };
  return Meeting;
};