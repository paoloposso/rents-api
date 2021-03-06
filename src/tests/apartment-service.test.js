const { createSaveApartment, createGetAllApartments } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mock-db/apartment-repository');
const { createAddress } = require('../apartments/address');
const { createApartment } = require('../apartments/apartment');
const idGenerator = require('../infrastructure/id-generator');

const repo = new ApartmentRepository();

const saveApartment = createSaveApartment({repo, idGenerator});
const getAllApartments = createGetAllApartments({repo});

it('should create apartment', async () => {
    let ret = 
        await saveApartment(createApartment('loasdlsa', 
        createAddress('green av', 'sao paulo', '100', '10020456', 'Sé', 'brazil'), 
        150.00));

    expect(ret).not.toBe('');
    expect(ret).not.toBeUndefined();
});

it('should get all apartments', async () => {
    let ret = await getAllApartments();
    expect(ret).not.toBeUndefined();
    expect(ret.length).not.toBe(0);
});

it('should fail creation validation', async () => {
    try {
        let apartment = createApartment('', 
            createAddress('green av', 'sao paulo', '100', '10020456', 'Sé', 'brazil'), 
            150.00);
        const ret = await saveApartment(apartment);
        fail('creation should not have suceeded');
    } catch (err) {
        expect(err.message).toContain('description is required');
    }
});

it('should fail creation validation', async () => {
    try {
        const save = createSaveApartment({});
        let apartment = createApartment('', 
            createAddress('green av', 'sao paulo', '100', '10020456', 'Sé', 'brazil'), 
            150.00);
            
        await save(apartment);
        
        fail('creation should not have suceeded');
    } catch (err) {
        expect(err.message).toContain('config params');
    }
});

it('should fail update validation', async () => {
    try {
        let apartment = createApartment('', 
            createAddress('green av', 'sao paulo', '100', '10020456', 'Sé', 'brazil'), 
            150.00);
        apartment.id = idGenerator.generate();
        
        await saveApartment(apartment);
        
        fail('update should not have suceeded');
    } catch (err) {
        expect(err.message).toContain('is required');
    }
});

it('should update', async () => {
    try {
        let apartment = createApartment('asdasd', 
            createAddress('green av', 'sao paulo', '100', '10020456', 'Sé', 'brazil'), 
            150.00);
        apartment.id = idGenerator.generate();

        const ret = await saveApartment(apartment);

        expect(ret).not.toBe('');
    } catch (err) {
        fail(err);
    }
});