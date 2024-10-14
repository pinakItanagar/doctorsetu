const express = require('express');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
var randomize = require('randomatic');
const doctorHelper = require("../../helpers/doctor");

//Login Doctor
router.post('/login', function (req, res, next) {
    let loginID = req.body.loginID;
    let password = md5(req.body.password);
    let doctor = { loginID, password };
    let details = ["loginID", "doctorID"];
    
    doctorHelper.checkLoginExist(doctor, details).then((data) => {
        if (data && data.loginExist) {
            let token = jwt.sign({
                data: data.details
            }, config.get('APP.secretkey'), { expiresIn: config.get('APP.sessiontime') });
            res.status(200);
            res.json({
                message: "Loggedin successfully",
                data: {
                    sessionID: token
                }
            });
        }
        else {
            res.status(400);
            res.json("User does not exist");
        }
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});



router.post('/generate', function (req, res, next) {
    let doctor_id = randomize('0', 12);
    //res.json(doctor_id);
    let password = md5('#doctorApp@123');
    res.json({
        message: "Doctor Data generated",
        data: {
            random_doctor_id: doctor_id,
            doc_password: password
        }
    });

})
module.exports = router;