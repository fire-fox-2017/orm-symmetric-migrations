'use strict'

const repl = require('repl');
//write your code here
let replServer = repl.start({
    prompt: '> '
});

let db = require('./models')

let getFullNameStudent = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getFullName());
            })
        })
}

let getAgeStudent = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getAge());
            })
        })
}

let getAllDataStudent = () => {
    db.Student.getAllData(function(students) {
        students.forEach(function(student) {
            console.log(student.id);
            console.log(student.first_name);
            console.log(student.last_name);
            console.log(student.name);
        })
    })
}

let data = {
    first_name: 'Uci',
    last_name: 'Lubis',
    birth_date: '1922-09-12',
    email: 'uci@gmail.com',
    height: '170',
    phone: '082272194539'
}

function addStudent() {
    db.Student.findAll()
        .then(students => {
            console.log(students);
            students.forEach(student => {

                db.Student.update({
                        name: student.getFullName()
                    }, {
                        where: {
                            id: student.id
                        }
                    })
                    .then((data) => {
                        console.log(`Update has successful: ${data}`);
                    })
            })
        })
}

replServer.context.getFullNameStudent = getFullNameStudent
replServer.context.getAgeStudent = getAgeStudent
replServer.context.getAllDataStudent = getAllDataStudent
replServer.context.addStudent = addStudent