const { ApartmentSchema } = require('./apartment-schema');

function ApartmentRepository() {
    this.getAll = () => {
        return ApartmentSchema.find({});
    }
    this.insert = (apartment) => {
        return ApartmentSchema.create(apartment);
    }
    this.update = (apartment) => {
        return ApartmentSchema.findByIdAndUpdate(apartment.id, apartment);
    }
}

module.exports = { ApartmentRepository };
