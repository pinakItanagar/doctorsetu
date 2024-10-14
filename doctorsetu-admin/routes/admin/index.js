const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const adminHelper = require("../../helpers/admin");

router.get('/verifylist', function (req, res, next) {
    console.log("verify")
    adminHelper.getList("verify").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

module.exports = router;