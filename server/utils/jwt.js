const jwt = require("jsonwebtoken")

const generateToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = { generateToken }