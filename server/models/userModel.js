const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    gender:{
        type:String
    },
    profile:{
        type:String
    },
    token:{
        type:String
    },
    e_varified:{
        type:Number,
        default:0 
    },
    m_varified:{
        type:Number,
        default:0
    }
});

const user = mongoose.model("user",userSchema);

module.exports = user;