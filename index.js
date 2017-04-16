"use strict"

let model = require('./models')

const repl = require('repl');

//Class Method
function showFullName(){
  model.Student.getAllData(function(students){
    students.forEach(function(student){
      console.log(student.dataValues.fullName)
    })
  })
}

function getFullName(){
  model.Student.findAll()
  .then((students)=>{
    students.forEach((student)=>{
      console.log(student.getFullName())
    })
  })
}

function getAge(){
  model.Student.findAll()
  .then((students)=>{
    students.forEach((student)=>{
      console.log(`${student.getFullName()} ${student.getAge()}`)
    })
  })
}

function updateName(){

}



let start = repl.start("> ")
start.context.showFullName = showFullName
start.context.getFullName = getFullName
start.context.getAge = getAge
start.context.updateName = updateName