const enrollmentSchema = require("../models/enrollmentSchema");

exports.addEnrollment = async (req, res) =>{
    try{
        const {
            name, email, address, phone, AcademicStatus, InterestedCourse, SchoolName, gender
        } = req.body;
        // console.log('Received enrollment data:', formData);
        const enrollment = new enrollmentSchema ({name, email, address, phone, AcademicStatus, InterestedCourse, SchoolName, gender});
        await enrollment.save();
        res.status(201).json({ success: true, message: 'Enrollment added!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
};