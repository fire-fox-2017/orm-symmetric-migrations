'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    fullname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData : function (callback) {
        Student.findAll()
               .then((Students)=>{
                 Students.forEach((student)=>{
                   student.setDataValue('fullname', student.getFullName())
                 })
                 callback(Students)
               })
      }
    },
    instanceMethods: {
      getFullName : function(){
        return `${this.firstname} ${this.lastname}`
      }
    }
  });
  return Student;
};