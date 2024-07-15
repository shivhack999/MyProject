const mongoose = require("mongoose");

const productCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const productCategory = mongoose.model('productCategory', productCategorySchema);
module.exports = productCategory;