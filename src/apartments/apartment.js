const { Address } = require('./address');

module.exports.createApartment = ({description, address, price}) => ({
    description,
    address,
    price,
    setId(id) {
        this.id = id
    }
});
