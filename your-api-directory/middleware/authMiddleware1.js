// authMiddleware.js
const authMiddleware1 = (req, res, next) => {
    // Implement authentication logic here
    console.log('Authentication middleware executed');
    next();
  };
  
  module.exports = authMiddleware1;
  