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
    price: { type: 'float'}
  },

};

