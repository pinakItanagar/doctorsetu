let mongoConnect = require('mongoclient-manager');
let config = require('config');
let async = require('async');
var mongo = require('mongodb');

module.exports = {

    uploadDetails: (hospital) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("hospitls").insert(hospital, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            })
        })
    },
    getList: (dbname) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).find({'status':'active'}).toArray(function (err, result) {
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

    getAllList: (dbname) => {
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

    

    deleteSymptom: (dbname, SymptomToDelete) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    var _id = new mongo.ObjectID(SymptomToDelete);

                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).deleteOne({ "_id": _id }, function (err, result) {
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


    filepathtest: () => {
        return new Promise((resolve, reject) => {
          let picpath = 'test.jpg';
          let doctordocumentpath = path.join(__basedir, 'public/uploads', picpath);
          console.log(doctordocumentpath)
        });
    }
}
