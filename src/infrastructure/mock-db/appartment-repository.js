const { Appartment, Address } = require("../../apartments/model");

function AppartmentRepository() {
    this.getAll = async () => {
        return [
            new Appartment('Ap 1 beautiful', new Address('Red Street', 'Sao Paulo', '01257901')),
            new Appartment('Ap 2 marvelous', new Address('Marine Street', 'Santo Andre', '01255401')),
        ];
    }
}

module.exports = { AppartmentRepository };
