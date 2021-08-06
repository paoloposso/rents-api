const { Address } = require("../../apartments/address");
const { createApartment } = require("../../apartments/apartment");

function ApartmentRepository() {
    this.getAll = () => {
        return [
            createApartment({description: 'Ap 2 marvelous', address: new Address('Marine Street', 'Santo Andre', '01255401'), price: 100000}),
            createApartment({description: 'Ap 2 wonderful', address: new Address('Top Av', 'Sao Paulo', '015978503'), price: 100000}),
        ];
    }
    this.insert = (apartment) => {
        return Promise.resolve(apartment.id.toString());
    }
    this.update = (apartment) => {
        return Promise.resolve();
    }
}

module.exports = { ApartmentRepository };
