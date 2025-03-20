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
            var pPurchase = '';
            var pImg = ``;

            obj.forEach(function(prod) { 
                if (prod.pid == req.param('pid')) {
                    pName = prod.pName; 
                    pPurchase = `$${prod.price}<br><button class="btn-toCart" onclick="quickAddToCart(${prod.pid})">Add to Cart</button>`;
                    pInfo = `${prod.description}`;
                    pImg += `<img src="${prod.image}" alt="${prod.pName}">`;
                }
            });

            return res.view('pages/product', {productName: pName, purchase: pPurchase, productInfo: pInfo, productImage: pImg});
        });
    },

    getProducts: function (req, res) { //${req.param('size')}
        var file = './assets/json/products.json';

        jsonfile.readFile(file, function(err, obj) {
            if (err) {
                res.json({err: err});
            }
            console.dir(obj);
            var prods = ``;

            obj.forEach(function(prod) {
                if (prod.pName.toLowerCase().includes(req.param('search')) || prod.description.toLowerCase().includes(req.param('search')) || req.param('search') == undefined) {
                    if (req.param('size') === prod.size || req.param('size') == undefined) {
                        prods += `
                        <div class="product-card">
                        <h2>${prod.pName}</h2>
                        <img src="${prod.image}" alt="${prod.pName}">                
                        <p>${prod.description}</p>
                        <p>Price: $${prod.price}</p>
                        <button onclick="location.href='/product/${prod.pid}'">View Details</button>
                        <button onclick="quickAddToCart(${prod.pid})">Add to Cart</button>
                        </div>`;
                    }                    
                }
            });

            return res.view('pages/browse', {products: prods});
        });
    }/*,

    searchProducts: function (req, res) {
        var file = './assets/json/products.json';

        jsonfile.readFile(file, function(err, obj) {
            if (err) {
                res.json({err: err});
            }
            console.dir(obj);
            var prods = ``;

            obj.forEach(function(prod) {
                if (prod.name.includes(req.param('search'))) {
                    prods += `
                    ${prod.pName}`;
                }
            });
            return res.view('pages/browse', {products: prods});
        })
    }*/
};

