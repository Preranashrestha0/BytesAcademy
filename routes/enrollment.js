const express = require('express');
const { addEnrollment } = require('../controllers/enrollmentController');
const router = express.Router();

router.post('/enrollment', addEnrollment);

// router.post('/enrollments', (req, res) => {
//     console.log(req.body);  
//     res.status(200).json({ message: 'Enquiry received!' });
//   });

module.exports = router;