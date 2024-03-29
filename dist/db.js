"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = null;

module.exports = function (app) {
  var config = app.libs.config; //Info de la conexion a la db del archivo config.js
  //console.log(config);

  if (!db) {
    var sequelize = new _sequelize["default"](config.database, config.username, config.password, config.params);
    db = {
      sequelize: sequelize,
      Sequelize: _sequelize["default"],
      models: {}
    };

    var dir = _path["default"].join(__dirname, '/models'); // Lee el directorio y reorre cada archivo del mismo directorio o sea dir


    _fs["default"].readdirSync(dir).forEach(function (filename) {
      var modelDir = _path["default"].join(dir, filename);

      var model = require(modelDir)(sequelize, _sequelize["default"].DataTypes);

      db.models[model.name] = model;
    });

    Object.keys(db.models).forEach(function (key) {
      if (db.models[key].hasOwnProperty('associate')) {
        db.models[key].associate(db.models);
      }
    });
  }

  return db; // comentario de prueba
};