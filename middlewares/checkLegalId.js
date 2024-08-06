function checkLegalId(req, res, next) {
    const {id} = req.params;
    const parsedId = parseInt(id, 10);
    if ( !parsedId || parsedId < 0 ) {
        return res.status(400).send('Invalid ID');
    }
    next();
}

module.exports = checkLegalId;