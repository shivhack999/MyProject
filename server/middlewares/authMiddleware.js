const jwt = require('jsonwebtoken');
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
        secretToken = tokenSplit[1];
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