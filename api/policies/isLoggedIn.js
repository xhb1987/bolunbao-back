module.exports = function isLoggedIn(req, res, next) {

    var currentUser = globalServices.AV.User.current();
    if (!currentUser) {
        return res.json(403, { status: 'failse', message: 'please login first' });
    }

    next();
};
