/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    product: function (req, res) {
        return res.view('pages/product', {productName: Product.findProduct(req), productInfo: req.param('pid')});
    }
};

