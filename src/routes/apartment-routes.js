const { ApartmentService } = require('../apartments/service');
const { Apartment } = require('../apartments/apartment');
const { Address } = require('../apartments/address');
const { ApartmentRepository } = require('../infrastructure/mongo-db/apartment-repository');
const _ = require('lodash');
const idGenerator = require('../infrastructure/id-generator');
const { getErrorResponse } = require('./error-response');
const { DomainError } = require('../core/custom-error');

const service = new ApartmentService({repo: new ApartmentRepository(), idGenerator});

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
            const apartment = requestToApartment(req);
            return res.send(await service.save(apartment));
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });

    app.put('/apartment', async (req, res) => {
        try {
            if (!req.body.id) {
                throw new DomainError("id is required");
            }
            const apartment = requestToApartment(req);
            apartment.id = req.body.id;
            return res.send(await service.save(req.body));
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });
}

function requestToApartment(req) {
    return new Apartment(
        req.description, 
        new Address(req.address.street, req.address.city, req.address.number, req.address.zip, 
            req.address.neighborhood, req.address.country), 
        req.price);
}