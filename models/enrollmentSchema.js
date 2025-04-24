const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,

    },
    phone:{
        type: Number,
        required: true
    },
    AcademicStatus:{
        type:String,
        required: true
    },
    InterestedCourse:{
        type: String,
        required: true
    },
    SchoolName: {
        type: String,
        required: true
    },
    gender:{
        type:String
    }
})
module.exports = mongoose.model('Enrollment', enrollmentSchema);