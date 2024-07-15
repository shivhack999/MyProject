const mongoose = require("mongoose");

const productPatternSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const prductPattern = mongoose.model('prductPattern', productPatternSchema);
module.exports = prductPattern;