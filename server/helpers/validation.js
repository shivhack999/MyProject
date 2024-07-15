const {check} = require('express-validator');

exports.ragistrationValidator = [
    check('name', 'Name is required').not().isEmpty(),
    check('mobile','Mobile No. should be contains 10 digits').isLength({
        min:10,
        max:10
    }),
    check('password','Password must be greater then 8 Charecters, and Contains one capital letter, one spacial symbol, one small letter and numbers')
    .isStrongPassword({
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minSymbols:1,
        minNumbers:1
    }),
    
];
exports.loginValidator = [
    check('logMobile','Mobile No. should be contains 10 digits').isLength({
        min:10,
        max:10
    }),
    check('logPass','Password is required!').not().isEmpty(),
];
exports.updateProfileValidator =[
    check('name', 'Name is required').not().isEmpty(),
    check('mobile','Mobile No. should be contains 10 digits').isLength({
        min:10,
        max:10
    }),
    check('email','Enter a valid email address!').isEmail(),
];