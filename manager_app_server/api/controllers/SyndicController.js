/**
 * SyndicController
 *
 * @description :: Server-side logic for managing syndics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `SyndicController.create()`
   */
  create: function (req, res) {

    var accountId = req.body.accountId;

    User.findOne(accountId).exec(function (err, user) {

      if (err) {
        return res.json(err.status, {err: err});
      }

      if (user) {
        var body = {
          account: user,
          condominiums: []
        }

        Syndic
          .create(body)
          .exec(function (err, syndic) {
          if (err) {
            return res.json(err.status, {err: err});
          }
          if (syndic) {
            // NOTE: payload is { id: user.id}
            return res.json(200, {syndic: syndic});
          }
        });
      } else {
        return res.json(404, {message: "User not found!"});
      }
    });
  },


  /**
   * `SyndicController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `SyndicController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  },


  /**
   * `SyndicController.find()`
   */
  find: function (req, res) {
    Syndic
      .findOne(req.param('id'))
      .populate('account')
      .exec(function (err, syndic) {
        if (err) {
          return res.json(err.status, {err: err});
        }
        if (syndic) {
          // NOTE: payload is { id: user.id}
          return res.json(200, {syndic: syndic});
        }
      });
  },


  /**
   * `SyndicController.findall()`
   */
  findAll: function (req, res) {
    Syndic
      .find({})
      .populate('account')
      .exec(function (err, trustees) {
        if (err) {
          return res.json(err.status, {err: err});
        }

        if (trustees) {
          return res.json(200, trustees);
        }
      });
  },

  findByUserId: function (req, res) {

    var accountId = req.param('id');
    var query = {};

    if (accountId) {
      query = {
        account : accountId
      }

      Syndic
        .findOne(query)
        .populate('account')
        .exec(function (err, syndic) {
          if (err) {
            return res.json(err.status, {err: err});
          }
          if (syndic) {
            return res.json(200, {syndic: syndic});
          } else {
            return res.json({
              status : 404,
              message : 'Not Found, Account doesn\'t exist'
            });
          }
        });
    } else {
      return res.json(404, {message: "Not found"});
    }
  }
};

