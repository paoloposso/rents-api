const { Apartment } = require('./apartment');
const { Address } = require('./address');
const { errorType, DomainError } = require('../core/custom-error');

const createGetAllApartments = ({repo}) => () => repo.getAll();

const createSaveApartment = 
    ({ repo, idGenerator }) => {
        if (!repo || !repo.insert || !idGenerator || !idGenerator.generate) {
            throw new DomainError('invalid config params', errorType.ConfigError);
        }

        return (apartment) => {
            checkValidApartment(apartment);
            checkValidAddress(apartment.address);

            if (!apartment.id) {
                apartment = Object.assign(apartment, idGenerator.generate());
                return repo.insert(apartment);
            }
            
            return repo.update(apartment);
        }
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
        throw new DomainError(err, errorType.InvalidParameters);
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
        throw new DomainError(err, errorType.InvalidParameters);
    }

    checkValidAddress(apartment.address);
}

module.exports = { createSaveApartment, createGetAllApartments };
