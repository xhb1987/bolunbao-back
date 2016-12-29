/**
 * Global Services
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // lean cloud
	AV: sails.config.leanCloud.AV,
	Product: sails.config.leanCloud.AV.Object.extend('Products'),

    // privilege enum
    privilegeEmun: {
        ADMIN: 'admin',
        CLIENT: 'client'
    },

    currentUserList: {}
};

