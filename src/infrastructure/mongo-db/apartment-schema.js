const mongoose = require('mongoose');
const { Schema } = mongoose;

const apartmentSchema = new Schema({
    description: { type: String, required: true },
    address: { 
        street: { type: String, required: true },
        number: { type: String, required: true },
        zip: { type: String, required: true },
        city: { type: String, required: true },
    },
    price: { type: Number, required: true }
});

apartmentSchema.virtual('id').get(function() {
    return this._id.toString();
});

const ApartmentSchema = mongoose.model('Aparment', apartmentSchema);

module.exports = { ApartmentSchema };