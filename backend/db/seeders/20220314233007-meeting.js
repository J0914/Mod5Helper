'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Meetings', [
        {
        userId: 1,
        attending: null,
        notes: null,
        date: new Date(),
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Meetings', null, {});
  }
};
