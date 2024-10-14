const express = require('express');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types')
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const router = express.Router();
const doctorHelper = require("../../helpers/doctor");
const { response } = require('express');
const { verify } = require('crypto');
// const { delete } = require('./login');


//Upload profile picture
router.post('/icon/upload', upload.single('profile'), function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API URL - ' + apiurl )
    let doctoremail = req.headers['doctoremail'];
    let profilepic = req.file;
    //console.log(req.headers['doctoremail']);
    let picFolder = `uploads/pictures/profile/doctor`;
    fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
    let picpath = `${picFolder}/${profilepic.originalname}`;
    let profilepicpath = path.join(__basedir, 'public', picpath);
    fs.copyFile(profilepic.path, profilepicpath, (err) => {
        fs.unlinkSync(profilepic.path);
        if (err) {
            res.status(400);
            res.json({
                message: "Failed in saving the icon."
            });
        } else {
            let updatedata = { "profilepic": picpath };

            doctorHelper.modifydoctorProfile(doctoremail, updatedata).then(() => {
                res.status(200);
                res.json({
                    message: "Doctor profile image saved successfully"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        }
    });


});

//Add doctor details
router.post('/details', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API URL - ' + apiurl )
    let doctorDetails = req.body;
    doctorExistCheck = doctorDetails.contact.email.toString();
    doctorHelper.addDetails(doctorDetails, doctorExistCheck).then((data) => {
        res.status(200);
        res.json({
            message: "Successfully inserted.",
            res: data
        });
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });

});

//Update Doctor details
router.post('/update', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let id = req.body.id;
    let updateData = req.body.updateData;
    console.log("--------------Before----------------");
    console.log(req.body.updateData)
    console.log("=================================")
    let pwd = req.body.updateData.pwd || null;
    delete req.body.updateData.pwd;
    console.log("--------------After----------------");
    console.log(req.body.updateData)
    console.log(pwd);
    console.log("=================================")

    doctorHelper.modifydoctorProfile(id, updateData).then((data) => {
        if(pwd){
            console.log("Update pwd")
            
            doctorHelper.resetpwd(id, pwd ).then((dataa) =>{
            res.status(200);
            res.json({
                message: "Successfully updated.",
                res: dataa
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
            
        })
    }else{
        res.status(200);
            res.json({
                message: "Successfully updated.",
                res: data
            });
    }
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });
})


router.post('/updatePatient', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let id = req.body.id;
    let updateData = req.body.updateData;
    console.log("--------------Before----------------");
    console.log(req.body.updateData)
    console.log("=================================")
    let pwd = req.body.updateData.pwd || null;
    delete req.body.updateData.pwd;
    console.log("--------------After----------------");
    console.log(req.body.updateData)
    console.log(pwd);
    console.log("=================================")


    doctorHelper.modifypatientProfile(id, updateData).then((data) => {
        if(pwd){
            doctorHelper.resetpwd(id, pwd).then(() =>{
            res.status(200);
            res.json({
                message: "Successfully updated.",
                res: data
            });
            
        })
    }else{

        res.status(200);
            res.json({
                message: "Successfully updated.",
                res: data
            });
    }
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });
})

router.post('/schedule', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    doctorHelper.getDoctorSchedule("6566c008-8f15-4848-bbc5-9877d649b25d").then((data) => {
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


// fetch doctor details
router.post('/', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )  
    let specilalst = req.body.specilalist;
    //specilalst = specilalst.toLowerCase();
    let page_num = req.body.page || 1;
let nPerPage = req.body.nPerPage || 10;
    doctorHelper.getDoctorList(specilalst, page_num, nPerPage).then((data) => {
        res.status(200);
        res.json({ status:200,
            response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
router.post('/activeDoctor', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let specilalst = req.body.specilalist || "dr ";
    //specilalst = specilalst.toLowerCase();
//     let page_num = req.body.page || 1;
// let nPerPage = req.body.nPerPage || 10;
    doctorHelper.getDoctorListactive(specilalst).then((data) => {
        res.status(200);
        res.json({ status:200,
            response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/doctorlist', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    // let specilalst = req.body.specilalist || "dr ";
    //specilalst = specilalst.toLowerCase();
//     let page_num = req.body.page || 1;
// let nPerPage = req.body.nPerPage || 10;
    doctorHelper.getDoctoractivelist().then((data) => {
        res.status(200);
        res.json({ status:200,
            response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/doctorlistAll', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    // let specilalst = req.body.specilalist || "dr ";
    //specilalst = specilalst.toLowerCase();
//     let page_num = req.body.page || 1;
// let nPerPage = req.body.nPerPage || 10;
    doctorHelper.getDoctorAlllist().then((data) => {
        res.status(200);
        res.json({ status:200,
            response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
router.post('/patientlist', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    // let specilalst = req.body.specilalist || "dr ";
    //specilalst = specilalst.toLowerCase();
//     let page_num = req.body.page || 1;
// let nPerPage = req.body.nPerPage || 10;
    doctorHelper.getpatientlist().then((data) => {
        res.status(200);
        res.json({ status:200,
            response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/hostiallist', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    
    doctorHelper.gethospitalList().then((data) => {
        res.status(200);
        res.json({ status:200,
            response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
router.post('/doctorbyID', function (req, res, next) {

   console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    console.log('===Doctor  Profile===')
    let picpath = 'test.jpg';
    //let doctordocumentpath = path.join(__basedir, 'public/uploads', picpath);
    
    let doctor_id = req.body.doctor_id;
    doctorHelper.getDoctorProfile(doctor_id).then((data) => {
            res.status(200);
            res.json({status:200,
                message: "doctor profile",
                res: data
            });
        
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// delete doctor Profile 
router.post('/delete', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let doctorToDelete = req.body.emailID;

    doctorHelper.deleteDoctor("doctor", doctorToDelete).then(() => {
        res.status(200);
        res.json({ message: "Successfully deleted" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

// delete doctor Profile 
router.post('/changestatus', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let online = req.body.online;
    let doctorid = req.body.doctor_id;

console.log("reffer here");
    doctorHelper.updateDoctorStatus( doctorid, online ).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "changed status of doctor" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

router.post('/updatehospitalslotDetails', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) ) 
    let hospitalslotDetails = req.body.hospitalslotDetails;
    let doctorid = req.body.doctor_id;
    let hospital_enrolled = req.body.hospital_enrolled || {};

    doctorHelper.updateHospitalSlotDetails( doctorid, hospitalslotDetails, hospital_enrolled).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "changed hospitalslotDetails of doctor" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

router.post('/updateVerified', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let verified = req.body.verified || false;
    let doctorid = req.body.doctor_id;
    let verify = req.body.verify || [];

    doctorHelper.updateDoctorVerified( doctorid, verified, verify).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "changed verified of doctor" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

router.post('/updateFirebaseToken', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let token = req.body.token;
    let id = req.body.id;

    doctorHelper.updateToken( id, token).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "changed taken of doctor/Patient" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

router.post('/refundpayment', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let paymentid = req.body.paymentid;
    let payment_amount = req.body.payment_amount;

    doctorHelper.refundpayment(paymentid, payment_amount).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "Refund successfully of Rs:"+payment_amount+" paymentid:"+ paymentid});
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

router.post('/capture', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let id = req.body.id;
    let amount = req.body.amount;

    doctorHelper.capture(id, amount).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "captured:"+amount+" id:"+ id});
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

router.get('/getpayment', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    
console.log("======")
    doctorHelper.getpayment().then((data) => {
        res.status(200);
        res.json({ status:200,
            message: "payment list",
            res: data});
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});


router.post('/getFirebaseToken', function (req, res, next) {
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let id = req.body.id;
console.log("getFirebaseToken")
    doctorHelper.getToken(id).then((data) => {
        res.status(200);
        res.json({ status:200,
            token: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

});

module.exports = router;