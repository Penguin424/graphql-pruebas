const Course = require('../models/Course.js');

let controllerC = 
{
    getCourses: async() => {

        try 
        {
          let courses = await Course.find({}).populate({
            path: 'students'            
          });
          return courses;  
        } 
        catch(error) 
        {
          return error;
        }
        
    },
    getCourse: async(root, args) => {
  
        let course = await Course.findById(args.id).populate({
          path: 'students'
        });
        return course;
  
    },
    createCourse: async(root, { input }) => {

      try 
      {
        let course = new Course(input);
        let courseDB = await course.save();

        return courseDB;
      }
      catch(error) 
      {
        console.log(error);
      }
      
    },
    editCourse: async(root, {id, input}) => 
    {
      try 
      {
        let course = await Course.findByIdAndUpdate(id, input);
        let courseUPDATEDB = await course.save();

        return courseUPDATEDB
      } 
      catch (error)
      {
        console.log(error);
      }
    },
    addStudentAtCourse: async(root, {idCourse, idEstudent}) => {
      try 
      {
        let courseAddUpadte = await Course.findByIdAndUpdate(idCourse, {
          $push: {students: idEstudent}
        });
        let courseUPDATEDB = await courseAddUpadte.save();

        return courseUPDATEDB
      } 
      catch(error) 
      {
        console.log(error);
      }
    } 
}

module.exports = {controllerC};