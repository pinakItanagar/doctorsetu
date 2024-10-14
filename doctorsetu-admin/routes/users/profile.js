const express = require('express');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types')
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const router = express.Router();
const userHelper = require("../../helpers/user");


// Update Profile
router.post('/details/update', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let name = req.body.name;
    let dob = req.body.dob;
    let email = req.body.email;
    let contact = req.body.contact;
    let address = req.body.address;
    let sessionID = req.headers.sessionid;
    userHelper.checkSessionExist(sessionID).then((sessionData) => {
        let user = { userID: sessionData.userID };
        let updatedata = { name, birthdate: dob, email, contact, address };
        userHelper.modifyUser(user, updatedata).then(() => {
            res.status(200);
            res.json({
                message: "Profile updated successfully"
            });
        }).catch((error) => {
            res.status(400);
            res.json({ error });
        });
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });
});

router.get('/states', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    userHelper.getStateList("states").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.get('/city', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    userHelper.getCityList("city", req.body.state_id).then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// Upload Profile Picture
router.post('/picture/upload', upload.single('profile'), function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let sessionID = req.headers.sessionid;
    userHelper.checkSessionExist(sessionID).then((sessionData) => {
        let profilepic = req.file;
        let picFolder = `pictures/profile/user`;
        fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
        let picpath = `${picFolder}/${sessionData.userID}.${mime.extension(profilepic.mimetype)}`;
        let profilepicpath = path.join(__basedir, 'public', picpath);
        fs.copyFile(profilepic.path, profilepicpath, (err) => {
            fs.unlinkSync(profilepic.path);
            if (err) {
                res.status(400);
                res.json({
                    message: "Failed in saving the picture."
                });
            } else {
                let user = { userID: sessionData.userID };
                let updatedata = { display_picture: picpath };
                userHelper.modifyUser(user, updatedata).then(() => {
                    res.status(200);
                    res.json({
                        message: "Profile picture saved successfully"
                    });
                }).catch((error) => {
                    res.status(400);
                    res.json({ error });
                });
            }
        });
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });

});


module.exports = router;