module.exports = (sequelize, DataTypes) => {
    const Condicion = sequelize.define('Condicion', {
        id_tipo_de_cobro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        descri_tipo_de_cobro: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    });

    Condicion.associate = (models) => {
        Condicion.hasMany(models.Cabecera_compra);
        Condicion.hasMany(models.Cabecera_venta);
    };

    return Condicion;
};