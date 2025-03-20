/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
module.exports.routes = {

  'GET /': { view: 'pages/homepage' },
  'GET /home': { view: 'pages/homepage' },
  'GET /alias': { view: 'pages/homepage' },
  'GET /portfolio': 'RedirectController.portfolio'
  'GET /tutorials': { view: 'pages/tutorials' },
  'GET /product': { view: 'pages/product' },
  'GET /cart': { view: 'pages/cart' },
  'GET /api/tutorials': 'TutorialsController.getTutorials'

  'GET /product/:pid': {
    controller: 'ProductController',
    action: 'getProduct',
    skipAssets: true
  },
  'GET /products/': {
    controller: 'ProductController',
    action: 'getProducts',
    skipAssets: true
  },

};

