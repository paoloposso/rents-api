const { ApartmentService } = require('../apartments/service');
const { ApartmentRepository } = require('../infrastructure/mock-db/apartment-repository');
const idGenerator = require('../infrastructure/id-generator');
const { Apartment } = require('../apartments/model');

let service = new ApartmentService(new ApartmentRepository(), idGenerator)

it('create apartment', async () => {
    let ret = await service.save(new Apartment('loasdlsa', '100 alp st', 15000));
    expect(ret).not.toBe('');
});

it('create apartment', async () => {
    try {
        const apartment = new Apartment('', '100 alp st', 15000);
        await service.save(apartment);
    } catch (err) {
        expect(err.message).toContain('description is required');
    }
});