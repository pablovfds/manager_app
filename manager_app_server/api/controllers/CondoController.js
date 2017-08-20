/**
 * CondoController
 *
 * @description :: Server-side logic for managing condoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  /**
   * `CondoController.create()`
   */
  create: function (req, res) {

    var responseObject = {};

    Syndic.findOne(req.body.syndic, function (err, syndic) {

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

      Condo
        .create(req.body)
        .populate('address')
        .exec(function (err, condo) {
          if (err) {
            return res.json(err.status, {err: err});
          }

          if (condo) {
            syndic.condominiums.add(condo.id);
            syndic.save(function(err){
              if (err) {
                responseObject = {
                  status: MessageService.HTTP.SERVER_ERROR,
                  message: MessageService.SYNDIC.ERROR_SEARCHING_COLLECT,
                  error: err
                };
                return res.serverError(responseObject);
              }
              responseObject = {
                status: MessageService.HTTP.OK,
                condo: condo,
                message: MessageService.CONDO.CREATED
              };

              return res.ok(responseObject);
            });
          }
        });
    });
  },


  /**
   * `CondoController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `CondoController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  },


  /**
   * `CondoController.findOne()`
   */
  find: function (req, res) {
    Condo
      .findOne(req.param('id'))
      .populate('address')
      .exec(function (err, condo) {
        if (err) {
          return res.json(err.status, {err: err});
        }
        if (condo) {
          // NOTE: payload is { id: user.id}
          res.json(200, {condo: condo});
        }
      });
  },


  /**
   * `CondoController.find()`
   */
  findAll: function (req, res) {

    var userId = req.param("userid");
    var query = {};

    if (userId) {
      query = {
        syndic : userId
      }
    }

    Condo
      .find(query)
      .populate('address')
      .exec(function (err, condo) {
        if (err) {
          return res.json(err.status, {err: err});
        }

        if (condo) {
          res.json(200, condo);
        }
      });
  }

};

