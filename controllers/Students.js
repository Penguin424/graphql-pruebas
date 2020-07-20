const Student = require('../models/Student.js');

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
    },
    editStudent: async(root, {id, input}) => 
    {
        try 
        {
            let student = await Student.findByIdAndUpdate(id, input);
            let studentUPDATEDB = await student.save();
            
            return studentUPDATEDB;
        } 
        catch(error) 
        {
            console.log(error);
        }
    }

}

module.exports = {controllerS};