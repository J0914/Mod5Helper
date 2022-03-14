'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      fname: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      lname: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      photo: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {isUrl: true}
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
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
    return queryInterface.dropTable('Users');
  }
};