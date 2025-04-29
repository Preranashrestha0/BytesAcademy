const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image:{
    type: String,
  },
  content: {
    type: String,
  },
  trainingLevel :{
    type: String,
  },
  overview : {
    type: String,
  }
});

module.exports = mongoose.model('Course', courseSchema);
