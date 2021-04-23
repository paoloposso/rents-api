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

        this.checkValid();
    }

    checkValid() {
        let err = '';

        if (!this.description || this.description === '') {
            err += 'description is required\n';
        }
        if (!this.address) {
            err += 'address is required\n';
        }
        if (!this.price || this.price === '') {
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

        checkValid();
    }

    checkValid() {
        let err = '';

        if (!this.street || this.street === '') {
            err += 'street is required\n';
        }
        if (!this.city || this.city === '') {
            err += 'city is required\n';
        }
        if (!this.zip || this.zip === '') {
            err += 'zip is required\n';
        }

        if (err !== '') {
            throw Error(err);
        }
    }
}

module.exports = { Address, Apartment };