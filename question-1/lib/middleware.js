
const authorize = (req, res, next) => {
    const authorized = true;
    if (authorized) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};




module.exports = authorize;