'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define('Meeting', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attending: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Meeting.associate = function(models) {
    // associations can be defined here
  };
  return Meeting;
};