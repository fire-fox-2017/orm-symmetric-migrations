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
      name: 'John Doe',
      birth_date: '1970-12-08',
      height: 180,
      email: "john_doe@people.com",
      phone: "12345678910",
      address: "somewhere",
      createdAt: Date.now(),
      updatedAt: Date.now()},
      {
        name: 'Jane Doe',
        birth_date: '1973-02-18',
        height: 168,
        email: "jane_doe@people.com",
        phone: "12398765432",
        address: "somewhere",
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
    return queryInterface.bulkDelete('Students', null);
  }
};
