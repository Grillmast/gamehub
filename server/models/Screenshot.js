const { Schema, model } = require('mongoose');

const screenshotSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    }
});

const Screenshot = model('Screenshot', screenshotSchema);

module.exports = Screenshot;