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
    Condo
      .create(req.body)
      .populate('address')
      .exec(function (err, condo) {
      if (err) {
        return res.json(err.status, {err: err});
      }

      if (condo) {
        res.json(200, {message: "Condo created successfuly!", condo: condo});
      }
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

