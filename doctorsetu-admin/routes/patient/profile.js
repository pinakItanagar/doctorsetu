const express = require('express');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types')
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const router = express.Router();
const patientHelper = require("../../helpers/patient");
const doctorHelper = require("../../helpers/doctor");
const { response } = require('express');

// Insert patient appointment
router.post('/patientbyID', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let patient_id = req.body.patient_id;
    console.log("get profile patient")
    patientHelper.getPatientProfile(patient_id).then((data) => {
            res.status(200);
            res.json({status:200,
                message: "patient profile",
                res: data
            });
        
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// Insert patient appointment
router.post('/getmemberdetails', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let id = req.body.id;
    console.log("get member details");
    patientHelper.getmemberdetails(id).then((data) => {
        console.log("data")
            res.status(200);
            res.json({status:200,
                message: "patient member details",
                res: data
            });
        
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// Insert patient appointment
router.post('/addmember', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let data = req.body;
    console.log("Add member");
    patientHelper.addMember(data).then((data) => {
            res.status(200);
            res.json({status:200,
                message: "Added members.",
                res: data
            });
        
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/updateMember', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let data = req.body;
    console.log("Updateed member details");

    patientHelper.updatemember(data.member_id,data).then((data) => {
            res.status(200);
            res.json({status:200,
                message: "Update Member",
                res: data
            });
        
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

module.exports = router;