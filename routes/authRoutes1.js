// authRoutes.js
const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware1');

// Login endpoint with validation
router.post('/login', validationMiddleware, (req, res) => {
  // Implement login logic here
  res.send('Login endpoint');
});

// Register endpoint with validation
router.post('/register', validationMiddleware, (req, res) => {
  // Implement registration logic here
  res.send('Register endpoint');
});

module.exports = router;
