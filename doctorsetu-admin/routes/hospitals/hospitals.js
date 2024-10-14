let mongoConnect = require('mongoclient-manager');
const express = require('express');
const router = express.Router();
const config = require('config');
const hospitalHelper = require("../../helpers/hospital");

// Hospitals details
router.post('/details', function (req, res, next) {
    let hospitalDetails = req.body;
    hospitalHelper.uploadDetails(hospitalDetails).then(() => {
        res.status(200);
        res.json({
            message: "Successfully inserted."
        });
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });
})

//fetching hospital details
router.get('/', function (req, res, next) {
    hospitalHelper.getListOfHospitals("hospital").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/updatehospital', function (req, res, next) {
    console.log(req.body);
    console.log("=hospitals=====")
    hospitalHelper.updatehospital(req.body.id, req.body.updateData).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})


router.post('/gethospitaldetailsbyID', function (req, res, next) {
    console.log(req.body.id)
    hospitalHelper.gethospitaldetailsbyID(req.body.id).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})





module.exports = router;