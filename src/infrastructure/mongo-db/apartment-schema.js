const mongoose = require('mongoose');
const { Schema } = mongoose;
const _ = require('lodash');

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

apartmentSchema.methods.toJSON = function () {
    var model = this;
    var apartmentObj = model.toObject();
    apartmentObj.id = apartmentObj._id;
    delete apartmentObj._id;
    
    return apartmentObj;
};

const ApartmentSchema = mongoose.model('Apartment', apartmentSchema);

module.exports = { ApartmentSchema };