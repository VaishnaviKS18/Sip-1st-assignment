// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authMiddleware1'); // Corrected path

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Application-level middleware for common functionalities
app.use((req, res, next) => {
  // Implement common functionalities here
  console.log('Common middleware executed');
  next();
});

// Router-level middleware for specific concerns
const blogRoutes = require('./routes/blogRoutes1');
const authRoutes = require('./routes/authRoutes1');

app.use('/api/auth', authRoutes);
app.use('/api/blogs', authMiddleware, blogRoutes); // Using authMiddleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
