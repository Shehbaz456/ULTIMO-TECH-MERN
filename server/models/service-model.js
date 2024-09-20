const {Schema, model} = require('mongoose');

const serviceSchema = new Schema({
    service: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    price:{
        type: String,
        required: [true, 'Price is required'],
        trim: true
    },
    provider:{
        type: String,
        required: [true, 'Provider is required'],
        trim: true
    }
})

const Service = new model('Service', serviceSchema);

module.exports = Service;