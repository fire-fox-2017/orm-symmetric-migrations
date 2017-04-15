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
       queryInterface.addColumn('Students','height',{type: Sequelize.INTEGER}),
       queryInterface.addColumn('Students','phone',{type: Sequelize.STRING}),
       queryInterface.addColumn('Students','email',{type: Sequelize.STRING})
     ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn({tableName:'Student', schema:'public'}, 'Height'),
      queryInterface.removeColumn({tableName:'Student', schema:'public'}, 'Phone'),
      queryInterface.removeColumn({tableName:'Student', schema:'public'}, 'Email')
    ]
  }
};
