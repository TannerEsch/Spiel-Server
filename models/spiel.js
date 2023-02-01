const mongoose = require('mongoose');
const { Schema } = mongoose;

const spielSchema = new Schema({
    name: String,
    group: String,
    message: String,

    date: {
        type: Date,
        default: Date.now()
    }
})

const Spiel = mongoose.model('Spiel', spielSchema);

module.exports = Spiel;