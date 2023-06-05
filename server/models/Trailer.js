const { Schema, model } = require('mongoose');

const trailerSchema = new Schema({
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    name: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    }
});

const Trailer = model('Trailer', trailerSchema);

module.exports = Trailer;