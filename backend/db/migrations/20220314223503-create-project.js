'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weekId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dayId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      starter: {
        type: Sequelize.TEXT,
        validate: {isUrl: true},
        allowNull: true
      },
      curriculum: {
        type: Sequelize.TEXT,
        validate: {isUrl: true},
        allowNull: true
      },
      solution: {
        type: Sequelize.TEXT,
        validate: {isUrl: true},
        allowNull: true
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};