const { Apartment } = require('./apartment');
const { Address } = require('./address');
const { errorType, DomainError } = require('../core/custom-error');

/**
 * 
 * @param {*} repo 
 * @param {*} idGenerator 
 */
function ApartmentService({repo, idGenerator}) {
    this.repo = repo;
    this.idGenerator = idGenerator;
}

const createGetAllApartments = ({repo}) => () => repo.getAll();

const createSaveApartment = 
    ({repo, idGenerator}) =>
    async (apartment) => {
        checkValidApartment(apartment);
        checkValidAddress(apartment.address);

        if (!apartment.id) {
            apartment.id = idGenerator.generate();
            return await repo.insert(apartment);
        }
        return await repo.update(apartment);
    }

/**
 * 
 * @param {Address} address 
 */
function checkValidAddress(address) {
    let err = '';

    if (!address.street || address.street === '') {
        err += 'street is required\n';
    }
    if (!address.city || address.city === '') {
        err += 'city is required\n';
    }
    if (!address.zip || address.zip === '') {
        err += 'zip is required\n';
    }
    if (!address.number || address.number === '') {
        err += 'number is required\n';
    }
    if (!address.country || address.country === '') {
        err += 'country is required\n';
    }

    if (err !== '') {
        throw new DomainError(new Error(err), errorType.InvalidParameters);
    }
}

/**
 * 
 * @param {Apartment} apartment 
 */
function checkValidApartment(apartment) {
    let err = '';

    if (!apartment.description || apartment.description === '') {
        err += 'description is required\n';
    }
    if (!apartment.address) {
        err += 'address is required\n';
    }
    if (!apartment.price || apartment.price === '') {
        err += 'price is required\n';
    }

    if (err !== '') {
        throw new DomainError(new Error(err), errorType.InvalidParameters);
    }

    checkValidAddress(apartment.address);
}

module.exports = { ApartmentService, createSaveApartment, createGetAllApartments };
