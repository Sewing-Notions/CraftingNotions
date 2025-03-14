/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jsonfile = require('jsonfile');

module.exports = {
    getProduct: function (req, res) {
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
        });
    },

    getProducts: function (req, res) {
        var file = './assets/json/products.json';

        jsonfile.readFile(file, function(err, obj) {
            if (err) {
                res.json({err: err});
            }
            console.dir(obj);
            var prods = ``;

            obj.forEach(function(prod) {
                prods += `
                <div class="product-thumnail">
                <h3>${prod.pName}</h3>
                <img src="${prod.image}" alt="${prod.pName}">
                <a href="/product/${prod.pid}">Buy Now</a>  <a href="">Add to Cart</a>
                </div>`;
            });

            return res.view('pages/browse', {products: prods});
        });
    }
};

