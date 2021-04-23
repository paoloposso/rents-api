const { Apartment, Address } = require("../../apartments/model");

function ApartmentRepository() {
    this.getAll = async () => {
        return [
            new Apartment('Ap 1 beautiful', new Address('Red Street', 'Sao Paulo', '01257901')),
            new Apartment('Ap 2 marvelous', new Address('Marine Street', 'Santo Andre', '01255401')),
        ];
    }
}

module.exports = { ApartmentRepository };
