require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware (ORDER MATTERS)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

const courses = [
  { id: 1, name: 'JavaScript Basics' },
  { id: 2, name: 'Node.js Fundamentals' },
  { id: 3, name: 'Express.js for Beginners' },
  { id: 4, name: 'MongoDB Crash Course' }
];

// Home
app.get('/', (req, res) => {
  res.send('ASELAMUALEYKUM!!');
});

// Get all courses
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Get course by ID
app.get('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);

  // 1️⃣ Validate first
  if (isNaN(courseId)) {
    return res.status(400).send('Invalid course ID');
  }

  const foundData = courses.find(c => c.id === courseId);

  if (!foundData) {
    return res.status(404).send('Course not found');
  }

  res.send(foundData);
});

// Create course
app.post('/api/courses', (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .send('Course name is required and must be at least 3 characters');
  }

  const course = {
    id: courses.length + 1,
    name
  };

  courses.push(course);
  res.status(201).send(course);
});

// Update course
app.put('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);

  if (isNaN(courseId)) {
    return res.status(400).send('Invalid course ID');
  }

  const foundData = courses.find(c => c.id === courseId);

  if (!foundData) {
    return res.status(404).send('Course not found');
  }

  const { name } = req.body;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .send('Course name is required and must be at least 3 characters');
  }

  foundData.name = name;
  res.send(foundData);
});


app.delete('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);

  if (isNaN(courseId)) {
    return res.status(400).send('Invalid course ID');
  }

  const courseIndex = courses.findIndex(c => c.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).send('Course not found');
  }

  const deletedCourse = courses.splice(courseIndex, 1)[0];
  res.send(deletedCourse);
});

// Start server
app.listen(port, () => {
  console.log('the server is running on port:' + port);
});
