const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const symptomHelper = require("../../helpers/symptom");

// fetching specialization details
router.get('/', function (req, res, next) {
    symptomHelper.getList("symptoms").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.get('/getAllList', function (req, res, next) {
    symptomHelper.getAllList("symptoms").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.get('/language', function (req, res, next) {
    symptomHelper.getList("language").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// delete specialization 
// router.post('/delete', function (req, res, next) {
//     let symptomToDelete = req.body.symptom;
//     symptomHelper.deleteSymptom("symptom", symptomToDelete).then(() => {
//         res.status(200);
//         res.json({ message: "Successfully deleted" });
//     }).catch((err) => {
//         res.status(400);
//         res.json(err);
//     });
// })

router.get('/filepathtest', function (req, res, next) {
    symptomHelper.filepathtest().then((data) => {
        res.status(200);
       // res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
module.exports = router;