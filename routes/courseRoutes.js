const express = require('express');
const router = express.Router();
const { addCourse, getCourse } = require('../controllers/courseController');
const courseSchema = require('../models/courseSchema');
const multer = require('multer');
const path = require('path');

// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // folder to store uploaded images
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage });
  
// Route to add course with image
router.post('/courses/add', upload.single('image'), async (req, res) => {
    try {
      const { title, description, duration, content, trainingLevel, overview } = req.body;
      const image = req.file?.filename;
  
      if (!image) {
        return res.status(400).json({ message: 'Image is required' });
      }
  
      const newCourse = new courseSchema({
        title,
        description,
        duration,
        image,
        content,
        trainingLevel,
        overview,

      });
  
      await newCourse.save();
      console.log(newCourse);
  
      res.status(201).json({ message: 'Course added successfully', course: newCourse });
    } catch (err) {
      console.error('Error adding course:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// Get all courses
router.get('/', getCourse);

// Get all course titles
router.get('/titles', async (req, res) => {
    try {
      const courses = await courseSchema.find({}, 'title'); // only fetch titles
      res.json(courses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get course content by ID
  router.get('/courses/:id', async (req, res) => {
    try {
      const course = await courseSchema.findById(req.params.id);
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
