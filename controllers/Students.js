const Student = require('../schemas/Student.js');

let controllerS = 
{

    getStudents: async() => 
    {
        try 
        {
            let students = await Student.find({});
            return students
        } 
        catch(error) 
        {
            console.log(error);
        }
    },
    getStudent: async(root, {id}) => 
    {
        try 
        {
            let student = await Student.findById(id);
            return student;
        } 
        catch(error) 
        {
            console.log(error);
        }
    },
    createStudent: async(root, {input}) => 
    {
        try 
        {
            let student = new Student(input);
            let studentDB = await student.save();

            return studentDB
        } 
        catch(error)
        {
            console.log(error);
        }
    }

}

module.exports = {controllerS};