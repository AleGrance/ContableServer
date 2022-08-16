"use strict";

module.exports = function (app) {
  var Cabecera_compra = app.db.models.Cabecera_compra;
  var Contribuyente = app.db.models.Contribuyente;
  var Proveedor = app.db.models.Proveedor;
  app.route('/cabecera_compra').get(function (req, res) {
    Cabecera_compra.findAll({
      order: [['id_cabecera_compra', 'ASC']]
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    Cabecera_compra.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      return res.json(error.errors[0].message);
    });
  });
  app.route('/cabecera_compra/:id').get(function (req, res) {
    Cabecera_compra.findOne({
      where: {
        id_cabecera_compra: req.params.id
      },
      include: [{
        model: Contribuyente
      }]
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Cabecera_compra.update(req.body, {
      where: {
        id_cabecera_compra: req.params.id
      }
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      return res.json(error.errors[0].message);
    });
  })["delete"](function (req, res) {
    console.log(req.params);
    Cabecera_compra.destroy({
      where: {
        id_cabecera_compra: req.params.id
      }
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/cabecera_compra/contribuyente/:id').get(function (req, res) {
    Cabecera_compra.findAll({
      where: {
        ContribuyenteIdContribuyente: req.params.id
      },
      include: [{
        model: Proveedor
      }]
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  });
};