const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productRatingSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',  
        required:true
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    star:{
        type:Number,
        required:true
    },
    message:{
        type:String
    },
});

const productRating = mongoose.model('productRating',productRatingSchema);

module.exports = productRating;