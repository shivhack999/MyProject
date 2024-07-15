const mongoose = require("mongoose");

const productBrandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const productBrand = mongoose.model('productBrand', productBrandSchema);
module.exports = productBrand;