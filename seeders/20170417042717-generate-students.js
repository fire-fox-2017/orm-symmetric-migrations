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
      return queryInterface.bulkInsert('Students', 
        [
          {first_name: "David", last_name: "Johnson", birthdate: "1990-01-02", email: "dj@cards.com", height: 180, phone: "1234567890", createdAt: new Date(), updatedAt: new Date()},
          {first_name: "Jamie", last_name: "Lamb", birthdate: "1991-01-02", email: "lamb@b.com", height: 180, phone: "1234567890", createdAt: new Date(), updatedAt: new Date()},
          {first_name: "Ben", last_name: "Roth", birthdate: "1988-03-14", email: "roth@steelers.com", height: 180, phone: "1234567890", createdAt: new Date(), updatedAt: new Date()},
          {first_name: "Brandin", last_name: "Cook", birthdate: "1991-11-20", email: "cook@saints.com", height: 180, phone: "1234567890", createdAt: new Date(), updatedAt: new Date()}
        ], 
        {});


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
