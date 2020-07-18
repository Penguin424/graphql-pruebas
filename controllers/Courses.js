const Course = require('../Schemas/Course.js');

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
  
    }
}

module.exports = {controllerC};