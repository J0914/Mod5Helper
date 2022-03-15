'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        modId: 5,
        email: 'demo@user.io',
        fname: 'Peterson',
        lname: 'Hai',
        photo: 'https://cdn-icons-png.flaticon.com/512/5229/5229470.png',
        hashedPassword: bcrypt.hashSync('password')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@aa.io'] }
    }, {});
  }
};
