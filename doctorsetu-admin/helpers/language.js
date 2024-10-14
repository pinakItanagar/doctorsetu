let mongoConnect = require('mongoclient-manager');
let config = require('config');
let async = require('async');

module.exports = {

    
    getList: (dbname) => {
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

    
    addlanguage: (dbname, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection(dbname).find({}).count(function (err, count) {
                        console.log(count)
                        db.collection(dbname).insertOne({ "sl" : count+1, "name" : data.name, "code" : data.code, "status" : data.status }, function (err, done) {

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

    addverify: (dbname, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection(dbname).find({}).count(function (err, count) {
                        console.log(count)
                        db.collection(dbname).insertOne({ "id" : count+1, "name" : data.name, "status" : data.status }, function (err, done) {

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
    
    updatelanguage: (dbname, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                        console.log(data);
                        db.collection(dbname).findOneAndUpdate({ "sl" : data.sl},{ "$set": {"name" : data.name, "code" : data.code, "status" : data.status }}, { upsert: false },function (err, done) {
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


    updateverify: (dbname, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                        console.log(data);
                        db.collection(dbname).findOneAndUpdate({ "id" : data.id},{ "$set": {"name" : data.name, "status" : data.status }}, { upsert: false },function (err, done) {
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

    deleteLanguage: (dbname, languageToDelete) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    //db.collection("specialization").findOne({"id":"1"},function (err, result) {
                    db.collection(dbname).deleteOne({ "name": languageToDelete }, function (err, result) {
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
}
