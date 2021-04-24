const { ApartmentService } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mongo-db/apartment-repository');
const _ = require('lodash');
const idGenerator = require('../infrastructure/id-generator');
const { getErrorResponse } = require('./error-response');
const { DomainError } = require('../core/custom-error');

const service = new ApartmentService(new ApartmentRepository(), idGenerator);

module.exports.register = (app) => {
    app.get('/apartments', async (req, res) => {
        try {
            return res.send(await service.getAll());
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });
    
    app.post('/apartment', async (req, res) => {
        try {
            return res.send(await service.save(req.body));
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });

    app.put('/apartment', async (req, res) => {
        try {
            if (!req.body.id) {
                throw new DomainError("id is required");
            }
            return res.send(await service.save(req.body));
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });
}