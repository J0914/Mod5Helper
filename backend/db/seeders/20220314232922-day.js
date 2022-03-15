'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Days', [
        {
        weekId: 1,
        title: 'Day 1'
        },
        {
        weekId: 1,
        title: 'Day 2'
        },
        {
        weekId: 1,
        title: 'Day 3'
        },
        {
        weekId: 1,
        title: 'Day 4'
        },
        {
        weekId: 1,
        title: 'Day 5'
        },
        {
        weekId: 2,
        title: 'Day 1'
        },
        {
        weekId: 2,
        title: 'Day 2'
        },
        {
        weekId: 2,
        title: 'Day 3'
        },
        {
        weekId: 2,
        title: 'Day 4'
        },
        {
        weekId: 2,
        title: 'Day 5'
        },
        {
        weekId: 3,
        title: 'Day 1'
        },
        {
        weekId: 3,
        title: 'Day 2'
        },
        {
        weekId: 3,
        title: 'Day 3'
        },
        {
        weekId: 3,
        title: 'Day 4'
        },
        {
        weekId: 3,
        title: 'Day 5'
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Days', null, {});
  }
};
