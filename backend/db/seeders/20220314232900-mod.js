'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Mods', [
        {
        title: 'Mod 1',
        },
        {
        title: 'Mod 2',
        },
        {
        title: 'Mod 3',
        },
        {
        title: 'Mod 4',
        },
        {
        title: 'Mod 5',
        },
        {
        title: 'Mod 6',
        },
        {
        title: 'Mod 7',
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Mods', null, {});
  }
};
