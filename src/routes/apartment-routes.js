const { ApartmentService } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mongo-db/apartment-repository');
const _ = require('lodash');
const { Apartment } = require('../apartments/model');

const service = new ApartmentService(new ApartmentRepository());

module.exports.register = (app) => {
    app.get('/', async (req, res) => {
        res.send(await service.getAll());
    });
    
    app.get('/apartment', async (req, res) => {
        res.send(await service.getAll());
    });

    app.post('/apartment', async (req, res) => {
        service.save(req.body);
        res.send(await service.save(req));
    });
}