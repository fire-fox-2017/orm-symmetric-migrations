'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return [
      queryInterface.removeColumn('students', 'first_name'),
      queryInterface.removeColumn('students', 'last_name')
    ];

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.addColumn('students','first_name',
      {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('students','last_name',
      {
        type: Sequelize.INTEGER
      })
    ];




  }
};
