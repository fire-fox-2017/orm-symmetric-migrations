'use strict';
module.exports = function(sequelize, DataTypes) {
  var addColumnName = sequelize.define('addColumnName', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return addColumnName;
};