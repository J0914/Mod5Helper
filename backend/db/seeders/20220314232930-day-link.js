'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DayLinks', [
        {
        dayId: 1,
        title: 'testLink',
        url: 'https://www.google.com/',
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('DayLinks', null, {});
  }
};
