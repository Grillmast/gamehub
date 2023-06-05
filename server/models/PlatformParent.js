const { Schema, model } = require('mongoose');

const platformParentSchema = new Schema({
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
    platforms: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Platform'
        }
    ]
});

const PlatformParent = model('PlatformParent', platformParentSchema);

module.exports = PlatformParent;