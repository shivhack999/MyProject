const mongoose = require("mongoose");

const blacklistSchema = mongoose.Schema(
    {
        token:{
            type:String,
            require:true
        }
    },{timestamps:true},
);

const Blacklist = mongoose.model("Blacklist",blacklistSchema);

module.exports = Blacklist;