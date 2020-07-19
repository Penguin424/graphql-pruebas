'use strict'

const { controllerC } = require('../controllers/Courses.js');
const { controllerS } = require('../controllers/Students.js');

module.exports = {
  Query:
  {
    getCourses: controllerC.getCourses,
    getCourse: controllerC.getCourse,
    getStudents: controllerS.getStudents,
    getStudent: controllerS.getStudent,
  },
  Mutation:
  {
    createCourse: controllerC.createCourse,
    createStudent: controllerS.createStudent,
    editCourse: controllerC.editCourse,
    editStudent: controllerS.editStudent,  
  }
}
