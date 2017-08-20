/**
 * DwellerController
 *
 * @description :: Server-side logic for managing dwellers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  /**
   * `DwellerController.create()`
   */
  create: function (req, res) {
    Dweller
      .create(req.body).exec(function (err, dweller) {
      if (err) {
        return res.json(err.status, {err: err});
      }
      if (dweller) {
        // NOTE: payload is { id: user.id}
        res.json(200, {dweller: dweller});
      }
    });
  },


  /**
   * `DwellerController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `DwellerController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  },


  /**
   * `DwellerController.find()`
   */
  find: function (req, res) {
    Dweller
      .findOne(req.param('id'))
      // .populate('address')
      .exec(function (err, dweller) {
        if (err) {
          return res.json(err.status, {err: err});
        }
        if (dweller) {
          // NOTE: payload is { id: user.id}
          res.json(200, {dweller: dweller});
        }
      });
  },


  /**
   * `DwellerController.findall()`
   */
  findAll: function (req, res) {
    Dweller
      .find({})
      // .populate('address')
      .exec(function (err, dwellers) {
        if (err) {
          return res.json(err.status, {err: err});
        }
        if (dwellers) {
          // NOTE: payload is { id: user.id}
          res.json(200, dwellers);
        }
      });
  }
};

