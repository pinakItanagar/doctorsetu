let mongoConnect = require('mongoclient-manager');
let config = require('config');
let async = require('async');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const md5 = require("md5");
const fetch = require('node-fetch');

module.exports = {
    checkLoginExist: (doctor, details) => {
        let projection = { _id: 0 };
        return new Promise((resolve, reject) => {
            async.forEachOf(details, (value, key, callback) => {
                projection[value] = 1;
                callback();
            }, err => {
                if (err)
                    reject(err);
                mongoConnect.getConnects().then((mongo_connections) => {
                    if (mongo_connections) {
                        let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                        db.collection("doctor").findOne(doctor, { projection }, function (err, result) {
                            if (err) {
                                reject(err);
                            } else {
                                if (result === null) {
                                    resolve({ loginExist: false });
                                } else {
                                    resolve({ loginExist: true, details: result });
                                }
                            }
                        });
                    }
                });
            });

        });
    },

    getDoctorProfile: (doctor_id) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("doctor").findOne({ "id": doctor_id }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve(result);
                            console.log (result)
                            if(result != null){
                            db.collection("user").findOne({ "userID": result.id }, function (err, user) {
                                if (err) {
                                    reject(err);
                                } else {
                                    result.accestype= user.loginType;
                                    resolve(result);
                                }
                            });
                        }else{
                            db.collection("admin").findOne({ "id": doctor_id }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    // resolve(result);
                                    if(result != null){

                                    db.collection("user").findOne({ "userID": result.id }, function (err, user) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            result.accestype= user.loginType;
                                            resolve(result);
                                        }
                                    });
                                }else{

                                    db.collection("madicalauthority").findOne({ "id": doctor_id }, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            // resolve(result);
                                            if(result != null){
        
                                            db.collection("user").findOne({ "userID": result.id }, function (err, user) {
                                                if (err) {
                                                    reject(err);
                                                } else {
                                                    result.accestype= user.loginType;
                                                    resolve(result);
                                                }
                                            });
                                        }else{
        
                                            db.collection("verifiedauthority").findOne({ "id": doctor_id }, function (err, result) {
                                                if (err) {
                                                    reject(err);
                                                } else {
                                                    // resolve(result);
                                                    if(result != null){
                
                                                    db.collection("user").findOne({ "userID": result.id }, function (err, user) {
                                                        if (err) {
                                                            reject(err);
                                                        } else {
                                                            result.accestype= user.loginType;
                                                            resolve(result);
                                                        }
                                                    });
                                                }else{
                
                                                    db.collection("hospitaladmin").findOne({ "id": doctor_id }, function (err, result) {
                                                        if (err) {
                                                            reject(err);
                                                        } else {
                                                            // resolve(result);
                                                            if(result != null){

                                                            db.collection("user").findOne({ "userID": result.id }, function (err, user) {
                                                                if (err) {
                                                                    reject(err);
                                                                } else {
                                                                    result.accestype= user.loginType;
                                                                    resolve(result);
                                                                }
                                                            });
                                                        }else{

                                                    db.collection("branchadmin").findOne({ "id": doctor_id }, function (err, result) {
                                                        if (err) {
                                                            reject(err);
                                                        } else {
                                                            // resolve(result);
                                                            if(result != null){

                                                            db.collection("user").findOne({ "userID": result.id }, function (err, user) {
                                                                if (err) {
                                                                    reject(err);
                                                                } else {
                                                                    result.accestype= user.loginType;
                                                                    resolve(result);
                                                                }
                                                            });
                                                        }
                                                        
                                                        }
                                                        
                                                    
                                                    });
                
                                                        
                                                        }
                                                        
                                                        }
                                                        
                                                    
                                                    });
                
                
                                                }
                                                }
                                            });
        
        
                                        }
                                        }
                                    });

                                }
                                }
                            });
                        }
                        }
                    });
                }
            });
        });
    },

    resetpwd:(id, pwd)=>{
        console.log("====")
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    console.log(id)
                    db.collection('user').updateOne({ "userID": id }, { "$set": { 'password':  md5(pwd) } }, { upsert: false }, function (err, result) {
                        if (err) {
                            console.log(err)
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
        
    },
    addDetails: (doctorDetails, doctorEmailID) => {
        //data.updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = { "contact.email": doctorEmailID };
                    db.collection("doctor").findOne(findQuery, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            if (result === null) {
                                db.collection("doctor").insertOne(doctorDetails, function (err, res) {
                                    if (err)
                                        reject(err);
                                    else {
                                        resolve();
                                    }
                                });
                            }
                            else {
                                reject({ message: "User already exist" });
                            }
                        }
                    });
                }
            });
        });
    },

    addDoctorUser: (doctorDetails, doctorEmailID) => {
        //data.updatedAt = moment().format(); 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    var loginID = doctorDetails.contact.email[0] || doctorDetails.contact.telephone[0]
                    let findQuery = { $and: [{ "loginID": loginID }, { "loginType": 'doctor' }] };
                    db.collection("user").findOne(findQuery, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            if (result === null) {
                                doctorDetails.id = uuidv4();
                                doctorDetails.createdAt = moment().format();
                                doctorDetails.updatedAt = moment().format();

                                if (doctorDetails.female) {
                                    doctorDetails.profilepic = "/pictures/profile/user/female-doctor-profile-icon.jpg";
                                } else {
                                    doctorDetails.profilepic = "/pictures/profile/user/male-doctor-profile-icon.jpg";

                                }

                                db.collection("doctor").insertOne(doctorDetails, function (err, res) {
                                    if (err)
                                        reject(err);
                                    else {
                                        // resolve();
                                        let userDetails = {
                                            "loginID": loginID,
                                            "userID": doctorDetails.id,
                                            "password": md5("doctor123"),
                                            "loginType": "doctor"
                                        }
                                        db.collection("user").insertOne(userDetails, function (err, res) {
                                            if (err)

                                                reject(err);
                                            else {


                                                //  resolve();

                                                //   db.doctoravaliblity.insertOne();

                                                ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (day, idx, array) {
                                                    db.collection("doctoravaliblity").insertOne({ "Doctor_id": doctorDetails.id, 'day': day, 'slots': ["9:00-9:30", "9:30-10:00", "10:30-11:00", "11:30-12:00", "12:30-13:00", "13:00-13:30", "13:30-14:00", "14:00-14:30", "14:30-15:00", "15:00-15:30", "15:30-16:00", "16:00-16:30", "16:30-17:00", "17:00-17:30", "17:30-18:00", "18:00-18:30"] }, function (err, done) {
                                                        if (idx === 6) {
                                                            setTimeout(() => {

                                                                resolve(done);
                                                            })
                                                        }

                                                    })
                                                })



                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                reject({ message: "User already exist" });
                            }
                        }
                    });
                }
            });
        });
    },


    checkSessionExist: (sessionID) => {
        return new Promise((resolve, reject) => {
            jwt.verify(sessionID, config.get('APP.secretkey'), function (err, decoded) {
                if (!err) {
                    resolve(decoded.data);
                } else {
                    reject(err.message);
                }
            });
        });

    },



    getDoctorList: (specialist, page_num, nPerPage) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //var regex = new RegExp(["^", specialist, "$"].join(""), "i");
                    var regex = new RegExp(specialist.trim(), "i");
                    //regex =new RegExp('*',regex, 'i');
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                  // var sotytype = {"appointment_date":-1}
                    db.collection("doctor").find({$and:[{
                        $or: [{ "specializations.name": regex }, { "symptoms": regex }, { "hospital_enrolled.hosp_name": regex }, { "name.middle": regex }, { "name.last": regex }, { "name.first": regex }, { "id": regex }]

                    }, {"verified":true}]}).skip((page_num-1)*nPerPage).limit(nPerPage).sort({'online': -1}).toArray(function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    },
    getDoctorAlllist:()=>{
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    
                    db.collection("doctor").find().toArray(function (err, result) {
                        
                        if (err) {
                            reject(err);
                        } else {


                            result.forEach(function (doctor, idx, array) {

                                db.collection("appointment").find({$and:[{"appointment_docid" :doctor.id,"appointment_status":"completed"}]}).count(function (err, count) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        doctor.completed=count;

                            if (idx === array.length - 1) {
                                setTimeout(() => {
                                    resolve(result);
                                },10)
                            }
                        }
                        })
                        

                        })
                    }
                    });
                }
            });
        });
    },
    getDoctoractivelist:()=>{
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    
                    db.collection("doctor").find({"verified":true}).sort({'online': -1}).toArray(function (err, result) {
                        
                        if (err) {
                            reject(err);
                        } else {


                            result.forEach(function (doctor, idx, array) {

                                db.collection("appointment").find({$and:[{"appointment_docid" :doctor.id,"appointment_status":"completed"}]}).count(function (err, count) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        doctor.completed=count;

                            if (idx === array.length - 1) {
                                setTimeout(() => {
                                    resolve(result);
                                },10)
                            }
                        }
                        })
                        

                        })
                    }
                    });
                }
            });
        });
    },

    gethospitalList:()=>{
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    
                    db.collection("hospital").find({}).toArray(function (err, result) {
                        
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    })
                }
            })
        })
    },

    getpatientlist:()=>{
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    
                    db.collection("patient").find({}).sort({'patient_name': 1}).toArray(function (err, result) {
                        
                        if (err) {
                            reject(err);
                        } else {
                            // resolve(result);
                            result.forEach(function (patient, idx, array) {
                                patient.appointment=[];
                                patient.completed=0;
                                patient.count=0
                                patient.members=[]
                                patient.latappointment="00-00-0000"

                                db.collection("member").find({"patient_id" :patient.patient_id}).toArray(function (err, members) {
                                    if (err) {
                                                reject(err);
                                            } else {
                                        patient.members=members;

                                db.collection("appointment").find({"appointment_uid" :patient.patient_id}).sort({'sortorder': -1}).toArray(function (err, appointment) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                patient.appointment=appointment;
                                
                                appointment.forEach(function (appointment, id, ary) {
                                    patient.count++;

                                    if(appointment.appointment_status == "completed"){
                                    patient.completed++;
                                    }
                                    if (id === ary.length - 1) {

                                        patient.latappointment=appointment.date;
                                    }
                                })


                //                 db.collection("appointment").find({"appointment_uid" :patient.patient_id}).count(function (err, appointmentbook) {
                //                     if (err) {
                //                         reject(err);
                //                     } else {  
                //                 patient.appointmentbook=appointmentbook;
                        }  
                        })

                //         db.collection("appointment").find({"appointment_uid" :patient.patient_id}, { "sortday": 1, "sortorder":1 }).sort({'sortorder': -1}).toArray(function (err, lastappointment) {
                //             if (err) {
                //                 reject(err);
                //             } else {  
                //                 if(lastappointment.length>= 0){
                //                     patient.latappointment=lastappointment ;

                //                 }else{
                //                     patient.latappointment=[{'date':'00-00-0000'}];

                //                 }
                // }  
                // })
                                
                            if (idx === array.length - 1) {
                                setTimeout(() => {
                                    resolve(result);
                                },10)
                            }
                        }
                        })
                        

                        })

                    }
                    });
                }
            });
        });
    },
    getDoctorListactive: (specialist) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //var regex = new RegExp(["^", specialist, "$"].join(""), "i");
                    var regex = new RegExp(specialist.trim(), "i");
                    //regex =new RegExp('*',regex, 'i');
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                  // var sotytype = {"appointment_date":-1}
                    db.collection("doctor").find({$and:[{
                        $or: [{ "specializations.name": regex }, { "symptoms": regex }, { "hospitals": regex }, { "name.middle": regex }, { "name.last": regex }, { "name.first": regex }, { "id": regex }]

                    }, {"verified":true}]}).sort({'online': -1}).toArray(function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    },
    deleteDoctor: (dbname, doctorToDelete) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).deleteOne({ "contact.email": doctorToDelete }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
    },

    updateDoctorStatus: (doctor_id, online) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    console.log( doctor_id + "----" + online)
                    db.collection('doctor').updateOne({ "id": doctor_id }, { "$set": { 'online': online } }, { upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
    },
    updateHospitalSlotDetails: (doctor_id, hospitalslotDetails, hospital_enrolled) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    // console.log( doctor_id + "----" + online)
                    db.collection('doctor').updateOne({ "id": doctor_id }, { "$set": { 'hospitalslotDetails': hospitalslotDetails } }, { upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve();
                            db.collection('doctor').updateOne({ "id": doctor_id },  {$pull:{ 'hospital_enrolled': {'hospital_id':hospital_enrolled.hospital_id} }} , { upsert: false }, function (err, result) {

                            db.collection('doctor').updateOne({ "id": doctor_id },  {$push:{ 'hospital_enrolled': hospital_enrolled }} , { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            });
                        })
                        }
                    });
                }
            });
        });
    },

    updateToken: (id, token) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                        console.log(token)
                    db.collection('doctor').updateOne({ "id": id }, { "$set": { 'token': token } }, { upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve();
                            db.collection('patient').updateOne({ "patient_id": id }, { "$set": { 'token': token } }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            });
                        }
                    });
                }
            });
        });
    },

    refundpayment: (paymentid, payment_amount) => {
        return new Promise((resolve, reject) => {
        var raw = JSON.stringify({ "amount": payment_amount * 100 });
        console.log(raw);
        var requestOptions = {
            method: 'POST',
            headers:  {
                'Authorization': 'Basic test1e4abc',
                'Content-Type': 'application/json'
              },
            body: { "amount": payment_amount },
            redirect: 'follow'
        };
        fetch("https://api.razorpay.com/v1/payments/" + paymentid + "/refund", requestOptions)
            .then(response => response.text())
            .then(result =>{
               resolve();
            })
            .catch(error => {
                reject(err);

            })

        });
    },

    capture: (id, amount) => {
        return new Promise((resolve, reject) => {
        var raw = JSON.stringify({ "amount": amount});
        console.log(raw);
        var requestOptions = {
            method: 'POST',
            headers:  {
                'Authorization': 'Basic cnpwX3Rlc3RfcEFadTZYWU1RdTJjN0g6d0VKU3lUd0FXcW9SUjhrSFBBN3RDYzky',
                'Content-Type': 'application/json'
              },
            body: raw,
            redirect: 'follow'
        };
        fetch("https://api.razorpay.com/v1/payments/"+id+"/capture", requestOptions)
            .then(response => response.text())
            .then(result =>{
               resolve();
            })
            .catch(error => {
                reject(error);

            })

        });
    },
    getpayment: () => {
        return new Promise((resolve, reject) => {
        // var requestOptions = {
        //     method: 'POST',
        //     headers:  {
        //         'Authorization': 'Basic cnpwX3Rlc3RfcEFadTZYWU1RdTJjN0g6d0VKU3lUd0FXcW9SUjhrSFBBN3RDYzky',
        //         'Content-Type': 'application/json'
        //       },
        //     body: { "amount": payment_amount },
        //     redirect: 'follow'
        // };
    //     fetch('https://api.razorpay.com/v1/payments/?count=30&skip=2', {
    //   method: 'GET',
    //   headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Basic cnpwX3Rlc3RfcEFadTZYWU1RdTJjN0g6d0VKU3lUd0FXcW9SUjhrSFBBN3RDYzky',
          
    //   }

    //     });
        
    var options = {
        'method': 'GET',
        // 'url': 'https://api.razorpay.com/v1/payments/?count=30&skip=2',
        'headers': {
          'Authorization': 'Basic cnpwX3Rlc3RfcEFadTZYWU1RdTJjN0g6d0VKU3lUd0FXcW9SUjhrSFBBN3RDYzky'
        }
      };
        fetch("https://api.razorpay.com/v1/payments/?count=30&skip=2", options)
            .then(response => response.text())
            .then(result =>{
               resolve(JSON.parse(result));
            })
            .catch(error => {
                reject(error);

            })

        
    })
},  

    getToken: (id, token) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection('doctor').findOne({ "id": id }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve();
                            console.log("doctor")
                            console.log(result);
                            if(result != null){
                                resolve(result.token);
                            }else{
                                db.collection('patient').findOne({ "patient_id": id }, function (err, result) {
                                    if (err) {
                                    reject(err);
                                } else {
                                    console.log("patient")
                                    console.log(result)
                                    if(result != null){
                                    resolve(result.token);
                                    }else{
                                        resolve(result);

                                    }
                                }
                            });
                        }
                        }
                    });
                }
            });
        });
    },
    getAppointmentDoctorId: (doctor_id, appointment_status, page_num, nPerPage, from , to) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                      
                   
                        //add limit page_num
                            var start_date = from.split("-").reverse().join("-");
                            var till_date = to.split("-").reverse().join("-");
                            start_date =start_date+"T23:59:58+00:00";
                            till_date =till_date+"T00:00:58+00:00";
                            console.log(start_date)
                            console.log("start")
                            console.log(till_date)
                            console.log("till date")


                            if(appointment_status == 'pending'){
                                // var sotytype = {"sortorder":1}
                                 var filter = {createdAt:{$lt: start_date}}
                              }else{
                                  //var sotytype = {"sortorder":1}
                                  var filter = {createdAt:{$lt: start_date,$gt: till_date}}
      
                              }


                    db.collection("appointment").find({ $and: [ { "appointment_docid": doctor_id }, { "appointment_status": appointment_status }, filter ]}).skip((page_num-1)*nPerPage).limit(nPerPage).sort({"sortorder":-1}).toArray(function (err, result) {
                        console.log( JSON.stringify(result) )
                        if (err) {
                            reject(err);
                        } else {
                            //resolve(result);
                            if (result.length == 0) {
                                resolve(result);
                            } else {
                                //var filtedresult = [];
                                result.forEach(function (appointment, idx, array) {
                                    db.collection("patient").findOne({ "patient_id": appointment.appointment_uid }, function (err, petientDetails) {
                                        let details = petientDetails;
                                        appointment.petientDetails = details;
                                        if(appointment.petientDetails == null){appointment.petientDetails = {}}

                                        
                                        if (idx === array.length - 1) {
                                            setTimeout(() => {
                                                resolve(result);
                                            },10)
                                        }

                                    })
                                })

                            }
                        }
                    });
                }
            });
        });
    },

    getAppointmentCountDoctorId: (doctor_id, from , to, state, pin) => {
        console.log(from +  "   ------ " +  to)

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    var projection = { _id: 0, id: 1, name: 1, profilepic:1,contact:1, verified:1 };
                    db.collection("doctor").findOne({ "id": doctor_id } ,function (err, doctordata) {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(from +  "   ------ " +  to)
                            var start_date = from.split("-").reverse().join("-");
                            var till_date = to.split("-").reverse().join("-");
                            start_date =start_date+"T23:59:58+00:00";
                            till_date =till_date+"T00:00:58+00:00"

                            // var findQuery = { $and: [ { "appointment_docid": doctor_id }, {createdAt:{$lt: start_date,$gt: till_date}}]}
                            // if(doctor_id == "All"){
                            //     findQuery = {createdAt:{$lt: start_date,$gt: till_date}}
                         
                            // }
                            
                            if(doctor_id == "All" &&  state == "All" &&  pin == "All"){
                                console.log("all ok")
                              var  findQuery = {createdAt:{$lt: start_date,$gt: till_date}}
            
                            }else{
                                console.log("not all ok")
                                console.log(doctor_id);
                                console.log(state)
                                console.log(pin)
                                console.log("-----------------------------")
                                var findarry =[];
                                
                                findarry.push({createdAt:{$lt: start_date,$gt: till_date}})

                                if(doctor_id != "All"){
                                    findarry.push({ "appointment_docid": doctor_id })
                                }
                                if(state != "All"){
                                    findarry.push({"contact.address" : {$regex : ".*"+state+".*", '$options' : 'i'}})
                                }
                                if( pin != "All"){
                                    findarry.push({"contact.address" : {$regex : ".*"+pin+".*", '$options' : 'i'}})
                                }
                                var findQuery = { $and: findarry}
                                console.log("==============================")
                                console.log(findQuery)
                                console.log("=========findQuery=============")

                            }
 
                    db.collection("appointment").find(findQuery).toArray(function (err, result) {
                        
                        if (err) {
                            reject(err);
                        } else {
                            //resolve(result);
                            console.log("==============================")

                            console.log(result)
                            console.log("========result======================")

                            var appointmentcount = {
                                'appointments':result,
                                'doctordetails':doctordata,
                                "pending":0,
                                "completed":0,
                                "cancelled":0,
                                "total":0
                            }
                            if (result.length == 0) {
                                console.log(result.length);
                                resolve(appointmentcount);
                            } else {
                                
                                console.log(appointmentcount)
                                result.forEach(function (appointment, idx, array) {

                                    appointmentcount.total++;
                              
                                    //if(appointment.date.split("-").reverse().join("-") >= from.split("-").reverse().join("-") && appointment.date.split("-").reverse().join("-") <= to.split("-").reverse().join("-")){

                                        if(appointment.appointment_status == 'pending'){
                                            
        
                                            appointmentcount.pending++;
                                        }else if(appointment.appointment_status == 'completed'){
                                            appointmentcount.completed++;
                                        }else{
                                            appointmentcount.cancelled++;
                                        }
                                    //}
                                        if (idx === array.length - 1) {
                                            setTimeout(() => {

                                                // resolve(appointmentcount);
                                                var findQuery = { $and: [ { "appointment_docid": doctor_id }, { $or:[{$and:[{'createdAt':{$lt: start_date,$gt: till_date}},{'appointment_status':'completed'}]},{$and:[{'createdAt':{$lt: start_date,$gt: till_date}},{ 'appointment_status':'cancled'}]},{$and:[{'createdAt':{$lt: start_date}},{ 'appointment_status':'pending'}]}] } ]}  
                                             if(doctor_id == "All"){
                                                 findQuery = { $or:[{$and:[{'createdAt':{$lt: start_date,$gt: till_date}},{'appointment_status':'completed'}]},{$and:[{'createdAt':{$lt: start_date,$gt: till_date}},{ 'appointment_status':'cancled'}]},{$and:[{'createdAt':{$lt: start_date}},{ 'appointment_status':'pending'}]}]}  
                         
                                                }
                    db.collection("appointment").find(findQuery).toArray(function (err, appointmentupdate) {
                      
                        appointmentcount.appointments=appointmentupdate;
                 resolve(appointmentcount);

                    })


                                            })
                                        }

                                    
                                })

                            }
                        }
                    });
                }
                });
                }
            });
        });
    },

    getAppointmentappointmentId: (appointmentid) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("appointment").find({ "appointment_id": appointmentid }).toArray(function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve(result);

                            db.collection("doctor").findOne({"id":result[0].appointment_docid}, function (err, doctorDetails) {
                                if (err) {
                                    reject(err);
                                } else {
                                    result[0].doctorDetails=doctorDetails;
                                    resolve(result);
                                }
                            })
                        }
                    })
                }
            })
        })

    },
    getAppointmentPatientId: (doctor_id, patient_id, appointment_status) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("appointment").find({ $and: [{ "appointment_docid": doctor_id }, { "appointment_uid": patient_id}, {"appointment_status": appointment_status }] }).toArray(function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            //resolve(result);
                            if (result.length == 0) {
                                resolve(result);
                            } else {
                                result.forEach(function (appointment, idx, array) {
                                    db.collection("patient").findOne({ "patient_id": appointment.appointment_uid }, function (err, petientDetails) {
                                        let details = petientDetails;
                                        appointment.petientDetails = details;
                                        if (idx === array.length - 1) {
                                            setTimeout(() => {

                                                resolve(result);
                                            })
                                        }

                                    })
                                })
                            }
                        }
                    });
                }
            });
        });
    },


    getDoctorSchedule: (id, day, date) => {

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = { $and: [{ "Doctor_id": id }, { "day": day }] };

                    db.collection("doctoravaliblity").findOne(findQuery, function (err, doctoravaliblity) {
                        if (err) {
                            reject(err);
                        } else {
                            //resolve(doctoravaliblity); 
                            console.log(doctoravaliblity)                         

                            let findQuery = { $and: [{ "appointment_docid": id }, { "day": day }, { "date": date }] };
                            console.log(findQuery)
                            db.collection("appointment").find(findQuery).toArray(function (err, result) {
                                
                                if (err) {
                                    reject(err);
                                } else {
                                    //resolve(result);

                                    var currentTime = new Date();
                                    var currentOffset = currentTime.getTimezoneOffset();
                                    var ISTOffset = 330;   // IST offset UTC +5:30 
                                    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
                                    // ISTTime now represents the time in IST coordinates
                                    var hoursIST = ISTTime.getHours()
                                    var minutesIST = ISTTime.getMinutes();
                                    console.log(doctoravaliblity)
                                    doctoravaliblity.avaliableslots = [];
                                    var today = currentTime.getDay();
                                    var weekday = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "sataurday"]



                                    if (result.length > 0) {

                                        result.forEach(function (book, idx, array) {
                                            for (let i = 0; i < doctoravaliblity.slots.length; i++) {
                                                let slotmin = doctoravaliblity.slots[i].substr(doctoravaliblity.slots[i].indexOf(':')+1, doctoravaliblity.slots[i].indexOf(':'));
                                                
                                                if (((doctoravaliblity.slots[i] == book.slot)  && (book.appointment_status != "cancled" ))  || ( parseInt(doctoravaliblity.slots[i].substr(0, doctoravaliblity.slots[i].indexOf(':'))) <  hoursIST  && (weekday[today] == day ))  ) {
                                                  
                                                    doctoravaliblity.slots.splice(i, 1);
                                                    
                                                    console.log("removed ")
                                                }else if(parseInt(doctoravaliblity.slots[i].substr(0, doctoravaliblity.slots[i].indexOf(':'))) == hoursIST  && (weekday[today] == day ) &&  ( minutesIST > parseInt(slotmin) ) ){
                                                    doctoravaliblity.slots.splice(i, 1);


                                                    //doctoravaliblity.avaliableslots.push(doctoravaliblity.slots[i])
                                                }

                                            }

                                            if (idx === array.length - 1) {
                                                setTimeout(() => {
                                                    console.log("send123--------------")
                                                    //doctoravaliblity.slots =doctoravaliblity.avaliableslots;
                                                    resolve(doctoravaliblity);
                                                })
                                            }


                                        })


                                    } else {
                                        //resolve(doctoravaliblity);

                                        for (let i = 0; i < doctoravaliblity.slots.length; i++) {

                                            let slotmin = doctoravaliblity.slots[i].substr(doctoravaliblity.slots[i].indexOf(':')+1, doctoravaliblity.slots[i].indexOf(':'));

                                            if (( parseInt(doctoravaliblity.slots[i].substr(0, doctoravaliblity.slots[i].indexOf(':'))) >  hoursIST ) && (weekday[today] == day) && (parseInt(slotmin) < minutesIST) ) {
                                                  
                                                 doctoravaliblity.avaliableslots.push(doctoravaliblity.slots[i])
                                             } else if((weekday[today] != day)){
                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.slots[i])


                                             }
                                             if(doctoravaliblity.slots.length-1 == i ){
                                            setTimeout(() => {
                                                console.log("send----")
                                                doctoravaliblity.slots =doctoravaliblity.avaliableslots;
                                                resolve(doctoravaliblity);
                                            })
                                        }
                                        }
                                    }



                                }
                            });

                        }

                    });



                }
            });
        })

    },

    getDoctorScheduleNew: (id, day, date) => {


        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = { $and: [{ "Doctor_id": id }, { "day": day }] };

                    db.collection("doctoravaliblity").findOne(findQuery, function (err, doctoravaliblity) {
                        if (err) {
                            reject(err);
                        } else {
                            if(doctoravaliblity.doctorslots && doctoravaliblity.doctorslots.length > 0) {
                            let findQuery = { $and: [{ "appointment_docid": id }, { "day": day }, { "date": date }] };
                            db.collection("appointment").find(findQuery).toArray(function (err, result) {
                                
                                if (err) {
                                    reject(err);
                                } else {
                                    //resolve(result);

                                    var currentTime = new Date();
                                    var currentOffset = currentTime.getTimezoneOffset();
                                    var ISTOffset = 330;   // IST offset UTC +5:30 
                                    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
                                    // ISTTime now represents the time in IST coordinates
                                    var hoursIST = ISTTime.getHours()
                                    var minutesIST = ISTTime.getMinutes();
                                    doctoravaliblity.avaliableslots = [];
                                    var today = currentTime.getDay();
                                    var weekday = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
                                    var req_minute = "";
                                    console.log( " Requested Min : " + minutesIST)      
                                              

                                    if(parseInt(minutesIST) <  10)   {
                                         req_minute = '0' + minutesIST ;
                                    } else {
                                         req_minute = minutesIST ;
                                    }

                                    doctoravaliblity.doctoravaliableslots = []

                                
                                    if (result.length > 0) {
                                        var mainresult = doctoravaliblity.doctorslots.map(a=>({...a}))

                                        console.log(doctoravaliblity.doctorslots)
                                        console.log(result)
                                            
                                            for (let i = 0; i < doctoravaliblity.doctorslots.length; i++) {
                                                console.log("==================================================================")

                                                result.forEach(function (book, idx, array) {
                                                let slotmin = doctoravaliblity.doctorslots[i].slot.substr(doctoravaliblity.doctorslots[i].slot.indexOf(':')+1, doctoravaliblity.doctorslots[i].slot.indexOf(':'));
                                                console.log(doctoravaliblity.day + "==" +weekday[today]+"-&&--" + hoursIST+"----"+ parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) +'---'+minutesIST + "---"+ parseInt(slotmin));
                                                console.log(doctoravaliblity.doctorslots[i])

                                                
                                                if ( ( (doctoravaliblity.doctorslots[i].slot == book.slot)  && ((book.appointment_status != "cancled" )  )) ){
                                                  
                                                   if(mainresult.indexOf(doctoravaliblity.doctorslots[i]) > -1){ 
                                                    console.log("------Booked------remove1")

                                                    mainresult.splice(mainresult.indexOf(doctoravaliblity.doctorslots[i]), 1);
                                                }
                                                mainresult=  mainresult.filter(function(e1){return e1.slot != doctoravaliblity.doctorslots[i].slot})   

                                                  //  mainresult.push(doctoravaliblity.doctorslots[i])
                                                    
 
                                                }else if((doctoravaliblity.day == weekday[today] )  && ( hoursIST > parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':')))) )  {

                                                    if(mainresult.indexOf(doctoravaliblity.doctorslots[i]) > -1){ 
                                                        console.log("--------houses----------remove2")

                                                        mainresult.splice(mainresult.indexOf(doctoravaliblity.doctorslots[i]), 1);
                                                                } 
                                                                
                                                                mainresult=   mainresult.filter(function(e1){return e1.slot != doctoravaliblity.doctorslots[i].slot})   
                                                      //  mainresult.push(doctoravaliblity.doctorslots[i])

 
                                                    }else if((doctoravaliblity.day == weekday[today] )  && ( hoursIST == parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))))   && (minutesIST > parseInt(slotmin)) ) {

                                                   // mainresult.push(doctoravaliblity.doctorslots[i])

                                                   if(mainresult.indexOf(doctoravaliblity.doctorslots[i]) > -1){ 
                                                    console.log("--------------minutes----remove3")

                                                       
                                                    mainresult.splice(mainresult.indexOf(doctoravaliblity.doctorslots[i]), 1);
                                                   }
                                                   mainresult=   mainresult.filter(function(e1){return e1.slot != doctoravaliblity.doctorslots[i].slot})   

                                                }else{
                                                    console.log("---not---nothing---------------")
                                                }

                                            
                                            if ((idx === (result.length-1)) && (i == (doctoravaliblity.doctorslots.length-2))) {
                                                setTimeout(() => {
                                                    doctoravaliblity.slots =doctoravaliblity.avaliableslots;
                                                    doctoravaliblity.mainresult = mainresult;
                                                    resolve(doctoravaliblity);
                                                })
                                            }
                                        


                                        })
                                    }


                                    } else {
                                        //resolve(doctoravaliblity);
                                        console.log("no appointment")
                                        for (let i = 0; i < doctoravaliblity.doctorslots.length; i++) {

                                            let slotmin = doctoravaliblity.doctorslots[i].slot.substr(doctoravaliblity.doctorslots[i].slot.indexOf(':')+1, doctoravaliblity.doctorslots[i].slot.indexOf(':'));
                                            let dslotEnd = doctoravaliblity.doctorslots[i].slot ;
                                            
                                            let arrayDslot = dslotEnd.split('-');
                                            let secondArrayDslotStart = arrayDslot[0].split(':');
                                            let doctorTimeSlotStart =  secondArrayDslotStart[0] + secondArrayDslotStart[1] ;
                                            
                                            let secondArrayDslotEnd = arrayDslot[1].split(':');
                                            let doctorTimeSlotEnd =  secondArrayDslotEnd[0] + secondArrayDslotEnd[1] ;
                                            
                                            let reqTimeSlot =  String(hoursIST) + req_minute ;
                                            console.log( "---REQUIRED TIME SLOT-- : " + reqTimeSlot) 
                                          
                                          
                                            // console.log(slotmin + " ----"+doctoravaliblity.doctorslots[i].slot +"----" + weekday[today])
                                           // console.log(parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) +"-->--"+hoursIST + "---"+ weekday[today] +"=="+ day + "---"+(parseInt(slotmin)) +"----<"+ minutesIST)
                                          
                                           if ( ( parseInt(doctorTimeSlotStart) > parseInt(reqTimeSlot)) && (weekday[today] == day) )   {
                                            doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot)
                                            doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])

                                           } else if((weekday[today] != day)) {

                                            doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot);
                                            doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])

                                            } else {
                                                console.log(weekday[today] + "---123--"+ day)  
                                            } 
                                           
                                           /*
                                            if (( parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) >  hoursIST ) && (weekday[today] == day) || (( parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) ==  hoursIST ) && (parseInt(slotmin) < minutesIST) && (weekday[today] == day)) ) {
                                                  console.log("so pushing");
                                                 doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot)
                                                 doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])

                                             }else if((weekday[today] != day)){
                                                 console.log("push here------------------")
                                                 console.log(weekday[today] + "---0000--"+ day) 
                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot);
                                                doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])



                                             }else{
                                               console.log(weekday[today] + "---123--"+ day)  
                                             }
                                             */

                                             if(doctoravaliblity.doctorslots.length-1 == i ){
                                            setTimeout(() => {
                                                console.log("send----")
                                                doctoravaliblity.mainresult =doctoravaliblity.doctoravaliableslots;
                                                resolve(doctoravaliblity);
                                            })
                                        }
                                        }
                                    }



                                }
                            });

                        }else{
                            console.log("No data avaliable");
                            let doctoravaliblity= {"mainresult":[]}
                            resolve(doctoravaliblity)

                    }


                    }

                    });



                }
            });
        })

    },

    getHospitalScheduleNew: (id, doctor_id, day,date) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {

                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = { $and: [{ "hospital_id": id }, { "day": day }, {'hospital_Doctor_id': doctor_id}] };

                    db.collection("doctoravaliblity").findOne(findQuery, function (err, doctoravaliblity) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve(doctoravaliblity);

                            if(doctoravaliblity.doctorslots.length > 0){

                            let findQuery = { $and: [{ "appointment_docid": doctor_id }, { "day": day }, { "date": date }] };
                            db.collection("appointment").find(findQuery).toArray(function (err, result) {
                                
                                if (err) {
                                    reject(err);
                                } else {
                                    //resolve(result);
                                    var currentTime = new Date();
                                    var currentOffset = currentTime.getTimezoneOffset();
                                    var ISTOffset = 330;   // IST offset UTC +5:30 
                                    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

                                    var hoursIST = ISTTime.getHours()
                                    var minutesIST = ISTTime.getMinutes();
                                    var req_minute = "";
                                    console.log( " Requested Min : " + minutesIST)      
                                              

                                    if(parseInt(minutesIST) <  10)   {
                                         req_minute = '0' + minutesIST ;
                                    } else {
                                         req_minute = minutesIST ;
                                    }
                                    doctoravaliblity.avaliableslots = [];
                                    var today = currentTime.getDay();
                                    var weekday = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
                                    doctoravaliblity.doctoravaliableslots = []
                                
                                    if (result.length > 0) {
                                        var mainresult = doctoravaliblity.doctorslots.map(a=>({...a}))

                                            for (let i = 0; i < doctoravaliblity.doctorslots.length; i++) {



                                                result.forEach(function (book, idx, array) {
                                                let slotmin = doctoravaliblity.doctorslots[i].slot.substr(doctoravaliblity.doctorslots[i].slot.indexOf(':')+1, doctoravaliblity.doctorslots[i].slot.indexOf(':'));
                                                let slothour = parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) ;
                                                let doctorTimeSlot = parseInt(slothour) + parseInt(slotmin) ;
                                                console.log( "---DOCTOR AVAILABLE TIME SLOT-- : " + doctorTimeSlot)      
                                               
                                                if ( ( (doctoravaliblity.doctorslots[i].slot == book.slot)  && ((book.appointment_status != "cancled" )  )) ){
                                                  
                                                   if(mainresult.indexOf(doctoravaliblity.doctorslots[i]) > -1){ 
                                                    mainresult.splice(mainresult.indexOf(doctoravaliblity.doctorslots[i]), 1);
                                                }
                                                mainresult=  mainresult.filter(function(e1){return e1.slot != doctoravaliblity.doctorslots[i].slot})                                                    
 
                                                }else if((doctoravaliblity.day == weekday[today] )  && ( hoursIST > parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':')))) )  {

                                                    if(mainresult.indexOf(doctoravaliblity.doctorslots[i]) > -1){ 

                                                        mainresult.splice(mainresult.indexOf(doctoravaliblity.doctorslots[i]), 1);
                                                                } 
                                                                
                                                                mainresult=   mainresult.filter(function(e1){return e1.slot != doctoravaliblity.doctorslots[i].slot})   

 
                                                    }else if((doctoravaliblity.day == weekday[today] )  && ( hoursIST == parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))))   && (minutesIST > parseInt(slotmin)) ) {


                                                   if(mainresult.indexOf(doctoravaliblity.doctorslots[i]) > -1){ 
                                                       
                                                    mainresult.splice(mainresult.indexOf(doctoravaliblity.doctorslots[i]), 1);
                                                   }
                                                   mainresult=    mainresult.filter(function(e1){return e1.slot != doctoravaliblity.doctorslots[i].slot})   

                                                }


                                                
                                            
                                            if ((idx === (result.length-1)) && (i == (doctoravaliblity.doctorslots.length-2))) {
                                                setTimeout(() => {
                                                    doctoravaliblity.slots =doctoravaliblity.avaliableslots;
                                                    doctoravaliblity.doctorslots = mainresult;
                                                    resolve(doctoravaliblity);
                                                })
                                            }
                                        


                                        })
                                    }


                                    } else {
                                        //resolve(doctoravaliblity);
                                        console.log("NO appointment")
                                        for (let i = 0; i < doctoravaliblity.doctorslots.length; i++) {

                                            let slotmin = doctoravaliblity.doctorslots[i].slot.substr(doctoravaliblity.doctorslots[i].slot.indexOf(':')+1, doctoravaliblity.doctorslots[i].slot.indexOf(':'));
                                            let slothour = parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) ;
                                            let dslotEnd = doctoravaliblity.doctorslots[i].slot ;
                                            
                                            let arrayDslot = dslotEnd.split('-');
                                            let secondArrayDslotStart = arrayDslot[0].split(':');
                                            let doctorTimeSlotStart =  secondArrayDslotStart[0] + secondArrayDslotStart[1] ;
                                            
                                            let secondArrayDslotEnd = arrayDslot[1].split(':');
                                            let doctorTimeSlotEnd =  secondArrayDslotEnd[0] + secondArrayDslotEnd[1] ;
                                            
                                            let reqTimeSlot =  String(hoursIST) + req_minute ;
                                            console.log( "---REQUIRED TIME SLOT-- : " + reqTimeSlot) 
                                           // let reqTimeSlot =  `${parseInt(hoursIST)}${req_minute}` ;
                                           // let reqTimeSlot =  hoursIST + req_minute ;
                                          //  console.log( "---DOCTOR AVAILABLE TIME  SLOT START -- : " + doctorTimeSlotStart) 
                                          //  console.log( "---DOCTOR AVAILABLE TIME  SLOT END -- : " + doctorTimeSlotEnd) 
                                          //   console.log( "---REQUIRED TIME SLOT-- : " + reqTimeSlot) 
                                         
                                          console.log( parseInt(doctorTimeSlotStart) + " > " + parseInt(reqTimeSlot) + " < " + parseInt(doctorTimeSlotEnd)) 
                                            /*
                                            if( ( (parseInt(doctorTimeSlotStart) > parseInt(reqTimeSlot) ) &&  (parseInt(reqTimeSlot) < parseInt(doctorTimeSlotEnd) ) )  && (weekday[today] == day) ) {
                                                console.log( doctorTimeSlotStart + " < " + reqTimeSlot + " < " + doctorTimeSlotEnd ) 
                                            }

                                            

                                            if( ( parseInt(doctorTimeSlotStart) < parseInt(reqTimeSlot) )  &&   ( parseInt(reqTimeSlot) < parseInt(doctorTimeSlotEnd) ) && (weekday[today] == day) ) {
                                                console.log( doctorTimeSlotStart + " < " + reqTimeSlot + " < " + doctorTimeSlotEnd )  
                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot)
                                                doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i]) */
                                           
                                            if ( ( parseInt(doctorTimeSlotStart) > parseInt(reqTimeSlot)) && (weekday[today] == day) )   {
                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot)
                                                doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])

                                            } else if((weekday[today] != day)){

                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot);
                                                doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])


                                            } else {
                                                console.log(weekday[today] + "---123--"+ day)  
                                            }     

                                          /*  
                                            if (( parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) >  hoursIST ) && (weekday[today] == day) || (( parseInt(doctoravaliblity.doctorslots[i].slot.substr(0, doctoravaliblity.doctorslots[i].slot.indexOf(':'))) ==  hoursIST ) && (parseInt(slotmin) < minutesIST) && (weekday[today] == day)) ) {


                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot)
                                                 doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])

                                             } else if((weekday[today] != day)){

                                                doctoravaliblity.avaliableslots.push(doctoravaliblity.doctorslots[i].slot);
                                                doctoravaliblity.doctoravaliableslots.push(doctoravaliblity.doctorslots[i])



                                             }else{
                                               console.log(weekday[today] + "---123--"+ day)  
                                             }

                                          */



                                            if(doctoravaliblity.doctorslots.length-1 == i ){
                                            setTimeout(() => {
                                                console.log("send----")
                                                doctoravaliblity.doctorslots =doctoravaliblity.doctoravaliableslots;
                                                resolve(doctoravaliblity);
                                            })
                                        }



                                        }
                                    }







                        }
                            });





                        }else{
                            console.log("No data avaliable");
                            let doctoravaliblity= {"mainresult":[]}
                            resolve(doctoravaliblity)

                    }


                    }

                    });



                }
            });
        })

    },


    updateDoctorVerified:(doctor_id, verified, verify) =>{
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("doctor").findOneAndUpdate({ "id": doctor_id }, { "$set": { "varified": verified,"verified": verified, "verify":verify} }, { upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    },

    doctorslotBooked: (doctorDetails) => {

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("doctorslotBooked").insertOne(doctorDetails, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    },

    doctorslotBookedNew: (doctorDetails) => {
        console.log("===NEW===")

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("doctorslotBooked").insertOne(doctorDetails, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    },

    gettodaySlot: (doctor_id, day) => {

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = { $and: [{ "id": doctor_id }, { "day": day }] };
                    db.collection("doctorslotBooked").findOne(findQuery, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    },

    generateslots: (doctor_id, addslot, clinicdetails) => {

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));

                    function addMinutes(time, minutes) {
                        var date = new Date(new Date('01/01/2015 ' + time).getTime() + minutes * 60000);
                        var tempTime = ((date.getHours().toString().length == 1) ? '0' + date.getHours() : date.getHours()) + ':' +
                          ((date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes())
                        //    + ':' +((date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : date.getSeconds());
                        return tempTime;
                      }



                      db.collection("doctoravaliblity").remove({ "Doctor_id": doctor_id}, function (err, removed) {
                        // var many = [{ "Doctor_id": doctor_id, 'day': "monday", 'doctorslots':[]},
                        // { "Doctor_id": doctor_id, 'day': "tuesday", 'doctorslots':[]},
                        // { "Doctor_id": doctor_id, 'day': "wednesday", 'doctorslots':[]},
                        // { "Doctor_id": doctor_id, 'day': "thursday", 'doctorslots':[]},
                        // { "Doctor_id": doctor_id, 'day': "friday", 'doctorslots':[]},
                        // { "Doctor_id": doctor_id, 'day': "saturday", 'doctorslots':[]},
                        // { "Doctor_id": doctor_id, 'day': "sunday", 'doctorslots':[]}]
                       // db.collection("doctoravaliblity").insertMany(many, function (err, manydata) {
                        var monday=[], tuesday=[], wednesday=[], thursday=[], friday=[],saturday=[], sunday=[];
                      addslot.forEach(function (docslot, index, slotarray) {
                        let starttime =docslot.starttime, endtime = docslot.endtime, interval =docslot.interval,days = docslot.days, avaliableMode=docslot.avaliableMode;


                      days.forEach(function (day, idx, array) {
                    
                      var starttimeinitially = [starttime];
                      var slots = []
                    
                      while (starttimeinitially < endtime ) {

                        
                        //   db.collection("doctoravaliblity").updateOne({ $and:[{"Doctor_id": doctor_id, 'day': day}]},{ "$push":{'doctorslots':{"slot":starttimeinitially +"-"+ addMinutes(starttimeinitially, interval),'type': avaliableMode}}}, function (err, done) {
                        //     if(err){
                        //         reject();
                        //     }else{  
                        //     resolve()
                        //     }

                        // })

                        var endslot = addMinutes(starttimeinitially, interval);

                        if(day == "monday") {monday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "tuesday") { tuesday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "monday") {monday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "wednesday") {wednesday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "thursday") {thursday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "friday") {friday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "saturday") {saturday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        else if(day == "sunday") {sunday.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})}
                        console.log(starttimeinitially +"---"+endslot)
                           starttimeinitially = addMinutes(starttimeinitially, interval);

                        slots.push({"slot":starttimeinitially +"-"+ endslot,'type': avaliableMode})
                          
                       


                        if(starttimeinitially >= endtime && (addslot.length-1) == index && (days.length-1) == idx){

                            console.log("End end End")
                            var addmany = [{ "Doctor_id": doctor_id, 'day': "monday", 'doctorslots':monday},
                        { "Doctor_id": doctor_id, 'day': "tuesday", 'doctorslots':tuesday},
                        { "Doctor_id": doctor_id, 'day': "wednesday", 'doctorslots':wednesday},
                        { "Doctor_id": doctor_id, 'day': "thursday", 'doctorslots':thursday},
                        { "Doctor_id": doctor_id, 'day': "friday", 'doctorslots':friday},
                        { "Doctor_id": doctor_id, 'day': "saturday", 'doctorslots':saturday},
                        { "Doctor_id": doctor_id, 'day': "sunday", 'doctorslots':sunday}]
                        console.log(addmany)
                        db.collection("doctoravaliblity").insertMany(addmany, function (err, manydata) {

                            if(err){
                                reject();
                            }else{  
                                console.log("resolve now")
                            //resolve()
                            db.collection("doctor").findOneAndUpdate({ "id": doctor_id }, { "$set": { "slotDetails": addslot, "clinicdetails":clinicdetails} }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            })
                            }
                        })
                        }
                    }
                           
                          // db.collection("doctoravaliblity").findOne({$and:[{ "Doctor_id": doctor_id},{ 'day': day}]}, function (err, haveentry) {
                             //  console.log("Finding------"+ haveentry);
                    //            if(haveentry == null){

                    //        db.collection("doctoravaliblity").insertOne({ "Doctor_id": doctor_id, 'day': day, 'doctorslots':slots}, function (err, done) {
                    //         if(err){
                    //             reject();
                    //         }else{  
                    //         resolve()
                    //         }

                    //     })
                    // }else{
                        //slots =haveentry.doctorslots.concat(slots)
                        // db.collection("doctoravaliblity").updateOne({ $and:[{"Doctor_id": doctor_id, 'day': day}]},{ "$push":{'doctorslots':slots}}, function (err, done) {
                        //     if(err){
                        //         reject();
                        //     }else{  
                        //     resolve()
                        //     }

                        // })
                    
                  //  })
                


                    })
                    })

                //})
            })
                    
                        
                }
            

                
            });
            
        });

    },


    modifydoctorProfile: (id, data) => {

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let array_data = [];
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    console.log("----")
                    console.log(data)
                    console.log("----")

                    
                    if (data.hasOwnProperty("profilepic")) {
                    if( data.profilepic.includes('profile-icon') || data.profilepic.length <5){
                        console.log("==update profile by gender===")

                    if (data.gender == "female") {
                        data.profilepic = "/pictures/profile/user/female-doctor-profile-icon.jpg";
                    } else if(data.gender == "male"){
                        data.profilepic = "/pictures/profile/user/male-doctor-profile-icon.jpg";

                    }else{
                        data.profilepic = "/pictures/profile/user/default-doctor-profile-icon.jpg";
                    }
                }
            }
                    if (data.hasOwnProperty("contact.telephone") || data.hasOwnProperty("contact.email")) {

                        //console.log(Object.keys(data).length);
                        Object.keys(data).map((key) => {
                            array_data.push(key);
                            let updatePath = key;
                            let index = Object.keys(data[key]).toString();
                            updateValue = Object.values(data[key]).toString();
         
                            db.collection("doctor").findOneAndUpdate({ "id": id }, { "$set": { [`${updatePath}.${index}`]: updateValue } }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    //resolve();
                                    db.collection("user").findOneAndUpdate({ "userID": id }, { "$set": { 'loginID': data.contact.telephone[0], 'loginID2': data.contact.email[0]} }, { upsert: false }, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            resolve();
                                        }
                                    })
                                }
                            });
                        })
                    }else {
                        if (data.hasOwnProperty("specializationsdontcheck")) {

                            let index = Object.keys(data['specializations']).toString();
                            if (data['specializations'].hasOwnProperty(index)) {
                                //console.log(data['specializations']);
                                let updatePath = Object.keys(data['specializations'][index]).toString();
                                let updateValue = Object.values(data['specializations'][index]).toString();

                                db.collection("doctor").findOneAndUpdate({ "id": id }, { "$set": { [`specializations.${index}.${updatePath}`]: updateValue } }, { upsert: false }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        //resolve();
                                        db.collection("user").findOneAndUpdate({ "userID": id }, { "$set": { 'loginID': data.contact.telephone[0], 'loginID2': data.contact.email[0]} }, { upsert: false }, function (err, result) {
                                            if (err) {
                                                reject(err);
                                            } else {
                                                resolve();
                                            }
                                        })
                                        

                                       
                                    }
                                });
                            }

                        } else {

                            db.collection("doctor").findOneAndUpdate({ "id": id }, { $set: data }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    console.log(result)
                                    //resolve();
                                    
                                    db.collection("user").findOneAndUpdate({ "userID": id }, { "$set": { 'loginID': data.contact.telephone[0], 'loginID2': data.contact.email[0]} }, { upsert: false }, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            resolve();
                                        }
                                    })
                                }
                            });
                        }

                    }

                }
            });
        });
    },

    modifypatientProfile: (id, data) => {

        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let array_data = [];
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                   
                   if (data.hasOwnProperty("profilepic")) {
                    if( data.profilepic.includes('patient-default-profile') || data.profilepic.length <5){
                    if(data.patient_gender == 'male' || data.patient_gender == 'Male'){
                        data.profilepic = "/pictures/profile/user/patient-default-profile-icon-male.jpg"
                       }else if(data.patient_gender == 'Female' || data.patient_gender == 'female'){
                           data.profilepic = "/pictures/profile/user/patient-default-profile-icon-female.jpg"

                       }else{
                           data.profilepic = "/pictures/profile/user/patient-default-profile-icon.png"

                       }
                   }
              }else{
                data.profilepic = "/pictures/profile/user/patient-default-profile-icon.png"

              }
                       
                    if (data.hasOwnProperty("contact.telephone") || data.hasOwnProperty("contact.email")) {
                       
                
                        //console.log(Object.keys(data).length);
                        Object.keys(data).map((key) => {
                            array_data.push(key);
                            let updatePath = key;
                            let index = Object.keys(data[key]).toString();
                            updateValue = Object.values(data[key]).toString();
                            db.collection("patient").findOneAndUpdate({ "patient_id": id }, { "$set": { [`${updatePath}.${index}`]: updateValue } }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                    
                                }
                            });
                        })
                    }else {
                        if (data.hasOwnProperty("specializations")) {

                            let index = Object.keys(data['specializations']).toString();
                            if (data['specializations'].hasOwnProperty(index)) {
                                //console.log(data['specializations']);
                                let updatePath = Object.keys(data['specializations'][index]).toString();
                                let updateValue = Object.values(data['specializations'][index]).toString();

                                db.collection("patient").findOneAndUpdate({ "patient_id": id }, { "$set": { [`specializations.${index}.${updatePath}`]: updateValue } }, { upsert: false }, function (err, result) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve();
                                    }
                                });
                            }

                        } else {

                            console.log("updating profile patient");
                            console.log(data)

                            db.collection("patient").findOneAndUpdate({ "patient_id": id }, { $set: data }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    console.log(result)
                                    //resolve();

                                    db.collection("user").findOneAndUpdate({ "userID": id }, { "$set": { 'loginID': data.phnumber, 'loginID2': data.email} }, { upsert: false }, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            resolve();
                                        }
                                    })
                                }
                            });
                        }

                    }

                }
            });
        })

    }
}