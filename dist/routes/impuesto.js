"use strict";

module.exports = function (app) {
  var Impuesto = app.db.models.Impuesto;
  app.route('/impuesto').get(function (req, res) {
    Impuesto.findAll().then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    Impuesto.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      return res.json(error.errors);
    });
  });
  app.route('/impuesto/:id').get(function (req, res) {
    Impuesto.findOne({
      where: {
        id_impuesto: req.params.id
      }
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Impuesto.update(req.body, {
      where: {
        id_impuesto: req.params.id
      }
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    console.log(req.params);
    Impuesto.destroy({
      where: {
        id_impuesto: req.params.id
      }
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
};