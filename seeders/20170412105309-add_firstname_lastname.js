'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      firstname : 'John',
      lastname : 'Doe',
      gender : 'laki',
      birthday : '1991-02-12'
    },
    {
      firstname : 'Bill',
      lastname : 'Koll',
      gender : 'laki',
      birthday : '1989-08-01'
    },
    {
      firstname : 'Edim',
      lastname : 'War',
      gender : 'laki',
      birthday : '1990-05-10'
    },
    {
      firstname : 'Uci',
      lastname : 'Ha',
      gender : 'laki',
      birthday : '1995-01-01'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Student', null, {});
  }
};
