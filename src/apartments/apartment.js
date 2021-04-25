const { Address } = require('./address');

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

    // photos = [];
}

// class Photo {
//     /**
//      * 
//      * @param {string} description 
//      * @param {string} base64 
//      */
//     constructor(description, base64) {
//         this.description = description;
//         this.base64 = base64;
//         this.main = false;
//     }
// }

module.exports = { Apartment };