const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

// User Signup Controller
const signup = asyncHandler(async (req, res) => {
    const { email, password, ...otherDetails } = req.body;

    // Check if the user already exists
    const isUserExists = await User.findOne({ email })
    if (isUserExists) {
        res.status(400)
        throw new Error('User already exists.')
    }

    // Create a new user
    const user = await User.create({ email, password, ...otherDetails })
    if (!user) {
        res.status(400);
        throw new Error('Invalid user data.')
    }

    // Generate a JWT token
    const token = generateToken(user._id, user.isAdmin)

    res.status(201).json({
        user: {
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            ...otherDetails,
        },
        token,
    })
})

// User Signin Controller
const signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email })
    if (!user) {
        res.status(401);
        throw new Error('Invalid credentials.')
    }

    // Validate the password
    const isPasswordMatch = await user.matchPassword(password)
    if (!isPasswordMatch) {
        res.status(401);
        throw new Error('Invalid credentials.')
    }

    // Generate a JWT token
    const token = generateToken(user._id, user.isAdmin)

    res.status(200).json({
        user: {
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        token,
    })
})

module.exports = { signup, signin }