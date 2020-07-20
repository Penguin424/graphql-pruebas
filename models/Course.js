const mongoose = require('mongoose');
const Student = require('../models/Student.js');

const Schema = mongoose.Schema;

let courseSchema = new Schema({
    title: {
        type: String
    },
    teacher: {
        type: String
    },
    description:{
        type: String
    },
    topic:{
        type: String
    },
    students:{
        type: [{type: Schema.Types.ObjectId, ref: 'students'}],
        required: false
        
    }
});

module.exports = mongoose.model('courses', courseSchema);