class Apartment {
    /**
     * @param {string} description 
     * @param {Address} address 
     * @param {number} price
     */
    constructor(description, address, price) {
        this.description = description;
        this.address = address;
        this.price = price;
    }
}

class Address {
    /**
     * @param {string} street 
     * @param {string} city 
     * @param {string} zip 
     * @param {string} number 
     */
    constructor(street, city, number, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.number = number;
    }
}

module.exports = { Address, Apartment };