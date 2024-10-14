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
const moment = require('moment');
const specializationHelper = require("../../helpers/specilazation");


// Insert patient appointment
router.post('/', upload.array('document'), function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
   //req.body.documents = true
    let deatils = req.body;
    deatils.createdAt = moment().format();
    deatils.updatedAt = moment().format();
    if(req.files != undefined && req.files.length > 0){
    deatils.document_file = JSON.parse(deatils.document_file);
    deatils.appointment_patientdata=JSON.parse(deatils.appointment_patientdata);
    deatils.appointment_doctordata=JSON.parse(deatils.appointment_doctordata);

    }
    patientHelper.addAppointment(deatils).then((resdata) => {


        doctorHelper.doctorslotBooked({ "doctor_id": req.body.appointment_docid, "slot": req.body.slot, "day": req.body.day, "date": req.body.date }).then((data) => {
            
           if(req.body.documents){


            let picFolder = `uploads`;
     let appointment_id = resdata.appointment_id || "APT_6002022" 
  
     var originalname = [];
    // console.log()
     //var documents =  req.body.documents || ["doc1"];
    
     req.files.forEach(function(i, index, arr){
 
         doctordocument = req.files[index];
         
         originalname.push(doctordocument.originalname);
         
     fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
     //let picpath = `${picFolder}/+'123'.${mime.extension(profilepic.mimetype)}`;
     let doctordocumentpath = path.join(__basedir, 'public/uploads', doctordocument.originalname);
     fs.copyFile(doctordocument.path, doctordocumentpath, (err) => {
       //  fs.unlinkSync(doctordocument.path);
         if (err) {
             res.status(400);
             res.json({
                 message: "Failed in saving the picture."
             });
         } else {
             if(index == req.files.length-1){
        //  specializationHelper.updatePatientDocuments(appointment_id, originalname).then((data) => {
        //          res.status(200);
        //          console.log("200")
                 res.json({
                     status: 200,
                     message: "Doc saved successfully, FileName : "
                 });
        //      }).catch((err) => {
        //          res.status(400);
        //          res.json(err);
        //      });
         }
 
         }
     });
 })
               
           }else{
               console.log("no doc")

            res.status(200);
            res.json({status:200,
                message: "Added doctorappoitment ",
                res: data
            });

           }


        }).catch((err) => {
            res.status(400);
            res.json(err);
        });
        // res.status(200);
        // res.json({
        //     message: "Successfully inserted."
        // });



    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})


router.post('/updateAppointmentDocument', upload.array('document'), function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    // let sessionID = req.headers.sessionid;
     let picFolder = `uploads`;
     let appointment_id = req.body.appointment_id || "123APT_6002022" 
     console.log(req.body)
     console.log(req.files)

     var originalname = [];
     var documents =  req.body.documents || ["doc1"];
     var updatedata = req.body.updatedata
console.log(req.files)

     if(req.files != undefined && req.files.length >0){
         console.log("with file")
     req.files.forEach(function(i, index, arr){
 
         doctordocument = req.files[index];
         
         originalname.push(doctordocument.originalname);
         
     fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
     //let picpath = `${picFolder}/+'123'.${mime.extension(profilepic.mimetype)}`;
     let doctordocumentpath = path.join(__basedir, 'public/uploads', doctordocument.originalname);
     fs.copyFile(doctordocument.path, doctordocumentpath, (err) => {
       //  fs.unlinkSync(doctordocument.path);
         if (err) {
             res.status(400);
             res.json({
                 message: "Failed in saving the picture."
             });
         } else {
             if(index == req.files.length-1){
         specializationHelper.updatePatientDocumentsWithFiles(appointment_id, JSON.parse(req.body.updatedata)).then((data) => {
                 res.status(200);
                 console.log("200")
                 res.json({
                     status: 200,
                     message: "Doc saved successfully, FileName : "
                 });
             }).catch((err) => {
                 res.status(400);
                 res.json(err);
             });
         }
 
         }
     });
 })
}else{
console.log(req.body.updatedata)
console.log("else")
    specializationHelper.updatePatientDocumentsWithFiles(appointment_id, req.body.updatedata).then((data) => {
        res.status(200);
        console.log("200")
        res.json({
            status: 200,
            message: "Doc saved successfully, FileName : "
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });


}
 
 });

router.post('/newslot', upload.array('document'), function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    //req.body.documents = true
    console.log("NEW-----")
     let deatils = req.body;
     deatils.createdAt = moment().format();
     deatils.updatedAt = moment().format();
     patientHelper.addAppointment(deatils).then((resdata) => {
 
 
         doctorHelper.doctorslotBooked({ "doctor_id": req.body.appointment_docid, "slot": req.body.slot, "day": req.body.day, "date": req.body.date }).then((data) => {
             
            if(req.body.documents){
 
 
             let picFolder = `uploads`;
      let appointment_id = resdata.appointment_id || "APT_6002022" 
   
      var originalname = [];
     // console.log()
      //var documents =  req.body.documents || ["doc1"];
     
      req.files.forEach(function(i, index, arr){
  
          doctordocument = req.files[index];
          
          originalname.push(doctordocument.originalname);
          
      fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
      //let picpath = `${picFolder}/+'123'.${mime.extension(profilepic.mimetype)}`;
      let doctordocumentpath = path.join(__basedir, 'public/uploads', doctordocument.originalname);
      fs.copyFile(doctordocument.path, doctordocumentpath, (err) => {
        //  fs.unlinkSync(doctordocument.path);
          if (err) {
              res.status(400);
              res.json({
                  message: "Failed in saving the picture."
              });
          } else {
              if(index == req.files.length-1){
        //   specializationHelper.updatePatientDocuments(appointment_id, originalname).then((data) => {
        //           res.status(200);
        //           console.log("200")
                  res.json({
                      status: 200,
                      message: "Doc saved successfully, FileName : "
                  });
        //       }).catch((err) => {
        //           res.status(400);
        //           res.json(err);
        //       });
          }
  
          }
      });
  })
                
            }else{
                console.log("no doc")
 
             res.status(200);
             res.json({status:200,
                 message: "Added doctorappoitment ",
                 res: data
             });
 
            }
 
 
         }).catch((err) => {
             res.status(400);
             res.json(err);
         });
         // res.status(200);
         // res.json({
         //     message: "Successfully inserted."
         // });
 
 
 
     }).catch((err) => {
         res.status(400);
         res.json(err);
     });
 })
// Get all appoimtments by patient
router.post('/list', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let page_num = req.body.page || 1;
    let nPerPage = req.body.nPerPage || 10;
    patientHelper.getAppointmentPatientId(req.body.patient_id, req.body.appointment_status, page_num, nPerPage).then((data) => {
        res.status(200);
        res.json({
            status: 200,
            message: " Appointment By patitent ",
            res: data
        });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// Get all appoimtments by patient
router.get('/geteprescription', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let reqPath = path.join(__dirname, '../../public/eprescription' + req.query.epres);
    res.download(reqPath);

    // patientHelper.getAppointmentPatientId(req.body.patient_id,req.body.appointment_status).then((data) => { 
    //     res.status(200);
    //     res.json({
    //         message: "All Appointment By patitent ",
    //         res :data
    //     });
    // }).catch((err) => {
    //     res.status(400);
    //     res.json(err);
    // });
})


// save eprescription


// router.post('/saveprescriptionttest', upload.single('file'), function (req, res, next) {

//         let filenmame = req.headers.epresname;
//         let profilepic = req.file;
//         let picFolder = path.join(__dirname, '../../public/eprescription');

//         //fs.mkdirSync(picFolder, { recursive: true });

//         fs.copyFile(profilepic, filenmame, (err) => {
//             fs.unlinkSync(profilepic.path);
//             if (err) {
//                 res.status(400);
//                 res.json({
//                     message: "Failed in saving the picture."
//                 });
//             } else {

//                     res.status(200);
//                     res.json({
//                         message: "Profile picture saved successfully"
//                     });

//             }
//         });

// });



// // Upload Profile Picture
// router.post('/saveprescription', upload.single('file'), function (req, res, next) {
//     let sessionID = req.headers.sessionid;
//     let picFolder = path.join(__dirname, '../../public/eprescription');
//     let profilepic = req.file;
//     var type = upload.single('recfile');


//         fs.copyFile(profilepic, picFolder, (err) => {

//             fs.unlinkSync(profilepic.path);
//             if (err) {
//                 res.status(400);
//                 res.json({
//                     message: "Failed in saving the picture."
//                 });
//             } else { 

//                     res.status(200);
//                     res.json({
//                         message: "Profile picture saved successfully"
//                     });

//             }
//         });


// });



// Upload Profile Picture

router.post('/picture/saveprescription', upload.array('eprescription',12), function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    let sessionID = req.headers.sessionid;
    console.log(req.body)
    
    if(req.files != undefined && req.files.length >0){
        var originalname = [];
     req.files.forEach(function(i, index, arr){

        let profilepic = req.files[index];
      originalname.push(req.files[index].originalname)
    let picFolder = `pictures/profile/user`;
    fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
    //let picpath = `${picFolder}/+'123'.${mime.extension(profilepic.mimetype)}`;
    let profilepicpath = path.join(__basedir, 'public/eprescription', profilepic.originalname);
   
    fs.copyFile(profilepic.path, profilepicpath, (err) => {
        fs.unlinkSync(profilepic.path);
        if (err) {
            res.status(400);
            res.json({
                message: "Failed in saving the picture."
            });
        } else {
            
            if(index == req.files.length-1){
            patientHelper.updateEprescription(req.body.appointmentId, originalname, req.body.observation, req.body.analysis, req.body.presciption).then((data) => {
                res.status(200);
                res.json({
                    status: 200,
                    message: "Appoi saved successfully, FileName : " + profilepic.originalname
                });
            }).catch((err) => {
                res.status(400);
                res.json(err);
            });
        }

        }
    });

})
}else{
    console.log("No pictures to save")
    

    patientHelper.updateEprescription(req.body.appointmentId, "null", req.body.observation, req.body.analysis, req.body.presciption).then((data) => {
        res.status(200);
        res.json({
            status: 200,
            message: "Updated  successfully, FileName :No file "
        });

})
}


});

// Get all appoimtments by patient
router.post('/canceleappointment', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
console.log(req.body);
var paymentid = req.body.appointment_paymentid;
    var payment_amount = req.body.appointment_fee;
    patientHelper.cancelappoinement(req.body.appointment_id ,req.body.appointment_desc ).then((data) => {
      if(paymentid.length >1){
        
        

    doctorHelper.refundpayment(paymentid, payment_amount).then(() => {
        res.status(200);
        res.json({ status:200,
            message: "Refund successfully of Rs:"+payment_amount+" paymentid:"+ paymentid});
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

      }else{
          res.status(200);
        res.json({status: 200,
            message: "Appointment cancel ",
            res: data
        })
      }
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

// Get all appoimtments by patient
router.post('/updateAppointment', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    console.log("appointment_id")
    req.body.update.updatedAt = moment().format();
        patientHelper.updateAppoinement(req.body.appointment_id, req.body.update).then((data) => {
            res.status(200);
            res.json({status: 200,
                message: "Appointment cancel ",
                res: data
            });
        }).catch((err) => {
            res.status(400);
            res.json(err);
        });
    })

    // Get all appoimtments by patient
router.post('/geteprescriptionpdf', function (req, res, next) {
    var apiurl = req.protocol + "://" + req.headers.host + req.originalUrl;
    console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
    var app_id = req.body.appointment_id || "APT_6002061"
    //req.body.update.current_time = moment().format();
        patientHelper.geteprescriptionpdf(app_id, moment().format()).then((data) => {
            
            if( data){
             // let reqPath = path.join(__dirname, '../../public/eprescription/'+app_id+".pdf");
               //res.download(reqPath);
        
             res.status(200);
             res.json({status: 200,
               message: "Appointment update with pdf ",
                 res: data
             });
        }
        }).catch((err) => {
            res.status(400);
            res.json(err);
        });
        
    })

module.exports = router;