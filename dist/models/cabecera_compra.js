"use strict";

module.exports = function (sequelize, DataTypes) {
  var Cabecera_compra = sequelize.define('Cabecera_compra', {
    id_cabecera_compra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nro_factura_compra: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    fecha_factura_compra: {
      type: DataTypes.DATE,
      allowNull: false
    },
    condicion_venta_compra: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Sin el IVA
    sub_total_compra: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    // El total del IVA
    iva_total_compra: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    // Total general
    total_compra: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });

  Cabecera_compra.associate = function (models) {
    Cabecera_compra.belongsTo(models.Proveedor);
    Cabecera_compra.belongsTo(models.Contribuyente);
    Cabecera_compra.belongsTo(models.Condicion);
    Cabecera_compra.belongsTo(models.Impuesto);
  };

  return Cabecera_compra;
};