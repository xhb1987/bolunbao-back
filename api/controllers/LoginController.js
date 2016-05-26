/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res, next) {
		var username = req.param('username');
		var password = req.param('password');
		globalServices.AV.User.logIn(username, password).then(function() {
			// res.json('login success');
			res.json(200, {status: 'ok'})
			// res.json('login success');
		}, function () {
			res.json(600, {status: 'fail'});
		});
	},

	logout: function (req, res, next) {
		globalServices.AV.User.logOut();
		res.json(200, {status: 'ok'});
	}
};

