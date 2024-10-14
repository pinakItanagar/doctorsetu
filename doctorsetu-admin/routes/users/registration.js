const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const otpHelper = require("../../helpers/otp");
const userHelper = require("../../helpers/user");
const doctorHelper = require("../../helpers/doctor");


// User patient Registration
router.post("/register", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )  
  let email = req.body.email;
  let user = { loginID: email };
  let logintype = req.body.logintype;
  let details = ["loginID", "userID"];
  userHelper.checkLoginExist(user, details, req.body.loginType).then((data) => {
    if (data && data.loginExist) {
      res.status(400);
      res.json({
        message: "Account already Exist.",
      });
    } else {

      otpHelper.generateUniqueOTP().then((unqueOTP) => {
        otpHelper
          .saveOTP(unqueOTP, ["loginID", email], config.get("APP.otptime"))
          .then(() => {

    
                       res.status(200);
                       res.json({
                         status: 'create',
                         message: "OTP for setting the password sent successfully",
                         unqueOTP,
                       });

               
                       otpHelper.sendOTP(unqueOTP,logintype, email , config.get("APP.otptime"))
                       .then(() => {
                           
                         
                       })
                       .catch((err) => {
                        // res.status(500);
                        // res.json(err);
                      });


              
            
          })
          .catch((err) => {
            res.status(500);
            res.json(err);
          });
      });
    }
  });
});


