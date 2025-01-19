const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
    })
}

module.exports = { errorHandler };