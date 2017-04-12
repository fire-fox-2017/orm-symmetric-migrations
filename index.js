'use strict'
const db = require('./models');
const repl = require('repl');
const replServer = repl.start('> ')


let getAll = ()=>{
  db.Student.findAll()
    .then((student)=>{
      console.log(student);
    })
}

let update = ()=>{
  db.Student.getAllData((data)=>{
    data.forEach((obj)=>{
      // console.log(obj.fullname);
      db.Student.update(
        {fullname: obj.fullname},
        {where: {id: obj.id}}
      )
      .then(()=>{
        console.log('Done');
      })
      .catch((err)=>{
        console.log(err.message);
      })
    })
  })
}

replServer.context.get = getAll
replServer.context.update = update