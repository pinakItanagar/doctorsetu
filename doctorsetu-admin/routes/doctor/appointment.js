const express = require('express');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types')
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const router = express.Router();
const doctorHelper = require("../../helpers/doctor");
const { response } = require('express');


// Get all appoimtments 
router.post('/', function (req, res, next) {
let page_num = req.body.page || 1;
let nPerPage = req.body.nPerPage || 10;
let d  = new Date(new Date().getTime() + 144*60*60*1000);
let from = req.body.from || [('0' + new Date().getDate()).slice(-2),('0' + (new Date().getMonth() + 1)).slice(-2),new Date().getFullYear()].join('-');
let to = req.body.to ||  [('0' + d.getDate()).slice(-2),('0' + (d.getMonth() + 1)).slice(-2),d.getFullYear()].join('-');
console.log(from  +"----"+ to);

    doctorHelper.getAppointmentDoctorId(req.body.doctor_id, req.body.appointment_status, page_num, nPerPage, from,to).then((data) => {
        res.status(200);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

        res.json({
            status: 200,
            message: "Appointment of Doctor ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})


// Get all appoimtments 
router.post('/count', function (req, res, next) {
    console.log(req.body)
    let d  = new Date(new Date().getTime() + 144*60*60*1000);
    let from = req.body.from || [('0' + new Date().getDate()).slice(-2),('0' + (new Date().getMonth() + 1)).slice(-2),new Date().getFullYear()].join('-');
    let to = req.body.to ||   [('0' + d.getDate()).slice(-2),('0' + (d.getMonth() + 1)).slice(-2),d.getFullYear()].join('-');
    console.log(req.body.from +   "==== " + from);
    var state = req.body.state || "All"
    var pin = req.body.pin || "All"


    doctorHelper.getAppointmentCountDoctorId(req.body.doctor_id,from,to, state, pin).then((data) => {
        
        res.status(200);
        res.json({
            status: 200,
            message: "All Appointment  count of Doctor ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// Get all appoimtments 
router.post('/patientId', function (req, res, next) {

    doctorHelper.getAppointmentPatientId(req.body.doctor_id, req.body.patient_id, req.body.appointment_status).then((data) => {
        res.status(200);
        res.json({
            status:200,
            message: "All Appointment of Doctor by patient id. ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/appointmentId', function (req, res, next) {

    doctorHelper.getAppointmentappointmentId(req.body.appointmentId).then((data) => {
        res.status(200);
        res.json({
            status:200,
            message: "Appointment details. ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})


module.exports = router;