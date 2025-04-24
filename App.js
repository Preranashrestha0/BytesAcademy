const express = require('express');
const connectDB = require('./config/db');
const enquiryRoutes = require('./routes/enquiryRoutes');
const enrollmentRoutes = require('./routes/enrollment');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', enquiryRoutes);
app.use('/api', enrollmentRoutes);   

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
