let mongoConnect = require('mongoclient-manager');
let config = require('config');
let async = require('async');
var mongo = require('mongodb');
const md5 = require('md5');


module.exports = {

    add: (specialization, specialztnName) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let findQuery = { "name": specialztnName };
                    db.collection("specialization").findOne(findQuery, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            if (result === null) {
                                db.collection("specialization").insertOne(specialization, function (err, res) {
                                    if (err)
                                        reject(err);
                                    else {
                                        resolve();
                                    }
                                });
                            }
                            else {
                                reject({ message: "Specialization already exist" });
                            }
                        }
                    });

                }
            })
        })
    },
    getListOfSpecialization: (dbname) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).find({ "status": "active" }).toArray(function (err, result) {
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
    getAllListOfSpecialization: (dbname) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).find({}).toArray(function (err, result) {
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
    getaccesslist: (dbname) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).find().toArray(function (err, result) {
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

    getuserlist: (dbname) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection(dbname).find().toArray(function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            var data = result.filter(obj => (obj.loginType != "doctor" && obj.loginType != "patient"));

                            data.forEach(function (user, idx, array) {
                                console.log()

                                db.collection(user.loginType).findOne({"id" :user.userID},function (err, username) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        
                             user.username=username.name;

                            if (idx === array.length - 1) {
                                setTimeout(() => {
                                    resolve(data);
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
    getuserdetails:(loginType, userID,) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection(loginType).findOne({'id':userID},function (err, result) {
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
    

    updateuserdetails:(loginType, userID, name, email, pwd, phnum, hospital_id, branch_id) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    var userData = {
                        "id": userID,
                        "name": name,
                        "logintype": 'email',
                        "profilepic": "/pictures/profile/user/default-doctor-profile-icon.jpg",
                        "phnumber": phnum,
                        "email": email,
                        'hospital_id':hospital_id,
                         'branch_id': branch_id
                    }
                    var loginTypenew = loginType
                    var uid =userID
                    if(pwd != null && phnum !=null){
                        pwd = md5(pwd);
                        var find =  { $set: { "loginID": email, 'loginID2': phnum, 'password':pwd, 'loginType': loginType} }
                    }else if(pwd != null){
                        pwd = md5(pwd);
                        var find =  { $set: { "loginID": email, 'password':pwd, 'loginType': loginType} }

                    }else{
                        var find = { $set: { "loginID": email, 'loginType': loginType} }

                    }
                    
                    db.collection(loginType).findOneAndUpdate({ "id": userID },find,{ upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(result)
                            // resolve();
console.log("userID ---" + userID +'-'+ uid)
console.log(userData)
                            db.collection('user').findOne({'userID':userID},function (err, loginType) {
                                if (err) {
                                    reject(err);
                                } else {
                                    // resolve(result);
                                    console.log(loginType)
                                    console.log("=====loginType")
                                    if( loginType ==  loginType.loginType){
                                
                            
                            db.collection('user').findOneAndUpdate({ "userID": userID },find,{ upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    console.log(result)
                                    resolve();
                                }
                            });
                        }else{
                           
                            db.collection('user').findOneAndUpdate({ "userID": userID },find,{ upsert: false }, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    console.log(result)
                                    // resolve();
                                    db.collection(loginType.loginType).deleteOne({ "id": userID }, function (err, result) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            // resolve();

                                            
                                            // if (userData.logintype = 'email') {
                                            //     userData.email = data.loginID
                                            // } else {
                                            //     userData.phnumber = data.loginID
                                            // }
                                            db.collection(loginTypenew).insertOne(userData, function (err, res) {
                                                if (err)
                                                    reject(err);
                                                else {
                                                    resolve();
                                        }
                                    })
                                }
                                    });
                                }
                            });


                        }

                    }
                  
                    })
                    
                        }
                    });
                }
            });
        });
    },
    saveaccesslist: (access, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("access").remove({}, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve();
                            db.collection("access").insertMany(data , function (err, done) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            })


                        }
                    });
                }
            });
        });
    },
    modifySpecialization: (specialization, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("specialization").findOneAndUpdate({ "name": specialization }, { $set: data }, { upsert: true, returnNewDocument: true }, function (err, result) {
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

    updatePatientDocuments: (appointment_id, document_file) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    var doc = {}
                    //document_name.forEach((key, i) => doc[key] = document_file[i]);
    
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
            
                    db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id }, { $set: { "document_file": document_file} },{ upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(result)
                            resolve();
                        }
                    });
                }
            });
        });
    },

    updatePatientDocumentsWithFiles: (appointment_id, document_file) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    var doc = {}
                    //document_name.forEach((key, i) => doc[key] = document_file[i]);
    
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    
                    db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id }, { $set:  document_file },{ upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(result)
                            resolve();
                        }
                    });
                }
            });
        });
    },
    updateDoc: (doctor_id, speciality) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    var doc = {}    

                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    
                    // filearray.push(fileName);
                    console.log(speciality)
                    console.log("======123==")
                    // db.collection("doctor").updateOne({"id":doctor_id},{$set:{"doctor_documents":"" }}, false, true, function (err1, updateresult) {
                       
                    //    console.log("--------")
                    //    console.log(err1)
                    //    console.log(updateresult)
                    //     if (err1) {
                    //         reject(err);
                    //     } else {
                        console.log("doctor_id  --" + doctor_id)
                        db.collection("doctor").findOneAndUpdate({ "id": doctor_id }, { $set: { "doctor_documents": speciality} },{ upsert: false }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(result)
                            resolve(result.value);
                        }
                    });
                // }
               // })
                }
            });
        });
    },



    
    specializationAdd: (specialization, icon, status) => {
        console.log(icon)
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("specialization").find({}).count(function (err, count) {
                        console.log(count)
                        db.collection("specialization").insertOne({ "name" : specialization, "icon" : icon, "id" : count+1, "status" : status} , function (err, done) {

                        if (err) {
                            reject(err);
                        } else {
                            resolve(done);
                        }
                    });
                })
                }
            });
        });
    },
    symptomUpdate : (id,symptom) => {
        console.log("update symptom")
        console.log(id +"----"+ symptom)
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    // id = "ObjectId("+id+")"
                    var _id = new mongo.ObjectID(id);
                
                        db.collection("symptoms").findOneAndUpdate({ "_id" : _id},{"$set":symptom}, { upsert: false }, function (err, done) {

                        if (err) {
                            reject(err);
                        } else {
                            resolve(done);
                        }
                    });
                
                }
            });
        });
    },

    specializationUpdate: (id, specialization) => {
        console.log("specialization helper");
        console.log(specialization)
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    var _id = new mongo.ObjectID(id);

                            db.collection("specialization").findOneAndUpdate({ "_id" : _id},{"$set":specialization}, { upsert: false }, function (err, done) {

                        if (err) {
                            reject(err);
                        } else {
                            resolve(done);
                        }
                    });
                
                }
            });
        });
    },
    symptomAdd: (symptom, icon, status) => {
        console.log(icon)
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("symptoms").find({}).count(function (err, count) {
                        console.log(count)
                    
                        db.collection("symptoms").insertOne({"sym_name" : symptom,"sym_desc" : "","sym_icon" : icon,"status" : status} , function (err, done) {

                        if (err) {
                            reject(err);
                        } else {
                            resolve(done);
                        }
                    });
                })
                }
            });
        });
    },
    deleteSpecialization: (dbname, specializationToDelete) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).deleteOne({ "name": specializationToDelete }, function (err, result) {
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

    deleteVerify: (dbname, deleteVerify) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).deleteOne({ "name": deleteVerify }, function (err, result) {
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

    deleteuser  : (dbname, userID) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).deleteOne({ "id": userID }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve();
                            db.collection('user').deleteOne({ "userID": userID }, function (err, result) {
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
}
