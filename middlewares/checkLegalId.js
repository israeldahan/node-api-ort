function checkLegalId(req, res, next) {
    const {id} = req.params;
    if ( !id && id < 0 ) {
        return res.status(400).send('Invalid ID');
    }
    next();
}

module.exports = checkLegalId;