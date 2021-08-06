const { createSaveApartment, createGetAllApartments } = require('../apartments/service');
const { createApartment } = require('../apartments/apartment');
const { createAddress } = require('../apartments/address');
const { ApartmentRepository } = require('../infrastructure/mongo-db/apartment-repository');
const idGenerator = require('../infrastructure/id-generator');
const { getErrorResponse } = require('./error-response');
const { DomainError } = require('../core/custom-error');

const repo = new ApartmentRepository();

const save = createSaveApartment({repo, idGenerator});
const getAll = createGetAllApartments({repo});

module.exports.register = (app) => {
    app.get('/apartments', async (req, res) => {
        try {
            return res.send(await getAll());
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });
    
    app.post('/apartment', async (req, res) => {
        try {
            const apartment = requestToApartment(req);
            return res.send(await save(apartment));
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });

    app.put('/apartment', async (req, res) => {
        try {
            if (!req.body.id) throw new DomainError("id is required");
            return res.send(await save(requestToApartment(req)));
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });
}

function requestToApartment(req) {
    return createApartment(
        req.description, 
        createAddress(req.address.street, req.address.city, req.address.number, req.address.zip, 
            req.address.neighborhood, req.address.country), 
        req.price, req.id);
}