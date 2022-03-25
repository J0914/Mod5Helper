'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ProjectWalkthrus', [
        {
        projectId: 1,
        userId: 1,
        duration: 30,
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ProjectWalkthrus', null, {});
  }
};
