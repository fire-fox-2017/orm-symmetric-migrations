'use strict';

let db = require('../models')

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return new Promise((res, rej) => {
            db.User.findAll()
                .then(users => {
                    let promise = users.map(user => {
                        return new Promise((res, rej) => {
                            db.User.update({first_name: user.first_name +' '+user.last_name}, {where: {id: user.id}})
                                .then((data) => {
                                    console.log(`Update has successful: ${data}`);
                                    res(data)
                                })
                                .catch((err) => {
                                    console.log(err.message);
                                    rej(err)
                                })
                        })
                    })
                    Promise.all(promise).then(values => {
                        console.log(values);
                    });

                })
        })


    },


    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
