// routes/auth.js
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer'); //multer help to upload files( images etc.)
const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function(res, req, cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null, name);
    }
});
const upload = multer({storage:storage});

const userController = require('../controllers/userControllers');
const {loginValidator,ragistrationValidator,updateProfileValidator} = require('../helpers/validation');
const authMiddleware = require('../middlewares/authMiddleware');

router.post("/register",ragistrationValidator, userController.userRegisterController);
router.post("/login",loginValidator, userController.userLoginController);
router.get("/profile", authMiddleware, userController.userProfileController);
router.post("/updateProfile", authMiddleware, updateProfileValidator, userController.updateProfileController );
router.get("/refreshToken", authMiddleware, userController.refreshTokenController);
router.get("/logout", authMiddleware, userController.logoutController);
module.exports = router;
