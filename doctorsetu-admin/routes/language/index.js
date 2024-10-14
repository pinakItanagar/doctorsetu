const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const languageHelper = require("../../helpers/language");

// fetching specialization details
router.get('/', function (req, res, next) {
    languageHelper.getList("language").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/addlanguage', function (req, res, next) {
    console.log(req.body)
    languageHelper.addlanguage("language", req.body).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/addverify', function (req, res, next) {
    console.log(req.body)
    languageHelper.addverify("verify", req.body).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/updatelanguage', function (req, res, next) {
    console.log(req.body)
    languageHelper.updatelanguage("language", req.body).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/updateverify', function (req, res, next) {
    console.log(req.body)
    languageHelper.updateverify("verify", req.body).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// delete specialization 
router.post('/delete', function (req, res, next) {
    let languageToDelete = req.body.language;
    languageHelper.deleteLanguage("language", languageToDelete).then(() => {
        res.status(200);
        res.json({ message: "Successfully deleted" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

module.exports = router;