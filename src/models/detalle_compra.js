module.exports = (sequelize, DataTypes) => {
    const Detalle_compra = sequelize.define('Detalle_compra', {
        id_detalle_compra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // La sucursal del contribuyente
        centro_costo_detalle_compra: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        descripcion_detalle_compra: {
            type: DataTypes.STRING,
            allowNull: false
        },
        exentas_compra: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        gravadas_compra: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        porcentaje_compra: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        iva_compra: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Nro que se relaciona con la cabecera
        nro_factura_compra: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    Detalle_compra.associate = (models) => {
        Detalle_compra.belongsTo(models.Plan_de_cuenta);
    };

    return Detalle_compra;
};