const express = require('express');
const { sendEnquiry } = require('../controllers/enquiryController');
const router = express.Router();

router.post('/enquiry', sendEnquiry);

router.post('/enquiries', (req, res) => {
    console.log(req.body);  
    res.status(200).json({ message: 'Enquiry received!' });
  });

module.exports = router;