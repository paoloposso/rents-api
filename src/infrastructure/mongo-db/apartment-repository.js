const { ApartmentSchema } = require('./apartment-schema');

function ApartmentRepository() {
    this.getAll = async () => {
        return await ApartmentSchema.find({});
    }
    this.insert = async (apartment) => {
        return await ApartmentSchema.create(apartment);
    }
    this.update = async (apartment) => {
        return await ApartmentSchema.findByIdAndUpdate(apartment.id, apartment);
    }
}

module.exports = { ApartmentRepository };
