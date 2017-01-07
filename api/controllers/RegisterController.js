/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function(req, res, next) {
        var user = {}

        user.name = req.body.params.username,
        user.password = req.body.params.password,
        user.phone = req.body.params.username;
        user.role = req.body.params.role;
        
        User.create(user, function (user) {
            res.json(user);
        }, function (error) {
            res.json(error.code, { status: 'fail', message: error.message})
        });
    }
};
