const { createSaveApartment, createGetAllApartments } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mock-db/apartment-repository');
const { Address } = require('../apartments/address');
const { Apartment } = require('../apartments/apartment');
const idGenerator = require('../infrastructure/id-generator');

const repo = new ApartmentRepository();

const saveApartment = createSaveApartment({repo, idGenerator});
const getAllApartments = createGetAllApartments({repo});

it('should create apartment', async () => {
    let ret = 
        await saveApartment(new Apartment('loasdlsa', new Address('green av', 'sao paulo', '100', '10020456', 'Sé', 'brazil'), 150.00));
    expect(ret).not.toBe('');
});

it('should get all apartments', async () => {
    let ret = await getAllApartments();
    expect(ret).not.toBeUndefined();
    expect(ret.length).not.toBe(0);
});

it('should fail creation validation', async () => {
    try {
        let apartment = new Apartment('', new Address('', 'sao paulo', '0121679', '100'), 150.00);
        const ret = await saveApartment(apartment);
        fail('creation should not have suceeded');
    } catch (err) {
        expect(err.message).toContain('description is required');
    }
});

it('should fail update validation', async () => {
    try {
        let apartment = new Apartment('', new Address('', 'sao paulo', '200', '1804897', 'Sé', 'Brasil'), 150.00);
        apartment.id = idGenerator.generate();
        await saveApartment(apartment);
        fail('update should not have suceeded');
    } catch (err) {
        expect(err.message).toContain('is required');
    }
});

it('should update', async () => {
    try {
        let apartment = new Apartment('desc', new Address('av1', 'sao paulo', '155', '1002465', 'Sé', 'Brazil'), 150.00);
        apartment.id = idGenerator.generate();
        const ret = await saveApartment(apartment);
        expect(ret).not.toBe('');
    } catch (err) {
        fail(err);
    }
});