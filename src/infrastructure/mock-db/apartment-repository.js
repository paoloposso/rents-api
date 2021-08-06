const { createAddress } = require("../../apartments/address");
const { createApartment } = require("../../apartments/apartment");

function ApartmentRepository() {
    this.getAll = () => {
        return [
            createApartment('Ap 2 marvelous', createAddress('Marine Street', 'Santo Andre', '01255401'), 100000),
            createApartment('Ap 2 wonderful', createAddress('Top Av', 'Sao Paulo', '015978503'), 100000),
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
