const mongoose = require("mongoose");

const productFabricSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const prductFabric = mongoose.model('prductFabric', productFabricSchema);
module.exports = prductFabric;