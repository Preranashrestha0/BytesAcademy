const express = require('express');
const connectDB = require('./config/db');
const enquiryRoutes = require('./routes/enquiryRoutes');
const enrollmentRoutes = require('./routes/enrollment');
const loginRoutes = require('./routes/loginRoutes');
const courseRoutes = require('./routes/courseRoutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', enquiryRoutes);
app.use('/api', enrollmentRoutes);  
app.use('/api', loginRoutes);
app.use('/api', courseRoutes);
// Static folder to serve images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
