/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	register: function (req, res, next) {
		var username = req.param('username'),
			password = req.param('password'),
			email = req.param('email'),
			phone = req.param('phone');

		var user = new globalServices.AV.User();
		user.set('username', username);
		user.set('password', password);
		user.set('email', email);
		user.set('phone', phone);

		user.signUp().then(function(user) {
			console.log(user);
			res.json('register success');
		}, function (error) {
			res.json('register fails: ' + error.code + ' ' + error.message);
		});
	}
};

