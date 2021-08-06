const createAddress = (street, city, number, zip, neighborhood, country) => ({
        street,
        city,
        zip,
        number,
        neighborhood,
        country,
    });

module.exports = { createAddress };