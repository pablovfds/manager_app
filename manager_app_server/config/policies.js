
module.exports.policies = {

  '*': ['isAuthenticated'], // Everything resctricted here
  'UserController': {
    'create': true // We dont need authorization here, allowing public access
  },

  'AuthController': {
    '*': true // We dont need authorization here, allowing public access
  }
};
