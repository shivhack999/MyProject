const mongoose = require("mongoose");

const productNeckSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const prductNeck = mongoose.model('prductNeck', productNeckSchema);
module.exports = prductNeck;