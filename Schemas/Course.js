const mongoose = require('mongoose');

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
    }
});

module.exports = mongoose.model('courses', courseSchema);