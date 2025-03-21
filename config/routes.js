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
  '/tutorials': { view: 'pages/tutorials' },
  '/product': { view: 'pages/product' },
  '/cart': { view: 'pages/cart'},
  'GET /api/tutorials': 'TutorialsController.getTutorials',
  'GET /peta-Portfolio': 'RedirectController.peta',
  'GET /kat-Portfolio': 'RedirectController.kat',
  'GET /sasha-Portfolio': 'RedirectController.sasha',

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

