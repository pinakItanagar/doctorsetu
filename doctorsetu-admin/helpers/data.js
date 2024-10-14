let mongoConnect = require('mongoclient-manager');
let config = require('config');
const moment = require('moment');
let async = require('async');


module.exports = {
   
    getData: (dbname) => {
        //console.log(dbname)
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                        db.collection(dbname).find().toArray(function(err, result) { 
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

    getDoctorList: (specialist) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                        db.collection("doctorInfo").find({
                            "specializations.name": specialist
                        }).toArray(function(err, result) { 
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
   
}
