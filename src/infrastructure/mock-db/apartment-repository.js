const { Address } = require("../../apartments/address");
const { Apartment } = require("../../apartments/apartment");

function ApartmentRepository() {
    this.getAll = async () => {
        return [
            new Apartment('Ap 1 beautiful', new Address('Red Street', 'Sao Paulo', '01257901')),
            new Apartment('Ap 2 marvelous', new Address('Marine Street', 'Santo Andre', '01255401')),
        ];
    }

    this.insert = async (appartment) => {
        return Promise.resolve(appartment.id.toString());
    }

    this.update = async (appartment) => {
        console.log(Apartment);
        return Promise.resolve();
    }
}

module.exports = { ApartmentRepository };
