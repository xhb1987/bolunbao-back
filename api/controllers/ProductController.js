/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var product = new globalServices.Product();

module.exports = {
	index: function (req, res, next) {
        var limit = req.param.limit || 10;
        var query = new globalServices.AV.Query('Products');
        query.limit(limit);
		query.find().then(function (products) {
            res.json(products)
		}, function (err) {
			res.json(600, {status: 'fail', message: 'products query fail: ' + err.message});
		})
	},

    create: function(req, res, next) {
    	var query = new globalServices.AV.Query('Products');
        var name = req.param('productName'),
            desc = req.param('productDesc');

        if (!name || !desc) {
        	res.json({status: 'fail', message:'product name or discription should not be empty'});
        }

        product.set('ProductName', name);
        product.set('ProductDesc', desc);

        product.save().then(function (prod) {
        	res.json(200, {status: 'ok'});
        }, function (err) {
        	res.json(600, {status: 'fail', error: 'product create fail: ' + err.message});
        });
    },

    update: function(req, res, next) {
        var query = new globalServices.AV.Query('Products');
        var id = req.param('id');

        console.log(id);
        res.json(id);
    },

    find: function(req, res, next) {
        var query = new globalServices.AV.Query('Products');
        var id = req.param('id');
        query.get(id).then(function(product) {
        	console.log(product);
        	res.view('product/product-detail', {productData: product})
        }, function (error) {
        	res.json(600, {status: 'fail', message: 'product find error: ' + error.message})
        })
    },

    delete: function(req, res, next) {
        var query = new globalServices.AV.Query('Products');
    	var id = req.param('id');
        console.log(id);
        res.json(id);    	
    }
};
