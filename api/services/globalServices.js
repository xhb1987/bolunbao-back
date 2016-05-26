/**
 * Global Services
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	AV: sails.config.leanCloud.AV,
	Product: sails.config.leanCloud.AV.Object.extend('Products')
};

