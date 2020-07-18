const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let studentSchema = new Schema({
    name:{
        type: String,
        required: [true, "El parametro name es necesario"]
    },
    email:{
        type: String,
        required: [true, "El parametro email es necesario"]
    }
});

module.exports = mongoose.model('students', studentSchema);