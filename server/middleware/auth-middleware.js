const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            
            next();
        }
        catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Token not found");
    }
}

// Admin authorization middleware
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403);
        throw new Error('Not authorized as admin');
    }
}

module.exports = { protect, admin }