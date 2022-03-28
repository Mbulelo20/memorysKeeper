const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tags: [String],
    file: String
}, {
    timestamps: true
})


module.exports = mongoose.model('PhotoObject', photoSchema);