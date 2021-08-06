/**
 * 
 * @param {string} description 
 * @param {{}} address 
 * @param {number} price 
 * @param {string} id
 * @returns
 */
const createApartment = (description, address, price, id = '') => {
    return {
        description,
        address,
        price,
        id
    };
}

module.exports = { 
    createApartment
}