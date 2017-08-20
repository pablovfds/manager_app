/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  '/': { view: 'homepage' },

  // Endpoints //

  ////Auth
  'post /login': 'AuthController.login',
  '/logout': 'AuthController.logout',

  //// User
  'get /user': {
    controller	: 'UserController',
    action		: 'findAll'
  },
  'get /user/:id': {
    controller	: 'UserController',
    action		: 'find'
  },
  'post /signup': {
    controller	: 'UserController',
    action		: 'create'
  },
  'put /user/:id': {
    controller	: 'UserController',
    action		: 'update'
  },
  'delete /user/:id': {
    controller	: 'UserController',
    action		: 'destroy'
  },

  //// Condo
  'get /condo': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'CondoController',
    action		: 'findAll'
  },
  'get /condo/:id': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'CondoController',
    action		: 'find'
  },
  'post /condo': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'CondoController',
    action		: 'create'
  },
  'put /condo/:id': {
    controller	: 'CondoController',
    action		: 'update'
  },
  'delete /condo/:id': {
    controller	: 'CondoController',
    action		: 'destroy'
  },

  //// Syndic
  'get /syndic': {
    controller	: 'SyndicController',
    action		: 'findAll'
  },
  'get /syndic/account/:id': {
    controller	: 'SyndicController',
    action		: 'findByUserId'
  },
  'get /syndic/:id': {
    controller	: 'SyndicController',
    action		: 'find'
  },
  'post /syndic': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'SyndicController',
    action		: 'create'
  },
  'put /syndic/:id': {
    controller	: 'SyndicController',
    action		: 'update'
  },
  'delete /syndic/:id': {
    controller	: 'SyndicController',
    action		: 'destroy'
  },

  //// Dweller
  'get /dweller': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'DwellerController',
    action		: 'findAll'
  },
  'get /dweller/:id': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'DwellerController',
    action		: 'find'
  },
  'post /dweller': {
    cors: {
      origin: '*',
      headers: 'Content-Type, Authorization'
    },
    controller	: 'DwellerController',
    action		: 'create'
  },
  'put /dweller/:id': {
    controller	: 'DwellerController',
    action		: 'update'
  },
  'delete /dweller/:id': {
    controller	: 'DwellerController',
    action		: 'destroy'
  }
};
