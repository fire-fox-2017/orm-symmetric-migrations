'use strict';
module.exports = function(sequelize, DataTypes) {
  var removeColumnName = sequelize.define('removeColumnName', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return removeColumnName;
};