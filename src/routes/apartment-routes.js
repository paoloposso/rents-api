const { ApartmentService } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mongo-db/apartment-repository');
const _ = require('lodash');
const { Apartment } = require('../apartments/model');
const idGenerator = require('../infrastructure/id-generator');
const { getErrorResponse } = require('./error-response');

const service = new ApartmentService(new ApartmentRepository(), idGenerator);

module.exports.register = (app) => {
    app.get('/apartments', async (req, res) => {
        res.send(await service.getAll());
    });
    
    app.post('/apartment', async (req, res) => {
        const ret = service.save(req.body);
        res.send(await ret);
    });

    app.put('/apartment', async (req, res) => {
        if (!req.body.id) {
            res.status(400).send(getErrorResponse("id is required"));
        }
        try {
            const ret = await service.save(req.body);
            res.send(ret);
        } catch (err) {
            res.status(500).send(getErrorResponse(err.message, err, err.stack));
        }
    });
}