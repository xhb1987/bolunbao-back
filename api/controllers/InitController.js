/**
 * InitController
 *
 * @description :: Server-side logic for managing inits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    init: function(req, res, next) {
        
        res.json('im init');
    }
};
