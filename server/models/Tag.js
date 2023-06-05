const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    games_count: {
        type: Number,
        required: true
    },
    image_background: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;