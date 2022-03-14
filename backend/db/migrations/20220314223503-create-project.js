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
        type: Sequelize.INTEGER
      },
      weekId: {
        type: Sequelize.INTEGER
      },
      dayId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      starter: {
        type: Sequelize.TEXT
      },
      curriculum: {
        type: Sequelize.TEXT
      },
      solution: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};