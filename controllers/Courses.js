const Course = require('../schemas/Course.js');

let controllerC = 
{
    getCourses: async() => {

        try 
        {
          let courses = await Course.find({});
          return courses;  
        } 
        catch(error) 
        {
          return error;
        }
        
    },
    getCourse: async(root, args) => {
  
        let course = await Course.findById(args.id);
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
        let   
      } 
      catch (error)
      {
        
      }
    }
}

module.exports = {controllerC};