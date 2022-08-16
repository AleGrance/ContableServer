module.exports = app => {
    const Cabecera_venta = app.db.models.Cabecera_venta;
    const Cliente = app.db.models.Cliente;


    app.route('/cabecera_venta')
        .get((req, res) => {
            Cabecera_venta.findAll({
                    order: [
                        ['id_cabecera_venta', 'ASC']
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
            Cabecera_venta.create(req.body)
                .then(result => res.json(result))
                .catch(error => res.json(error.errors[0].message));
        });

    app.route('/cabecera_venta/:id')
        .get((req, res) => {
            Cabecera_venta.findOne({
                    where: {
                        id_cabecera_venta: req.params.id
                    }
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404).json({
                        msg: error.message
                    });
                })
        })
        .put((req, res) => {
            Cabecera_venta.update(req.body, {
                    where: {
                        id_cabecera_venta: req.params.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => res.json(error.errors[0].message));
        })
        .delete((req, res) => {
            console.log(req.params);
            Cabecera_venta.destroy({
                    where: {
                        id_cabecera_venta: req.params.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                })
        })


    app.route('/cabecera_venta/contribuyente/:id')
        .get((req, res) => {
            Cabecera_venta.findAll({
                    where: {
                        ContribuyenteIdContribuyente: req.params.id
                    },
                    include: [{
                        model: Cliente
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