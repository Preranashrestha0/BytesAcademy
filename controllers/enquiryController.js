const enquirySchema = require("../models/enquirySchema");

exports.sendEnquiry = async (req, res) =>{
    try{
        const {
            name, email, message, phone, AcademicStatus, InterestedCourse, SchoolName
        } = req.body;
        const enquiry = new enquirySchema ({name, email, message, phone, AcademicStatus, InterestedCourse, SchoolName});
        await enquiry.save();
        res.status(201).json({ success: true, message: 'Enquiry sent!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
};