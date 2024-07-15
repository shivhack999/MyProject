const mongoose = require("mongoose");

const productOccasionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const prductOccasion = mongoose.model('prductOccasion', productOccasionSchema);
module.exports = prductOccasion;