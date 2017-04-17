'use strict'

const repl = require('repl');

var db = require('./models');

let replServer = repl.start({prompt : '>'});

let insertStudent = (firstname, lastname, birthdate) => {
  db.Student.create({'firstname' : firstname,
                     'lastname' : lastname,
                     'birthdate' : birthdate})
  .then(student => {
    console.log(JSON.stringify(student.toJSON()), null, 2);
  })

  .catch(err => {
    console.log(err.message);
  })

  return 'Insert Student';
}

replServer.context.insertStudent = insertStudent;
