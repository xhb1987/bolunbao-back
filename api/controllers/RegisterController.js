/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function(req, res, next) {
        var username = req.body.params.username,
            password = req.body.params.password,
            email = 'email@text.come',
            phone = username;

        var user = new globalServices.AV.User();
        user.set('username', username);
        user.set('password', password);
        user.set('email', email);
        user.set('phone', phone);

        user.signUp().then(function(user) {
            res.json(user);
        }, function(error) {
            res.json(600, { status: 'fail', message: error.message });
        });
    }
};