// new doctor entry
router.post("/addDoctor", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  let doctorDetails = req.body;
  
  doctorExistCheck = doctorDetails.contact.email.toString();
  doctorHelper.addDoctorUser(doctorDetails, doctorExistCheck).then((data) => {
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


// Password Saving patient
router.post("/setpassword", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  let otp = req.body.otp;
  let password = md5(req.body.password);
  otpHelper.verifyOTP(otp).then((data) => {
    userHelper
      .generateUniqueUserID()
      .then((userID) => {
        data.userID = userID;
        data.password = password;
        data.loginType = "patient";
        userHelper.createUser(data)
          .then(() => {
            otpHelper
              .deleteOTP(otp)
              .then(() => {
                res.status(200);
                res.json({
                  message: "User created successfully",
                  data: {
                    userID,
                  },
                });
              })
              .catch((err) => {
                res.status(400);
                res.json(err);
              });
          })
          .catch((err) => {
            res.status(400);
            res.json(err);
          });
      })
      .catch((err) => {
        res.status(400);
        res.json(err);
      });
  });
});

//forgot Password
router.post("/forgotpassword", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  let loginID = req.body.email;
  let loginType= req.body.loginType; // patient or doctor
  let logintype = req.body.logintype; // email or phnumber
  let email = req.body.email;
  let user = { loginID: email };

  let details = ["loginID", "userID"];

  console.log(user, details, loginType)
  userHelper.checkLoginExist(user, details, loginType).then((data) => {
      console.log(data);
      if (data && data.loginExist) {
        
        otpHelper
          .generateUniqueOTP()
          .then((unqueOTP) => {
            otpHelper
              .saveOTP(
                unqueOTP,
                ["loginID", loginID],
                config.get("APP.otptime")
              )
              .then(() => {
                res.status(200);
                res.json({
                  message:
                    "OTP for resetting the password created successfully",
                  unqueOTP,
                });
                otpHelper.sendOTP(unqueOTP,logintype, email , config.get("APP.otptime"))
                       .then(() => {
                           
                         
                       })
              })
              .catch((err) => {
                res.status(400);
                res.json(err);
              });
          })
          .catch((err) => {
            res.status(400);
            res.json(err);
          });
      
      
        } else {
        // res.status(400);
        // res.json({ message: "Login doesn't exist" });

//===============================================================================

let user2 = { loginID2: email };


  console.log(user2, details, loginType)
  userHelper.checkLoginExist(user2, details, loginType).then((data) => {
      console.log(data);
      if (data && data.loginExist) {
        
        otpHelper.generateUniqueOTP().then((unqueOTP) => {
          otpHelper.saveOTP(unqueOTP,["loginID", loginID],
                config.get("APP.otptime")
              )
              .then(() => {
                res.status(200);
                res.json({
                  message:
                    "OTP for resetting the password created successfully",
                  unqueOTP,
                });
                otpHelper.sendOTP(unqueOTP,logintype, email , config.get("APP.otptime"))
                       .then(() => {
                           
                         
                       })
              })
              .catch((err) => {
                res.status(400);
                res.json(err);
              });
          })
          .catch((err) => {
            res.status(400);
            res.json(err);
          });
      
      
        } else {
        res.status(400);
        res.json({ message: "Login doesn't exist" });
      }
    }).catch((err) => {
      res.status(400);
      res.json(err);
    });





        //======================================================================================
      }
    }).catch((err) => {
      res.status(400);
      res.json(err);
    });
});

//Reset Password
router.post("/resetpassword", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  let otp = req.body.otp;
  let password = md5(req.body.password);
  otpHelper
    .verifyOTP(otp)
    .then((data) => {
      console.log(data)
      let user = { loginID: data.loginID };
      let updatedata = { password };
      userHelper
        .modifyUser(user, updatedata)
        .then(() => {
          otpHelper
            .deleteOTP(otp)
            .then(() => {
              res.status(200);
              res.json({
                message: "Password changed successfully",
              });
            })
            .catch((err) => {
              res.status(400);
              res.json(err);
            });
        })
        .catch((err) => {
          res.status(400);
          res.json(err);
        });
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
});

//Login User
router.post("/login", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  let loginID = req.body.loginID;
  let password = md5(req.body.password);
  let loginType = req.body.loginType;
  let user = { loginID, password };
  let details = ["loginID", "userID"];
  console.log(details);
  console.log(user)
  userHelper
    .checkLoginExist(user, details, loginType)
    .then((data) => {
      console.log(data)
      if (data && data.loginExist) {
        console.log(data);
        let token = jwt.sign(
          {
            data: data.details,
          },
          config.get("APP.secretkey"),
          { expiresIn: config.get("APP.sessiontime") }
        );
        res.status(200);
        res.json({
          status: 200,
          message: "Loggedin successfully!",
          data: {
            sessionID: token,
            details: data.userdetails
          },
        });
      } else {
        res.status(400);
        res.json({
          status: 400,
          message: "User does not exist ."
        });
      }
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
});


//Login User
router.post("/generateloginOtp", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  let loginID = req.body.loginID;
  let loginType = req.body.loginType; //doctor or patient 
  let logintype = req.body.logintype; // email or phone
  
  console.log("Login ID EX : " + loginID)
  /*
  if(logintype == 'email') { 
    loginID = req.body.email;
   console.log("Login ID  : " + req.body.loginID)
  } else {
    loginID = req.body.loginID;
    console.log("Login ID  : " + loginID)
  }
  */
  

  otpHelper.generateUniqueOTP()
  .then((unqueOTP) => {

    otpHelper
      .saveOTP(
        unqueOTP,
        ["loginID", loginID],
        config.get("APP.otptime")
      )
      .then(() => {
        res.status(200);
        res.json({
          status: 200,
            message: "OTP to login for existing or new user,for both doctor and!",
            unqueOTP
    
        });
        console.log("send otp to below:")
        console.log(unqueOTP,logintype, loginID)

        otpHelper.sendOTP(unqueOTP,logintype, loginID , config.get("APP.otptime"))
               .then(() => {
               })
               .catch((err) => {
                res.status(400);
                res.json(err);
              });
      })
      .catch((err) => {
        res.status(400);
        res.json(err);
      });



  })
  .catch((err) => {
    res.status(400);
    res.json(err);
  });


});

//Login User
router.post("/me", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  console.log("---ME API--")
  var sessionID = req.body.sessionID;
  console.log("sessionID:"+sessionID)
  userHelper.checkSessionExist(sessionID).then((sessionData) => {
        // let user = { userID: sessionData.userID };
        // let doctor_id = req.body.doctor_id;
        console.log(sessionData)
        doctorHelper.getDoctorProfile(sessionData.userID).then((data) => {
                res.status(200);
                res.json({status:200,
                    message: "doctor profile",
                    res: data
                });
            
        }).catch((err) => {
            res.status(400);
            res.json(err);
        });


}).catch((err) => {
  res.status(400);
  res.json(err);
});
});
router.post("/otplogin", function (req, res, next) {
  console.log('API-URL-PARA - ' + JSON.stringify(req.body) )
  console.log("======")
  // if(req.body.loginType == 'hospital' || req.body){

  // }else{
if(req.body.otp.length < 7){
  let loginID = req.body.loginID;
  let loginID2 = req.body.loginID;

  let loginType = req.body.loginType;
  let logintype = req.body.logintype;
  if(logintype == null ){
    if(loginID.includes('@')){
      logintype = "email";
    }else{
      logintype="phnum";
    }
  }
  let otp = req.body.otp;

  let user = { loginID };  
  let user2 = { loginID2 };
  let details = ["loginID", "userID", "createdAt"];
  

  userHelper.checkLoginExistforotp(user, details, loginType, user2)
    .then((data) => {
      console.log("check login exist in user table : exist");
      console.log(data);
      console.log("==================================");
      if (data && data.loginExist) {
        console.log(data)

        otpHelper.verifyOTP(otp).then((verifyedotpdata) => {
        
          console.log("JWT : " + JSON.stringify(data));

        let token = jwt.sign(
          {
            data: data.details,
          },
          config.get("APP.secretkey"),
          { expiresIn: config.get("APP.sessiontime") }
        );
        res.status(200);
        res.json({
          status: 200,
          message: "Loggedin successfully!",
          data: {
            sessionID: token,
            details: data,
            userexist: true

          },
        });



      })
      .catch((err) => {
        res.status(400);
        res.json("User exist but wrong OPT");
      });


      } else {
        console.log("Not exist in user table so create user so create and send otp")
       
        otpHelper.verifyOTP(otp).then((verifyedotpdata) => {

        // Otp signup
        userHelper
        .generateUniqueUserID()
        .then((userID) => {
          data.userID = userID;
          data.loginID = loginID
          data.logintype = logintype;
          data.loginType = loginType;

          userHelper.createUserorDoctor(data)
            .then((userdetails) => {
              console.log("addednew")
              if(data.loginType == "doctor"){
                data.id= data.userID;
              }else{
                data.patient_id = data.userID;
              }


              let token = jwt.sign(
                {
                  data: data,
                },
                config.get("APP.secretkey"),
                { expiresIn: config.get("APP.sessiontime") }
              );
              res.status(200);
              res.json({
                status: 200,
                message: "Loggedin successfully",
                data: {
                  sessionID: token,
                  details: data,
                  userexist: false
                },
              });
              
              
        })
         

        })
        .catch((err) => {
          res.status(400);
          res.json(err);
        });  
    
      })
      .catch((err) => {
        res.status(400);
        res.json("wrong otp no user found");
      }); 
      
    }
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });


  }else{
    console.log("login with password")

    let loginID = req.body.loginID;
    let loginID2 = req.body.loginID;

    let password = md5(req.body.otp);
    let loginType = req.body.loginType;
    let user = { loginID, password };
    let user2 = { loginID2, password };

    let details = ["loginID", "userID", "createdAt"];
  
    userHelper.checkLoginExistallfields(user, details, loginType, user2)
      .then((data) => {
        console.log(data);
        if (data && data.loginExist) {
          console.log("JWT : " + JSON.stringify(data));
          let token = jwt.sign(
            {
              data: data.details,
            },
            config.get("APP.secretkey"),
            { expiresIn: config.get("APP.sessiontime") }
          );
          res.status(200);
          res.json({
            status: 200,
            message: "Loggedin successfully!",
            data: {
              sessionID: token,
              details: data.userdetails,
              userexist: true

            },
          });
        } else {
          res.status(400);
          res.json({
            status: 400,
            message: "User does not exist"
          });
        }
      })
      .catch((err) => {
        res.status(400);
        res.json(err);
      });
  }
// }
});
module.exports = router;
