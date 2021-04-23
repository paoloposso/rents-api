const { ApartmentService } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mock-db/apartment-repository');

const service = new ApartmentService(new ApartmentRepository());

module.exports.register = (app) => {
    app.get('/', async (req, res) => {
        res.send(await service.getAll());
    });
    
    app.get('/apartment', async (req, res) => {
        res.send(await service.getAll());
    });
}