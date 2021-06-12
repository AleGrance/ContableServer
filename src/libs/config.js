module.exports = {
    postgresql: {
        database: 'prueba',
        username: 'postgres',
        password: '616113',
        params: {
            host: 'localhost',
            port: 5432,
            dialect: 'postgres'
        }
    },
    sqlite: {
        database: 'tasks',
        username: '',
        password: '',
        params: {
            dialect: 'sqlite',
            storage: 'tasks-db.sqlite',
            define: {
                underscore: true
            },
            operatorsAliases: false
        }
    },

};