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

    isValid() {
        let err = '';

        if (!description || description === '') {
            err += 'description is required\n';
        }
        if (!address) {
            err += 'address is required\n';
        }
        if (!price || price === '') {
            err += 'price is required\n';
        }

        if (err !== '') {
            throw Error(err);
        }
    }
}

class Address {
    /**
     * @param {string} street 
     * @param {string} city 
     * @param {string} zip 
     */
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }

    isValid() {
        let err = '';

        if (!street || street === '') {
            err += 'street is required\n';
        }
        if (!city || city === '') {
            err += 'city is required\n';
        }
        if (!zip || zip === '') {
            err += 'zip is required\n';
        }

        if (err !== '') {
            throw Error(err);
        }
    }
}

module.exports = { Address, Apartment };