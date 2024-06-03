const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const users = require("../models/userModel");
const Blacklist = require("../models/blacklistModel");
const {validationResult} = require('express-validator');
const {deleteFile} = require('../helpers/deleteFile');
const userRegisterController = async (req, res) => {
    try {
      const {name,mobile,password} = req.body;
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(500).json({
          success:false,
          msg:'Errors',
          errors:errors.array()
        })
      } 
      const preuser = await users.findOne({ mobile: mobile });
      console.log(preuser);
      if (preuser) {
        res.status(404).json({ 
          success:false,
          error: "Already Register Mobile Number." 
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      // console.log("pass = " + hashedPassword);
      const addUser = new users({
        fullName:name,
        mobile,
        password: hashedPassword,
        email:"",
        gender:"",
        profile:"",
        token : "",
      });
      console.log(addUser);
      await addUser.save();
      res.status(200).json({ 
        success:true,
        msg:'Registation Successfully',
        user:addUser,
        // accessToken:accessToken,
        // refreshToken:refreshToken,
        // tokenType:'Bearer'
       });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success:false,
        msg:error.message
      });
    }
  };

  const generateAccessToken = async (user) =>{
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn:"2h"});
    return token;
  }
  
  const generateRefreshToken = async (user) =>{
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn:"24h"});
    return token;
  }

  const userLoginController = async (req, res) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(500).json({
          success:false,
          msg:'Errors',
          errors:errors.array()
        })
      } 
      const mobile = req.body.logMobile;
      const password = req.body.logPass;
      const userData = await users.findOne({ mobile });
      if(!userData){
        return res.status(501).json({
          success:false,
          msg: 'Mobile No. and password is Incorrect!',
        });                                                                   
      }
      const passwordMatch = await bcrypt.compare(password, userData.password);
      if (!passwordMatch) {
        return res.status(401).json({ 
          success:false,
          msg: 'Mobile No. and password is Incorrect!'
         });
      }
      
      
      const accessToken = await generateAccessToken({ user:userData });
      const refreshToken = await generateRefreshToken({ user:userData });

      return res.status(200).json({
        success:true,
        msg:'Login Successfully',
        user:userData,
        accessToken:accessToken,
        refreshToken:refreshToken,
        tokenType:'Bearer'
      });
  
    } catch (error) {
      return res.status(500).json({
        success:false,
        msg:error.message
      });
    }
  };
  const userProfileController = async (req, res) => {
    console.log(req.user)
    try {
      return res.status(200).json({
        success:true,
        msg:'User profile data.',
        data:req.user.user
      });

    } catch (error) {
      return res.status(500).json({
        success:false,
        msg:error.message
      });
    }
  };
  const updateProfileController = async (req, res) => {
    try {
      const userId = req.user.userData._id; 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(500).json({
          success: false,
          msg: "Errors",
          errors: errors.array(),
        });
      }
      const { name, mobile, email } = req.body;
      const data = {
        fullName: name,
        mobile,
        email,
      };
      if (req.file !== undefined) {

        data.image = "images/" + req.file.filename;
        const oldData = users.findOne({_id : userId});
        const oldFile = path.join(__dirname,'../public/'+oldData.profile);
        deleteFile(oldFile);

      }
      console.log("id" + req.user.userData._id);
      const userData = await users.findByIdAndUpdate(
        { _id: userId },{ $set: data,},{new:true} // new : true is return updated value
      );
      return res.status(200).json({
        success: true,
        msg: "User profile updated Successfully",
        user: userData,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        msg: error.message,
      });
    }
  };
  const refreshTokenController = async (req, res) =>{
    try {
      
      const userId = req.user.user._id;
      // console.log(userId);
      const userData = await users.findOne({_id : userId});
      const accessToken = await generateAccessToken({ user:userData });
      const refreshToken = await generateRefreshToken({ user:userData });
      return res.status(200).json({
        success: true,
        msg: "Token Refreshed!",
        accessToken:accessToken,
        refreshToken:refreshToken
      });

    } catch (error) {
      return res.status(400).json({
        success: false,
        msg: error.message,
      });
    }
  };
  const logoutController = async (req, res) =>{
    try {

      const token = req.body.token || req.query.token || req.headers["authorization"];
      const tokenSplit = token.split(' ');
      secretToken = tokenSplit[1];

      const newBlacklist = new Blacklist({
        token:secretToken
      });

      await newBlacklist.save();

      res.setHeader('Clear-Site-Data', '"cookies","storage"');
      return res.status(200).json({
        success: true,
        msg: "You are logged out!",
      });
      
    } catch (error) {

      return res.status(400).json({
        success: false,
        msg: error.message,
      });

    }
  };
    module.exports = {
    userRegisterController,
    userLoginController,
    userProfileController,
    updateProfileController,
    refreshTokenController,
    logoutController
  }