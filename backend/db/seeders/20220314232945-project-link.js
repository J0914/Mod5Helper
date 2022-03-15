'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ProjectLinks', [
        {
        projectId: 1,
        title: 'test link',
        url: 'https://www.google.com/',
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ProjectLinks', null, {});

  }
};
