/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getProduct: function (req, res) {
        const jsonfile = require('jsonfile');
        var file = './assets/json/products.json';

        jsonfile.readFile(file, function(err, obj) {
            if (err) {
                res.json({err: err});
            }            
            console.dir(obj);

            var pName = 'does not exist';
            var pInfo = 'does not exist';

            obj.forEach(function(prod) { 
                if (prod.pid == req.param('pid')) {
                    pName = prod.pName; pInfo = prod.discription;
                }
            });

            return res.view('pages/product', {productName: pName, productInfo: pInfo});
        })
    },

    product: function (req, res) {
        return res.view('pages/product', {productName: Product.findProduct(req), productInfo: req.param('pid')});
    } 
};

