"use strict";

module.exports = function (app) {
  var Condicion = app.db.models.Condicion;
  app.route('/condicion').get(function (req, res) {
    Condicion.findAll().then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    Condicion.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      return res.json(error.errors);
    });
  });
  app.route('/condicion/:id').get(function (req, res) {
    Condicion.findOne({
      where: {
        id_tipo_de_cobro: req.params.id
      }
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Condicion.update(req.body, {
      where: {
        id_tipo_de_cobro: req.params.id
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
    Condicion.destroy({
      where: {
        id_tipo_de_cobro: req.params.id
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