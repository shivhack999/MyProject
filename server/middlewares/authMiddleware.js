const jwt = require('jsonwebtoken');
const Blacklist = require('../models/blacklistModel');
require('dotenv').config();
const varifyToken = async (req,res,next) =>{
    const token = req.body.token || req.query.token || req.headers["authorization"];
    if(!token){
        return res.status(403).json({
            success:false,
            msg:'A token is required for authentication',
        })
    }

    try {
        
        const tokenSplit = token.split(' ');
        const secretToken = tokenSplit[1];
        const blacklistedToken = await Blacklist.findOne({token:secretToken});
        if(blacklistedToken){
            return res.status(400).json({
                success:false,
                msg:'This session has expired, Please try again!',
            });
        }

        const secretKey = process.env.JWT_SECRET;
        const decodedData = jwt.verify(secretToken,secretKey);
        req.user = decodedData;
        // console.log(req.user);
        
        } catch (error) {
        return res.status(401).json({
            success:false,
            msg:'Invalid token!',
        })
    }
    
    return next();
};

module.exports = varifyToken;