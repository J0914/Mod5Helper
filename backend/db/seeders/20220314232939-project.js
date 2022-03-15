'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [
        {
        modId: 5,
        weekId: 1,
        dayId: 1,
        title: 'Test Project',
        starter: null,
        curriculum: null,
        solution: null,
        notes: 'test notes',
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};
