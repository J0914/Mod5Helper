'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ProjectWalkthrus', [
        {
        projectId: 1,
        lecturer: 'Peterson Hai',
        duration: 30,
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ProjectWalkthrus', null, {});
  }
};
