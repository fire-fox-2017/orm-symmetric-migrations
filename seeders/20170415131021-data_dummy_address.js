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
      birthdate: '03-08-1973',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'John Doe',
      address: 'Jakarta'
    },{
      birthdate: '03-08-1983',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Ilham H',
      address: 'Bali'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
