const { AppartmentService } = require('../apartments/service');
const { AppartmentRepository } = require('../infrastructure/mongo-db/appartment-repository');

const service = new AppartmentService(new AppartmentRepository());

module.exports.register = (app) => {
    app.get('/', async (req, res) => {
        res.send(await service.getAll());
    });
    
    app.get('/apartment', async (req, res) => {
        res.send(await service.getAll());
    });
}