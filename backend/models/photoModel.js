const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    tags: [String],
    file: String
}, {
    timestamps: true
})


module.exports = mongoose.model('PhotoObject', photoSchema);