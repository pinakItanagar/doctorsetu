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
    console.log(req.body.doctor_id)
    doctorHelper.getDoctorSchedule(req.body.doctor_id, req.body.day, req.body.date).then((data) => {
        res.status(200);
        res.json({ status:200,
            message: "All schedule of Doctor ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/scheduleNew', function (req, res, next) {
    console.log(req.body.doctor_id)
    doctorHelper.getDoctorScheduleNew(req.body.doctor_id, req.body.day, req.body.date).then((data) => {
        res.status(200);
        res.json({ status:200,
            message: "All schedule of Doctor ",
            res: data.mainresult
        });
    }).catch((err) => {
        
        res.status(400);
        res.json(err);
    });
})

router.post('/hospitalscheduleNew', function (req, res, next) {
    console.log(req.body.hosptial_id)
    doctorHelper.getHospitalScheduleNew(req.body.hosptial_id, req.body.doctor_id, req.body.day, req.body.date).then((data) => {
        res.status(200);
        res.json({ status:200,
            message: "All schedule of Hospital ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/bookDoctorslot', function (req, res, next) {
    console.log(req.body.doctor_id)
    doctorHelper.doctorslotBooked(req.body).then((data) => {
        res.status(200);
        res.json({
            message: "All schedule of Doctor ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/todaysDoctorslots', function (req, res, next) {
    doctorHelper.gettodaySlot(req.body.doctor_id, req.body.day).then((data) => {
        res.status(200);
        res.json({
            message: "All schedule of Doctor ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/generateslots', function (req, res, next) {
    console.log("====")
    doctorHelper.generateslots(req.body.doctor_id, req.body.addslot, req.body.clinicdetails).then((data) => {
        res.status(200);
        res.json({
            message: "created doctor slots "
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})


module.exports = router;