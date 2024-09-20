const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    }
})

const Contact = new model('Contact', contactSchema);
module.exports = Contact;