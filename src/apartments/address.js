class Address {
    /**
     * @param {string} street 
     * @param {string} city 
     * @param {string} zip 
     * @param {string} number 
     */
    constructor(street, city, number, zip, neighborhood, country) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.number = number;
        this.neighborhood = neighborhood;
        this.country = country;
    }
}

module.exports = { Address };