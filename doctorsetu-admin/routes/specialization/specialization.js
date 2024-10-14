const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'public/uploads/' })
const specializationHelper = require("../../helpers/specilazation");
const userHelper = require("../../helpers/user");
const symptomHelper = require("../../helpers/symptom");
const config = require('config');
const md5 = require("md5");

// Specialiations details upload
router.post('/details', function (req, res, next) {
    let specialization = req.body;
    let specialztnName = specialization.name;
    specializationHelper.add(specialization, specialztnName).then((data) => {
        res.status(200);
        res.json({
            message: "Successfully inserted.",
            res: data
        });
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });
})


router.post('/update', function (req, res, next) {
    let specializationName = req.body.specializationName;
    let updateData = req.body.data;
    //console.log(specializationName)
    //console.log(updateData)
    specializationHelper.modifySpecialization(specializationName, updateData).then(() => {
        res.status(200);
        res.json({
            message: "Successfully Updated."
        });
    }).catch((error) => {
        res.status(400);
        res.json({ error });
    });
})

// fetching specialization details
router.get('/', function (req, res, next) {
    specializationHelper.getListOfSpecialization("specialization").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
}) 

router.get('/getAllListOfSpecialization', function (req, res, next) {
    specializationHelper.getAllListOfSpecialization("specialization").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
}) 

