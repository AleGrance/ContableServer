module.exports = app => {
    const Cabecera_compra = app.db.models.Cabecera_compra;
    const Contribuyente = app.db.models.Contribuyente;
    const Proveedor = app.db.models.Proveedor;

    app.route('/cabecera_compra')
        .get((req, res) => {
            Cabecera_compra.findAll({
                    order: [
                        ['id_cabecera_compra', 'ASC']
                    ]
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })

        .post((req, res) => {
            Cabecera_compra.create(req.body)
                .then(result => res.json(result))
                .catch(error => res.json(error.errors[0].message));
        });

    app.route('/cabecera_compra/:id')
        .get((req, res) => {
            Cabecera_compra.findOne({
                    where: {
                        id_cabecera_compra: req.params.id,
                    },
                    include: [{
                        model: Contribuyente
                    }]
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404).json({
                        msg: error.message
                    });
                })
        })
        .put((req, res) => {
            Cabecera_compra.update(req.body, {
                    where: {
                        id_cabecera_compra: req.params.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => res.json(error.errors[0].message));
        })
        .delete((req, res) => {
            console.log(req.params);
            Cabecera_compra.destroy({
                    where: {
                        id_cabecera_compra: req.params.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                })
        })

    app.route('/cabecera_compra/contribuyente/:id')
        .get((req, res) => {
            Cabecera_compra.findAll({
                    where: {
                        ContribuyenteIdContribuyente: req.params.id
                    },
                    include: [{
                        model: Proveedor
                    }]
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404).json({
                        msg: error.message
                    });
                })
        })
};