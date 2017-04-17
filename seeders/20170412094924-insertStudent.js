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
    return queryInterface.bulkInsert('students',[{
      name: 'Dyan Kastutara',
      address: 'Jakarta Barat',
      birth_date: '1994-07-19',
      email:'dyankastutara19@gmail.com',
      phone:'+6285841410308',
      height: 160,
      createdAt:new Date(),
      updatedAt:new Date()
    }],{});
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
