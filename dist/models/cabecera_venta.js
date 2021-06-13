"use strict";

module.exports = function (sequelize, DataTypes) {
  var Cabecera_venta = sequelize.define('Cabecera_venta', {
    id_cabecera_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nro_factura_venta: {
      type: DataTypes.STRING,
      unique: true
    },
    estado_venta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condicion_venta_venta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total_venta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    liq_iva_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fecha_registrada_venta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_facturada_venta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exentas_venta: {
      type: DataTypes.DECIMAL
    },
    total_notas_de_credito: {
      type: DataTypes.DECIMAL
    },
    vencimiento: {
      type: DataTypes.INTEGER
    },
    saldo: {
      type: DataTypes.DECIMAL
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total_letras: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Cabecera_venta.associate = function (models) {
    Cabecera_venta.belongsTo(models.Cliente);
    Cabecera_venta.belongsTo(models.Contribuyente);
    Cabecera_venta.belongsTo(models.Condicion);
    Cabecera_venta.belongsTo(models.Impuesto);
  };

  return Cabecera_venta;
};