const express = require('express');
const { signup, signin } = require('../controllers/user-controller');
const { protect, admin } = require('../middleware/auth-middleware');
const route = express.Router();

// User SignUp and SignIn routes
route.post('/signup', signup);
route.post('/signin', signin);

// Protected route for admin
route.get('/admin', protect, admin, (req, res) => {
    res.json({message: "Welcome, admin!"});
})

module.exports = route