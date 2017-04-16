'use strict';

let model = require('../models')


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
    return new Promise((resolve, reject)=>{
      model.Student.findAll()
      .then((students)=>{
        let promises = [];
        students.forEach((student)=>{
            let promise = student.updateAttributes({name: student.getFullName()})
            promises.push(promise);
        })

        Promise.all(promises)
          .then((data)=>{
            resolve(data);
          })
          .catch((err)=>{
            reject(err)
          })

      })
    })

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
