import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

module.exports = app => {

    const config = app.libs.config; //usando consign se puede obtener el archivo config que esta dentro de libs
    const dbValue = config.postgresql // Se usa el archivo config para elegir con que db conectar
    console.log(dbValue);

    if (!db) {
        //const sequelize = new Sequelize('postgres://postgres:616113@localhost:5432/prueba');
        const sequelize = new Sequelize(
            dbValue.database,
            dbValue.username,
            dbValue.password,
            dbValue.params
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, '/models');
        fs.readdirSync(dir).forEach(filename => {
            const modelDir = path.join(dir, filename);
            //const model = sequelize['import'](modelDir);
            //const model = require(modelDir)(sequelize);
            const model = require(modelDir)(sequelize, Sequelize.DataTypes)
            db.models[model.name] = model;
        });

        //se llama a la funcion asociate de cada model
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
    }

    return db;
};