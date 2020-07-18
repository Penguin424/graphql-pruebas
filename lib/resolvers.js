'use strict'

const mongoose = require('mongoose');
const { controllerC } = require('../controllers/Courses.js');

module.exports = {
  Query:
  {
    getCourses: controllerC.getCourses,
    getCourse: controllerC.getCourse
  },
  Mutation:
  {
    
  }
}
