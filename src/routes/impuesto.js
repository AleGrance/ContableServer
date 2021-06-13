module.exports = app => {
    const Impuesto = app.db.models.Impuesto;

    app.route('/impuesto')
        .get((req, res) => {
            Impuesto.findAll()
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })

        .post((req, res) => {
            Impuesto.create(req.body)
                .then(result => res.json(result))
                .catch(error => res.json(error.errors));
        });

    app.route('/impuesto/:id')
        .get((req, res) => {
            Impuesto.findOne({
                    where: {
                        id_impuesto: req.params.id
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
            Impuesto.update(req.body, {
                    where: {
                        id_impuesto: req.params.id
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
            Impuesto.destroy({
                    where: {
                        id_impuesto: req.params.id
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