router.get('/getaccesslist', function (req, res, next) {
    specializationHelper.getaccesslist("access").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.get('/getuserlist', function (req, res, next) {
    specializationHelper.getuserlist("user").then((data) => {
        res.status(200);
        res.json({ response: data });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/saveaccesslist', function (req, res, next) {
    let accessdata = req.body.data;

    specializationHelper.saveaccesslist('access',accessdata).then(() => {
        res.status(200);
        res.json({ response: "data" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
// delete specialization 
router.post('/delete', function (req, res, next) {
    let specializationToDelete = req.body.specialization;
    specializationHelper.deleteSpecialization("specialization", specializationToDelete).then(() => {
        res.status(200);
        res.json({ message: "Successfully deleted" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/adduser', function (req, res, next) {
    let logintype= req.body.logintype || 'email'; // email ph
    let loginType = req.body.loginType; // doctor patient
    // let loginID = req.body.loginID;
    let username = req.body.username;
    let password = md5(req.body.password);
    userHelper.generateUniqueUserID()
      .then((userID) => {
        // let userID = userID
      

  let email = req.body.email;
  let phnum = req.body.phnum;
  let hospital_id =req.body.hospital_id;
  let user = { loginID: email };
  let details = ["loginID", "userID"];
  let branch_id = req.body.branch_id;

  console.log(user, details, loginType)
  userHelper.checkLoginExist(user, details, loginType)
    .then((data) => {
      console.log(data);
      if (data && data.loginExist) {}else{
        var adddata;
          if(loginType == "hospitaladmin"){
            adddata = {loginExist:false,username:username,logintype: logintype, phnumber:phnum,email:email,  userID:userID,  loginType:loginType, loginID:email, "password" : password, hospital_id:hospital_id}

          }else if (loginType == "branchadmin"){
            adddata = {loginExist:false,username:username,logintype: logintype, phnumber:phnum,email:email,  userID:userID,  loginType:loginType, loginID:email, "password" : password, hospital_id:hospital_id, branch_id:branch_id}

          }else{
            adddata = {loginExist:false,username:username,logintype: logintype, phnumber:phnum,email:email,  userID:userID,  loginType:loginType, loginID:email, "password" : password}

          }
    userHelper.adduser(adddata).then(() => {


        res.status(200);
        res.json({ message: "Successfully added user" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
}
})

    })
})
    
router.post('/getuserdetails', function (req, res, next) {

    let userID = req.body.userID;
    let loginType = req.body.loginType;

    specializationHelper.getuserdetails(loginType,userID).then((data) => {
        res.status(200);
        res.json({
            status: 200,
            response: data           
             });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

})

router.post('/updateuserdetails', function (req, res, next) {

    let userID = req.body.userID;
    let loginType = req.body.loginType;
    let useremail = req.body.useremail;
    let username = req.body.username;
    var userpassword = req.body.userpassword || null;
    let userphnum = req.body.userphnum  || null;
    let hospital_id = req.body.hospital_id || null;
    let branch_id = req.body.branch_id || null;


    specializationHelper.updateuserdetails(loginType,userID,username, useremail, userpassword, userphnum, hospital_id, branch_id ).then((data) => {
        res.status(200);
        res.json({
            status: 200,
            response: data           
             });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });

})


router.post('/deleteuser', function (req, res, next) {
    let loginType = req.body.loginType;
    let userID = req.body.userID;

    specializationHelper.deleteuser(loginType, userID).then(() => {
        res.status(200);
        res.json({ message: "Successfully deleted" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
router.post('/deleteverify', function (req, res, next) {
    let verifyToDelete = req.body.verify;
    specializationHelper.deleteVerify("verify", verifyToDelete).then(() => {
        res.status(200);
        res.json({ message: "Successfully deleted" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})

router.post('/symptom/delete', function (req, res, next) {
    let symptomToDelete = req.body.symptom;
    console.log(symptomToDelete)
    symptomHelper.deleteSymptom("symptoms", symptomToDelete).then(() => {
        res.status(200);
        res.json({ message: "Successfully deleted" });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });
})
router.post('/uploadspecialization', upload.array('document'), function (req, res, next) {
   // let sessionID = req.headers.sessionid;
    let picFolder = `pictures/profile/user`;
    console.log("=======================================")
    console.log(req.body)
    console.log(req.body.updatedata.cert0);
    console.log(req.body.doctor_id)
    console.log("=======================================")

    var docid = req.body.doctor_id
    var updatedata = req.body.updatedata


    if(req.files != undefined){
    var originalname = []
    req.body.doctor_id = req.body.doctor_id || "469140133739"
    var spality =  req.body.specialization;
    


       spality = {};
        
        req.files.forEach(function(i, index, arr){
        doctordocument = req.files[index];
        var abc = doctordocument.originalname.split(', ');
        doctordocument.originalname=abc[0];
        req.files[index].document_name = abc[2];
        req.files[index].document_id = abc[1];
        spality[req.files[index].document_id]=({"name":req.files[index].document_name, "documentname":req.files[index].originalname})

        originalname.push(doctordocument.originalname);

    fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
    //let picpath = `${picFolder}/+'123'.${mime.extension(profilepic.mimetype)}`;
    let doctordocumentpath = path.join(__basedir, 'public/eprescription', doctordocument.originalname);
    fs.copyFile(doctordocument.path, doctordocumentpath, (err) => {
      //  fs.unlinkSync(doctordocument.path);
        if (err) {
            res.status(400);
            res.json({
                message: "Failed in saving the picture."
            });
        } else {
            if(index == req.files.length-1){
                
        specializationHelper.updateDoc(req.body.doctor_id,JSON.parse(req.body.updatedata)).then((data) => {
                res.status(200);
                console.log("200")
                res.json({
                    status: 200,
                    result: data           
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

    console.log("else block")


    specializationHelper.updateDoc(docid,updatedata).then((data) => {
        res.status(200);
        console.log("200")
        res.json({
            status: 200,
            result: data           
             });
    }).catch((err) => {
        res.status(400);
        res.json(err);
    });



}

});

router.post('/uploadpatientDocumets', upload.array('document'), function (req, res, next) {
    // let sessionID = req.headers.sessionid;
     let picFolder = `uploads`;
     let appointment_id = req.body.appointment_id || "123APT_6002022" 

     var originalname = [];
     var documents =  req.body.documents || ["doc1"];
     var updatedata = req.body.updatedata

     if(req.files != undefined && req.files.length >0){
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

//Upload specialization Picture
router.post('/icon/upload', upload.single('icon'), function (req, res, next) {
    let specializationName = req.headers['specializationname'];
    let profilepic = req.file;
    //console.log(req.headers['specializationname']);
    let picFolder = `uploads/pictures/specialization`;
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
            let updatedata = { "icon": picpath };

            specializationHelper.modifySpecialization(specializationName, updatedata).then(() => {
                res.status(200);
                res.json({
                    message: "specialization icon saved successfully"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        }
    });


});
router.post('/profilepic/upload', upload.single('profile'), function (req, res, next) {
    let profilepic = req.file;
    // console.log(req)
        let picFolder = `pictures/profile/user`;
        let userID = req.body.user_id || "858734149360";
        let usertype =  req.body.usertype;
        console.log(profilepic);
        console.log("--------")
        console.log("--------")

        console.log(userID , " userID", usertype , " usertype");
        console.log("--------")


        fs.mkdirSync(path.join(__basedir, 'public', picFolder), { recursive: true });
       let picpath = path.join(__basedir, 'public', picFolder,profilepic.originalname );
       
    // let profilepicpath = path.join(__basedir, 'public', picpath);
       
        fs.copyFile(profilepic.path, picpath, (err) => {
            fs.unlinkSync(profilepic.path);
            if (err) {
                console.log(err)
                res.status(400);
                res.json({
                    message: "Failed in saving the picture."
                });
            } else {
                
               // let updatedata = { display_picture: picpath };
                userHelper.modifyUserprofilpic(userID, picFolder+'/'+profilepic.originalname, usertype).then(() => {
                    res.status(200);
                    res.json({
                        status:200,
                        message: "Profile picture saved successfully",
                        res: picFolder+'/'+profilepic.originalname
                    });
                }).catch((error) => {
                    res.status(400);
                    res.json({ error });
                });
            }
        });
    
});


router.post('/editsymptom', upload.single('icon'), function (req, res, next) {
    // let symptom = req.body.symptom;
    

    let profilepic = req.file;
    if(req.file){
        console.log("Image block")
    console.log(req.body);
    console.log(profilepic);
    console.log(req.headers['doctoremail']);
    let picFolder = `uploads/pictures`;
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
            console.log(picpath)
            specializationHelper.symptomUpdate(req.body._id,{"sym_icon":config.get("APP.apiurl")+picpath, "sym_name":req.body.sym_name, 'status':req.body.status}).then(() => {
                res.status(200);
                res.json({
                    message: "icon added symptom"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        }
    });
}else{

    console.log("else block")
            specializationHelper.symptomUpdate(req.body._id,{"sym_name":req.body.sym_name, 'status':req.body.status}).then(() => {
                res.status(200);
                res.json({
                    message: "icon added symptom"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });

}
})

router.post('/addsymptom', upload.single('icon'), function (req, res, next) {
    let symptom = req.body.symptom;
    console.log("========================"); 

    console.log("========================"); 
    console.log("========================"); 
    console.log("========================"); 

    let profilepic = req.file;
    console.log(req.body.symptom);
    //console.log(req.headers['doctoremail']);
    let picFolder = `uploads/pictures`;
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
            // let updatedata = { "profilepic": picpath };
            console.log(picpath)
            specializationHelper.symptomAdd(symptom, config.get("APP.apiurl")+picpath, req.body.status).then(() => {
                res.status(200);
                res.json({
                    message: "icon added symptom"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        }
    });
})

router.post('/updatespecialization', upload.single('icon'), function (req, res, next) {
    // let specialization = req.body.specialization;
    let profilepic = req.file;
    // console.log(req.body.specialization);
    if(req.file){
        console.log("==============if block==========");

    //console.log(req.headers['doctoremail']);
    let picFolder = `uploads/pictures`;
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
            // let updatedata = { "profilepic": picpath };
            specializationHelper.specializationUpdate(req.body._id, { "name":req.body.name,"icon":config.get("APP.apiurl")+picpath, 'status':req.body.status}).then(() => {
                res.status(200);
                res.json({
                    message: "icon added"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        }
    });
}else{

    console.log("ele block")
            specializationHelper.specializationUpdate(req.body._id,{"name":req.body.name,"status":req.body.status}).then(() => {
                res.status(200);
                res.json({
                    message: "icon added"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        

}
})
router.post('/addspecialization', upload.single('icon'), function (req, res, next) {
    let specialization = req.body.specialization;
    console.log("========================");
    let profilepic = req.file;
    console.log(req.body.specialization);
    //console.log(req.headers['doctoremail']);
    let picFolder = `uploads/pictures`;
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
            // let updatedata = { "profilepic": picpath };
            console.log(picpath)
            specializationHelper.specializationAdd(specialization, config.get("APP.apiurl")+picpath, req.body.status).then(() => {
                res.status(200);
                res.json({
                    message: "icon added"
                });
            }).catch((error) => {
                res.status(400);
                res.json({ error });
            });
        }
    });
})


router.post('/addhospitalIcon', upload.single('icon'), function (req, res, next) {
    // let hospital_id = req.body.hospital_id;
    // let branch_id = req.body.branch_id;

    let profilepic = req.file;
    let picFolder = `pictures/profile/user`;
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
            
            res.status(200);
                res.json({
                    message: config.get("APP.apiurl")+picpath
                });
        }
    });
})


module.exports = router;