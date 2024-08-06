function Logger(req, res, next) {
    console.log(`API Request: ${req.method} - ${req.originalUrl} ${new Date()}` );
    next();
}

module.exports = Logger;