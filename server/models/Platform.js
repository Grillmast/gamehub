const { Schema, model } = require('mongoose');

const platformSchema = new Schema({
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
    },
    image: {
        type: String,
        required: true
    },
    year_start: {
        type: Number,
        required: true
    },
    year_end: {
        type: Number,
        required: true
    }
});

const Platform = model('Platform', platformSchema);

module.exports = Platform;