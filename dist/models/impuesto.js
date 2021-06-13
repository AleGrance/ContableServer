"use strict";

module.exports = function (sequelize, DataTypes) {
  var Impuesto = sequelize.define('Impuesto', {
    id_impuesto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descri_impuesto: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });

  Impuesto.associate = function (models) {
    Impuesto.hasMany(models.Cabecera_compra);
    Impuesto.hasMany(models.Cabecera_venta);
  };

  return Impuesto;
};