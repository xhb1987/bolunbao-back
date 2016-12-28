/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function(req, res, next) {
        // var username = req.body.params.username;
        // var password = req.body.params.password;
        // globalServices.AV.User.logIn(username, password).then(function(user) {
        //     res.json(user)
        // }, function(error) {
        //     res.json(600, { status: 'fail', message: error.message });
        // });
    },

    logout: function(req, res, next) {
        // globalServices.AV.User.logOut();
        // res.json(200, { status: 'ok' });
    }
};
