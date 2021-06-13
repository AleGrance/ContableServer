module.exports = app => {
    const Condicion = app.db.models.Condicion;

    app.route('/condicion')
        .get((req, res) => {
            Condicion.findAll()
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })

        .post((req, res) => {
            Condicion.create(req.body)
                .then(result => res.json(result))
                .catch(error => res.json(error.errors));
        });

    app.route('/condicion/:id')
        .get((req, res) => {
            Condicion.findOne({
                    where: {
                        id_tipo_de_cobro: req.params.id
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
            Condicion.update(req.body, {
                    where: {
                        id_tipo_de_cobro: req.params.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                })
        })
        .delete((req, res) => {
            console.log(req.params);
            Condicion.destroy({
                    where: {
                        id_tipo_de_cobro: req.params.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                })
        })
};