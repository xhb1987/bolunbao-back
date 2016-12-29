/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function(req, res, next) {
        var username = req.body.params.username;
        var password = req.body.params.password;

        globalServices.AV.User.logIn(username, password).then(function(user) {
            
            // var current = globalServices.AV.User.current();
            globalServices.currentUserList[user._sessionToken] = user;
            req.session.userId = user._sessionToken;
            res.cookie('current', user);
            res.cookie('token', user._sessionToken);
            res.json(user)
        }, function(error) {
            res.json(error.code, { status: 'fail', message: error.message });
        });
    },

    logout: function(req, res, next) {
        globalServices.AV.User.logOut();
        console.log('logout');
        res.json({ status: 'ok' });
    }
};
