const asyncHandler = require('express-async-handler')
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

// SignUp controller
const signup = asyncHandler(async (req, res) => {

    // Find user by email
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exist")
    }

    // Create new user
    const user = await User.create(req.body);
    if (user) {
        // Generate token
        const token = generateToken(user._id, user.isAdmin);
        res.status(201).json({ user, token })
    } else {
        res.status(400);
        throw new Error("Invalid data")
    }
})

// SignIn controller
const signin = asyncHandler(async (req, res) => {

    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        rea.status(401);
        throw new Error('Invalid credentials')
    }

    // Check if password match
    const isMatch = await user.matchPassword(req.body.password)
    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = generateToken(user._id, user.isAdmin);

    res.json({ user, token })
})

module.exports = { signup, signin }