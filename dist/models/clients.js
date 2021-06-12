"use strict";

module.exports = function (sequelize, DataType) {
  var Clients = sequelize.define('Clients', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    ruc: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    }
  });

  Clients.associate = function (models) {};

  return Clients;
};