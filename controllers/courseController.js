const courseSchema = require("../models/courseSchema");

// exports.addCourse =  async (req, res) => {
//   try {
//     const { title, description, duration } = req.body;
//     const newCourse = new courseSchema({ title, description, duration });
//     await newCourse.save();
//     res.status(201).json({ message: 'Course added successfully', course: newCourse });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// }

exports.getCourse = async (req, res) => {
    try {
      const courses = await courseSchema.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }