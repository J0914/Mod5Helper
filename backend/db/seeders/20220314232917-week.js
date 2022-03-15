'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Weeks', [
        {
        modId: 5,
        title: 'Week 14'
        },
        {
        modId: 5,
        title: 'Week 15'
        },
        {
        modId: 5,
        title: 'Week 16'
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Weeks', null, {});
  }
};
