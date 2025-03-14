/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    pid: { type: 'string', required: true},
    pName: { type: 'string', required: true},
    price: { type: 'float'},
    discription: { type: 'string'}
  },


  findProduct: async function (opts) {
    /*var product = await Products.find({ pid: opts });

    if (!product) {
      throw require('flaverr') ({
        message: `Cannot find product with id=${opts.id}`
      })
    } */
  }
};

