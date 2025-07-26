const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Admin: Add Course
router.post('/add', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ msg: 'Course added' });
});

// Get All Courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
