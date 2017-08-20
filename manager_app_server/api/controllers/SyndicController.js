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
    var responseObject = {};

    User.findOne(accountId).exec(function (err, user) {

      if (err) {
        responseObject = {
          status: MessageService.HTTP.SERVER_ERROR,
          message: MessageService.USER.ERROR_SEARCHING_USER,
          error: err
        };
        return res.serverError(responseObject);
      }

      if (user) {
        var body = {
          account: user
        };

        Syndic
          .create(body)
          .exec(function (err, syndic) {
          if (err) {
            responseObject = {
              status: MessageService.HTTP.SERVER_ERROR,
              message: MessageService.SYNDIC.ERROR_SEARCHING_SYNDIC,
              error: err
            };
            return res.serverError(responseObject);
          }
          if (syndic) {
            responseObject.status = MessageService.HTTP.OK;
            responseObject.syndic = syndic;
            return res.ok(responseObject);
          }
        });
      } else {
        responseObject = {
          status: MessageService.HTTP.NOT_FOUND,
          message: MessageService.USER.ERROR_NOT_FOUND,
          error: err
        };
        return res.notFound(responseObject);
      }
    });
  },


  /**
   * `SyndicController.update()`
   */
  update: function (req, res) {
    var responseObject = {};

    Syndic.findOne(req.param('id'), function (err, syndic) {

      if (err) {
        responseObject = {
          status: MessageService.HTTP.SERVER_ERROR,
          message: MessageService.SYNDIC.ERROR_SEARCHING_COLLECT,
          error: err
        };
        return res.serverError(responseObject);
      }

      if (!syndic) {

        responseObject = {
          status: MessageService.HTTP.NOT_FOUND,
          message: MessageService.SYNDIC.ERROR_NOT_FOUND
        };

        return res.notFound(responseObject);
      }

      Syndic.update(req.param('id'), req.params.all(), function (err) {
        if (err) {
          responseObject = {
            status: MessageService.HTTP.SERVER_ERROR,
            message: MessageService.SYNDIC.ERROR_UPDATING_COLLECT,
            err: err
          };
          return res.serverError(responseObject);
        }

        responseObject = {
          status: MessageService.HTTP.OK,
          syndic: syndic,
          message: MessageService.SYNDIC.UPDATED
        };

        return res.ok(responseObject);
      });

    });
  },


  /**
   * `SyndicController.destroy()`
   */
  destroy: function (req, res) {

    var responseObject = {};
    var syndicId = req.param('id');

    Syndic
      .findOne(syndicId)
      .exec(function (err, syndic) {
        if (err) {
          responseObject = {
            status: MessageService.HTTP.SERVER_ERROR,
            message: MessageService.SYNDIC.ERROR_SEARCHING_SYNDIC,
            error: err
          };
          return res.serverError(responseObject);
        }
        if (syndic) {
          Syndic.destroy(syndicId, function userDestroyed(err) {
            if (err) {
              responseObject = {
                status: MessageService.HTTP.SERVER_ERROR,
                message: MessageService.SYNDIC.ERROR_SEARCHING_SYNDIC,
                error: err
              };
              return res.serverError(responseObject);
            }
            else {
              responseObject = {
                status: MessageService.HTTP.OK,
                message: MessageService.SYNDIC.DELETED
              };
            }

            return res.ok(responseObject);
          });
        } else {
          responseObject = {
            status: MessageService.HTTP.NOT_FOUND,
            message: MessageService.SYNDIC.ERROR_NOT_FOUND
          };

          return res.notFound(responseObject);
        }
      });
  },


  /**
   * `SyndicController.find()`
   */
  find: function (req, res) {
    Syndic
      .findOne(req.param('id'))
      .populate('account')
      .populate('condominiums')
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
        .populate('condominiums')
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

