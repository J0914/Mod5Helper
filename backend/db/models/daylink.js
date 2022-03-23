'use strict';
module.exports = (sequelize, DataTypes) => {
  const DayLink = sequelize.define('DayLink', {
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isUrl: true}
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  DayLink.associate = function(models) {
    DayLink.belongsTo(models.Day, {foreignKey: 'dayId'})
  };
  return DayLink;
};