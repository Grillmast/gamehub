const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    released: {
        type: String,
        required: true,
    },
    added: {
        type: String,
        required: true,
    },
    created: {
        type: String,
        required: true,
    },
    updated: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 100,
    },
    screenshots: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Screenshot',
        },
    ],
    trailers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trailer',
        },
    ],
});

const Game = model('Game', GameSchema);

module.exports = Game;