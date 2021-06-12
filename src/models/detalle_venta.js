module.exports = (sequelize, DataTypes) => {
    const Detalle_venta = sequelize.define('Detalle_venta', {
        id_detalle_venta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nro_venta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cant_item_detalle_venta: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        subtotal_detalle_venta: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        estado_venta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_factura_venta: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Detalle_venta.associate = (models) => {
        Detalle_venta.belongsTo(models.Plan_de_cuenta);
    };

    return Detalle_venta;
};