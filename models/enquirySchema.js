const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
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
    }
})
module.exports = mongoose.model('Enquiry', enquirySchema);