const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const otpHelper = require("../../helpers/otp");
const userHelper = require("../../helpers/user");
const doctorHelper = require("../../helpers/doctor");

router.post('/websendotp', function (req, res, next) {
  
  let loginID = req.body.email;
  let loginType = req.body.loginType; // patient or doctor
  let logintype = req.body.logintype; // email or phnumber
  console.log("My Route : " + loginID)
 
});






module.exports = router;
