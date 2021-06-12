"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = null;

module.exports = function (app) {
  var config = app.libs.config; //usando consign se puede obtener el archivo config que esta dentro de libs

  var dbValue = config.postgresql; // Se usa el archivo config para elegir con que db conectar

  console.log(dbValue);

  if (!db) {
    //const sequelize = new Sequelize('postgres://postgres:616113@localhost:5432/prueba');
    var sequelize = new _sequelize["default"](dbValue.database, dbValue.username, dbValue.password, dbValue.params);
    db = {
      sequelize: sequelize,
      Sequelize: _sequelize["default"],
      models: {}
    };

    var dir = _path["default"].join(__dirname, '/models');

    _fs["default"].readdirSync(dir).forEach(function (filename) {
      var modelDir = _path["default"].join(dir, filename); //const model = sequelize['import'](modelDir);
      //const model = require(modelDir)(sequelize);


      var model = require(modelDir)(sequelize, _sequelize["default"].DataTypes);

      db.models[model.name] = model;
    }); //se llama a la funcion asociate de cada model


    Object.keys(db.models).forEach(function (key) {
      db.models[key].associate(db.models);
    });
  }

  return db;
};