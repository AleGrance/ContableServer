module.exports = (sequelize, DataType) => {

    const Proveedor = sequelize.define('Proveedor', {
        id_proveedor: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nom_proveedor: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        ruc_proveedor: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        timbrado_proveedor: {
            type: DataType.INTEGER,
            allowNull: false
        }
    });

    Proveedor.associate = (models) => {
        Proveedor.hasMany(models.Cabecera_compra);
    };

    return Proveedor;
};