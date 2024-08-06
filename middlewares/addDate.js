function AddDate(req, res, next) {
    req.requestTime = new Date();
    next();
}

module.exports = AddDate;