const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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

const Genre = model('Genre', genreSchema);

module.exports = Genre;