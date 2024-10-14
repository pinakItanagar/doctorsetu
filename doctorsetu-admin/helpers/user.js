let mongoConnect = require('mongoclient-manager');
let config = require('config');
const moment = require('moment');
let async = require('async');
const jwt = require('jsonwebtoken');
var randomize = require('randomatic');
module.exports = {
    generateUniqueUserID: () => {
        let user_id = randomize('0', 12);
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("user").findOne({ userID: user_id }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            if (result !== null)
                                module.exports.generateUniqueUserID();
                            resolve(user_id);
                        }
                    });
                }
            });
        });
    },

    createUserorDoctor: (data) => {
        data.createdAt = moment().format();
        data.updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    // let findQuery = {};
                    // findQuery['loginID'] = data.loginID;
                    // console.log("check user in table :" + data.loginType )
                    // console.log(findQuery);
                    console.log("============")
                    // db.collection(data.loginType).findOne(findQuery, function (err, result) {
                    //     if (err) {
                    //         reject(err);
                    //     } else {
                    //         console.log(result);
                    //         console.log("=====================table data")
                    //         if (result === null) {
                                if(data.loginType == "patient"){
                                var patientData = {
                                    "patient_id": data.userID,
                                    "patient_name": data.loginID,
                                    "logintype": data.logintype,
                                    "profilepic": "/pictures/profile/user/patient-default-profile-icon.jpg",
                                    "phnumber": null,
                                    "email": null
                                }

                                if (data.logintype == 'phnumber'|| data.logintype =='phnum') {
                                    patientData.phnumber = data.loginID
                                } else {
                                    patientData.email = data.loginID
                                }
                            }else{
                                var patientData = {
                                    "id": data.userID,
                                    "name":{
                                        "first": data.loginID,
                                    "middle": null,
                                    "last": null
                                    },
                                    "logintype": data.logintype,
                                    "profilepic": "/pictures/profile/user/default-doctor-profile-icon.jpg",
                                    "contact":{
                                        "telephone":[],
                                        "email":[]
                                    },
                                    "verified":false
                                }
                                if (data.logintype == 'phnumber' || data.logintype == 'phnum') {
                                    
                                    patientData.contact.telephone.push(data.loginID);
                                } else {
                                    patientData.contact.email.push(data.loginID);
                                }

                                }

                                console.log("insert data to table "+ data.loginType);
                                console.log(patientData)
                                db.collection(data.loginType).insertOne(patientData, function (err, res) {
                                    if (err){
                                        reject(err);
                                    }else {
                                        //resolve();
                                        console.log("creating new record in user table")
                                        if( data.loginType == 'doctor'){
                                            ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (day, idx, array) {
                                                db.collection("doctoravaliblity").insertOne({ "Doctor_id": data.userID, 'day': day, 'slots': ["9:00-9:30", "9:30-10:00", "10:30-11:00", "11:30-12:00", "12:30-13:00", "13:00-13:30", "13:30-14:00", "14:00-14:30", "14:30-15:00", "15:00-15:30", "15:30-16:00", "16:00-16:30", "16:30-17:00", "17:00-17:30", "17:30-18:00", "18:00-18:30"] }, function (err, done) {
                                                    // if (idx === 6) {
                                                    //     setTimeout(() => {
                                                    console.log("creating slots for doctor")
                                                    //         resolve(done);
                                                    //     })
                                                    // }

                                                })
                                            })
                                        }
                                        db.collection("user").insertOne(data, function (err, res) {
                                            if (err)
                                                reject(err);
                                            else {
                                                resolve();

                                            }
                                        });



                                    }
                                });
                            // }else if(result != null) {
                            //     resolve();

                            // }else{
                            //     reject({ message: "User already exist" });


                            // }
                        // }
                    // });
                }
            });
        });
    },
    createUser: (data) => {
        data.createdAt = moment().format();
        data.updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = {};
                    findQuery['loginID'] = data.loginID;
                    db.collection("user").findOne(findQuery, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            if (result === null) {

                                let patientData = {
                                    "patient_id": data.userID,
                                    "patient_name": data.loginID,
                                    "logintype": data.logintype,
                                    "profilepic": "/pictures/profile/user/patient-default-profile-icon.jpg",
                                    "phnumber": null,
                                    "email": null
                                }
                                if (data.logintype = 'email') {
                                    patientData.email = data.loginID
                                } else {
                                    patientData.phnumber = data.loginID
                                }
                                db.collection("patient").insertOne(patientData, function (err, res) {
                                    if (err)
                                        reject(err);
                                    else {
                                        //resolve();

                                        db.collection("user").insertOne(data, function (err, res) {
                                            if (err)
                                                reject(err);
                                            else {
                                                resolve();

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

    adduser: (data) => {
        data.createdAt = moment().format();
        data.updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = {};
                    findQuery['loginID'] = data.loginID;
                    db.collection("user").findOne(findQuery, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            if (result === null) {

                                let userData = {
                                    "id": data.userID,
                                    "name": data.username,
                                    "logintype": data.logintype,
                                    "profilepic": "/pictures/profile/user/default-doctor-profile-icon.jpg",
                                    "phnumber": data.phnumber,
                                    "email": data.email
                                }
                                if (data.logintype = 'email') {
                                    userData.email = data.loginID
                                } else {
                                    userData.phnumber = data.loginID
                                }

                                if (data.hospital_id != null || data.hospital_id != undefined) {
                                    userData.hospital_id = data.hospital_id
                                }

                                if (data.branch_id != null || data.branch_id != undefined) {
                                    userData.branch_id = data.branch_id
                                }



                                db.collection(data.loginType).insertOne(userData, function (err, res) {
                                    if (err)
                                        reject(err);
                                    else {
                                        //resolve();
                                    var filluser = {
                                        "loginExist" : false,
                                        "userID" : data.userID,
                                        "loginID" : data.loginID,
                                        "logintype" : data.logintype,
                                        "loginType" : data.loginType,
                                        "createdAt" : data.createdAt,
                                        "updatedAt" : data.updatedAt,
                                        "password" : data.password
                                    }
                                    //===============================================================================
                                    if(data.phnumber != undefined){
                                        filluser.loginID2 = data.phnumber
                                    }
                                    //===============================================================================
                                        db.collection("user").insertOne(filluser, function (err, res) {
                                            if (err)
                                                reject(err);
                                            else {
                                                resolve();

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

    getStateList: (dbname) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).find({'country_id':101}).toArray(function (err, result) {
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
    getCityList: (dbname, state_id) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).find({'state_id':state_id}).toArray(function (err, result) {
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


    checkLoginExistallfields: (user, details, loginType, user2) => {
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
                        //let findQuery = { $and: [ user, { "loginType": 'patient' } ] };

                        let findQuery = { $and: [{$or :[ user,user2] }, { "loginType": loginType }] };
                      console.log(findQuery);
                      console.log("findQuery--")
                      console.log(user);
                      console.log(user2)
                        db.collection("user").findOne(findQuery, { projection }, function (err, result) {
                            if (err) {
                                reject(err);
                            } else {
                                console.log(result);
                                console.log("=====123")



                                if (result === null) {
                                    resolve({ loginExist: false });
                                } else {

                                    if(loginType == 'patient'){

                                        var finduser = {'patient_id':result.userID}
                                    }else if(loginType == 'doctor'){
                                        var finduser = {'id':result.userID}
                                        db.collection('doctor').updateOne(finduser, { "$set": { 'online': true } }, { upsert: false }, function (err, result) {
                                        })


                                    }else{
                                        var finduser = {'id':result.userID}

                                    }



                                    db.collection(loginType).findOne(finduser, function (err, userdetails) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            if (userdetails === null) {
                                                resolve({ loginExist: false });
                                            } else {

                                                resolve({ loginExist: true, details: result, userdetails: userdetails });
                                            }
                                        }
                                    });



                                }
                            }
                        });
                    }
                });
            });

        });
    },
    checkLoginExist: (user, details, loginType) => {
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
                        //let findQuery = { $and: [ user, { "loginType": 'patient' } ] };

                        let findQuery = { $and: [user, { "loginType": loginType }] };
                        db.collection("user").findOne(findQuery, { projection }, function (err, result) {
                            if (err) {
                                reject(err);
                            } else {
                                console.log(result)



                                if (result === null) {
                                    resolve({ loginExist: false });
                                } else {

                                    if(loginType == 'patient'){

                                        var finduser = {'patient_id':result.userID}
                                    }else{
                                        var finduser = {'id':result.userID}

                                    }


                                    console.log(finduser);
                                    console.log("============================================")
                                    db.collection(loginType).findOne(finduser, function (err, userdetails) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            if (userdetails === null) {
                                                resolve({ loginExist: false });
                                            } else {

                                                resolve({ loginExist: true, details: result, userdetails: userdetails });
                                            }
                                        }
                                    });



                                }
                            }
                        });
                    }
                });
            });

        });
    },

    checkLoginExistforotp: (user, details, loginType,user2) => {
        
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
                        //let findQuery = { $and: [ user, { "loginType": 'patient' } ] };

                        let findQuery = { $and: [{$or :[ user,user2] }, { "loginType": loginType }] };
                        console.log("check exitst in user tabel")
                        console.log(findQuery);
                        console.log(projection);
                        console.log(findQuery)
                        console.log("=====coming here===")

                        db.collection("user").findOne(findQuery, { projection }, function (err, result) {
                            if (err) {
                                reject(err);
                            } else {
                                if (result === null) {
                                    console.log("this user not in user table")
                                    resolve({ loginExist: false });
                                } else {
                                    console.log("PROJECTION-C: " + result.createdAt);
                                    console.log("exist in user table")

                                    if(loginType == 'patient'){

                                        var finduser = {'patient_id':result.userID}
                                    }else{
                                        var finduser = {'id':result.userID}
                                        db.collection('doctor').updateOne(finduser, { "$set": { 'online': true } }, { upsert: false }, function (err, result) {
                                        })

                                    }
                                    


                                    db.collection(loginType).findOne(finduser, function (err, userdetails) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            if (userdetails === null) {
                                                resolve({ loginExist: false });
                                            } else {
                                                console.log("added newexist in  table --> " + loginType)
                                                if(loginType == 'doctor'){
                                                    resolve({ loginExist: true, id:userdetails.id, details: result, userdetails: userdetails });

                                                }else{
                                                    resolve({ loginExist: true, patient_id:userdetails.patient_id, details: result, userdetails: userdetails });


                                                }

                                            }
                                        }
                                    });



                                }
                            }
                        });
                    }
                });
            });

        });
    },
    modifyUser: (user, data) => {
        data.updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("user").findOneAndUpdate(user, { $set: data }, { upsert: false }, function (err, result) {
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
    modifyUserprofilpic: (userID, picpath, usertype) => {

        console.log(userID);
        console.log(picpath);
       //updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                  
                    
                    if(usertype  == "doctor"){
                    var findQuery = {"id" : userID};
                }else if(usertype  == "patient"){
                    var findQuery = {"patient_id" : userID}
                }else{
                    var findQuery = {"member_id" : userID}
                }

                    db.collection(usertype).findOne(findQuery, function (err, result) {

                        if (err) {
                            reject(err);
                        } else {
                           // resolve();
                           

                            console.log(result);
                            console.log("=============DOCTOR==============")
                           if( result != null){
                            console.log("============= update to DOCTOR==============")
                            

                            db.collection(usertype).findOneAndUpdate(findQuery, { $set: {"profilepic":picpath} }, { upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    console.log("updated doc profile")
                                    console.log(result)
                                    resolve();
                                }
                            });

                           }else{
                               
                            db.collection("patient").find({"patient_id" : userID}, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                   // resolve();
                                   console.log(result);
                            console.log("============patient====================")
        
                                   if( result != null){
                                      
                                    db.collection("patient").findOneAndUpdate({"patient_id" : userID}, { $set: {"profilepic" :picpath} }, { upsert: false }, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            
                                            resolve();
                                        }
                                    });
        
                                   }else{
                                       console.log("======MEMBER===================")
                                    //    resolve("no data record")
                                    db.collection("member").find({"member_id" : userID}, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                           // resolve();
                                           console.log("===========================")
                                            console.log(result);
                                            console.log("===========================")

                                           if( result != null){
                                              
                                            console.log("not null---" + picpath)
                                            db.collection("member").findOneAndUpdate({"member_id" : userID}, { $set: {"member_image" :picpath} }, { upsert: false }, function (err, result) {
                                                if (err) {
                                                    reject(err);
                                                } else {
                                                    
                                                    resolve();
                                                }
                                            });
                
                                           }else{
                                              resolve("no data record")
                                           }
                                    }
                                })


                                   }
                            }
                        })
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

    }
}
