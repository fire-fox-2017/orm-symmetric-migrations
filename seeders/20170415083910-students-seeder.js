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
      first_name: 'John',
      last_name: 'Doe',
      birth_date: '1970-12-08',
      height: 180,
      email: "john_doe@people.com",
      phone: "12345678910",
      createdAt: Date.now(),
      updatedAt: Date.now()},
      {
        first_name: 'Jane',
        last_name: 'Doe',
        birth_date: '1973-02-18',
        height: 168,
        email: "jane_doe@people.com",
        phone: "12398765432",
        createdAt: Date.now(),
        updatedAt: Date.now()}
      ]);

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
