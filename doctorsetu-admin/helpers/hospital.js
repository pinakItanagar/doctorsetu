let mongoConnect = require('mongoclient-manager');
let config = require('config');
let async = require('async');

module.exports = {

    uploadDetails: (hospital) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("hospital").insert(hospital, function (err, res) {
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

    updatehospital: (id, data) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                        // console.log(data.updateData.doctor_enrolled);
                        db.collection('hospital').findOneAndUpdate({ "id" : id},{ "$set": data}, { upsert: false },function (err, done) {
                        if (err) {
                            reject(err);
                        } else {
                            // resolve(done);
                               
                                            function addMinutes(time, minutes) {
                                                var date = new Date(new Date('01/01/2015 ' + time).getTime() + minutes * 60000);
                                                var tempTime = ((date.getHours().toString().length == 1) ? '0' + date.getHours() : date.getHours()) + ':' +
                                                  ((date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes())
                                                return tempTime;
                                              }

                                              db.collection("doctoravaliblity").deleteMany({ "hospital_id": id}, function (err, removed) {
                                                console.log("doctor enrollted")
                                                if(data.doctor_enrolled && data.doctor_enrolled.length >0){
                                                    console.log("doctor enrollted yes")

                                                data.doctor_enrolled.forEach(function (element, lastidx, docarray) {
                                                
                                                let addslot = element.slotDetails || [];
                                                var monday=[], tuesday=[], wednesday=[], thursday=[], friday=[],saturday=[], sunday=[];
                                              addslot.forEach(function (docslot, index, slotarray) {
                                                let starttime = docslot.starttime, endtime = docslot.endtime, interval =docslot.interval,days = docslot.days, avaliableMode=docslot.avaliableMode;
                                              days.forEach(function (day, idx, array) {
                                            
                                              var starttimeinitially = [starttime];
                                              var slots = []
                                            
                                              while (starttimeinitially < endtime ) {
                        
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
                        
                                                    console.log("End end End1");
                                let addmany = [ { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "monday", 'doctorslots':monday},
                                                { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "tuesday", 'doctorslots':tuesday},
                                                { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "wednesday", 'doctorslots':wednesday},
                                                { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "thursday", 'doctorslots':thursday},
                                                { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "friday", 'doctorslots':friday},
                                                { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "saturday", 'doctorslots':saturday},
                                                { "hospital_id": id, 'hospital_Doctor_id':element.doctor.id, 'day': "sunday", 'doctorslots':sunday}]
                                                console.log(addmany);
                                                db.collection("doctoravaliblity").insertMany(addmany, function (err, manydata) {
                        
                                                    if(err){
                                                        reject();
                                                    }else{  
                                                        console.log(data.branches)
                                                        if(lastidx == docarray.length-1){

                                                    if(data.branches && data.branches.length >0){
                                                        console.log("enter loop--")

                                                        data.branches.forEach(function (branch, lastidx, brancharray) {

                                                            if(branch.doctor_enrolled.length >0){
                                                            branch.doctor_enrolled.forEach(function (element, branch_docarray_lastidx, branch_docarray) {
                                                
                                                                let addslot = element.slotDetails || [];
                                                                var monday=[], tuesday=[], wednesday=[], thursday=[], friday=[],saturday=[], sunday=[];
                                                              addslot.forEach(function (docslot, index, slotarray) {
                                                                let starttime = docslot.starttime, endtime = docslot.endtime, interval =docslot.interval,days = docslot.days, avaliableMode=docslot.avaliableMode;
                                                              days.forEach(function (day, idx, array) {
                                                            
                                                              var starttimeinitially = [starttime];
                                                              var slots = []
                                                            
                                                              while (starttimeinitially < endtime ) {
                                        
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
                                        
                                                                    console.log("End end End123");
                                                let addmany = [ { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "monday", 'doctorslots':monday},
                                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "tuesday", 'doctorslots':tuesday},
                                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "wednesday", 'doctorslots':wednesday},
                                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "thursday", 'doctorslots':thursday},
                                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "friday", 'doctorslots':friday},
                                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "saturday", 'doctorslots':saturday},
                                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "sunday", 'doctorslots':sunday}]
                                                                console.log(addmany);
                                                                db.collection("doctoravaliblity").insertMany(addmany, function (err, manydata) {
                                        
                                                                    if(err){
                                                                        reject();
                                                                    }else{  
                                                                      if(branch_docarray_lastidx == branch_docarray.length-1){
                                                                        resolve("manydata")//
                                                                      }
                
                        
                                                                    }
                                                                })
                                                                }
                                                            }
                                                            })
                                                            })  
                                                    }) 
                                                }
                                                setTimeout(() => {
                                                    if(lastidx == brancharray.length-1){
                                                        resolve("manydata")//
    
                                                    }
                                                }, 123);

                                                
                                                        })

                                                    }else{
                                                        resolve("manydata")//

                                                    }
                                                        }
                                                    }
                                                })
                                                }
                                            }
                                            })
                                            })  
                                    })    
                                }else{
                                    // resolve("updated.")
                                    console.log("doctor yes enrollted")

                                    if(data.branches && data.branches.length >0 ){
                                        data.branches.forEach(function (branch, lastidx, brancharray) {

                                            branch.doctor_enrolled.forEach(function (element, branch_docarray_lastidx, branch_docarray) {
                                
                                                let addslot = element.slotDetails || [];
                                                var monday=[], tuesday=[], wednesday=[], thursday=[], friday=[],saturday=[], sunday=[];
                                              addslot.forEach(function (docslot, index, slotarray) {
                                                let starttime = docslot.starttime, endtime = docslot.endtime, interval =docslot.interval,days = docslot.days, avaliableMode=docslot.avaliableMode;
                                              days.forEach(function (day, idx, array) {
                                            
                                              var starttimeinitially = [starttime];
                                              var slots = []
                                            
                                              while (starttimeinitially < endtime ) {
                        
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
                        
                                                    console.log("End end End123333");
                                let addmany = [ { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "monday", 'doctorslots':monday},
                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "tuesday", 'doctorslots':tuesday},
                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "wednesday", 'doctorslots':wednesday},
                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "thursday", 'doctorslots':thursday},
                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "friday", 'doctorslots':friday},
                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "saturday", 'doctorslots':saturday},
                                                { "hospital_id": branch.branch_id, 'hospital_Doctor_id':element.doctor.id, 'day': "sunday", 'doctorslots':sunday}]
                                                console.log(addmany);
                                                db.collection("doctoravaliblity").insertMany(addmany, function (err, manydata) {
                        
                                                    if(err){
                                                        reject();
                                                    }else{  
                                                      if(branch_docarray_lastidx == branch_docarray.length-1){
                                                        resolve("updated")//
                                                      }

        
                                                    }
                                                })
                                                }
                                            }
                                            })
                                            })  
                                    }) 
                                        })

                                    }else{
                                        resolve("updated")//

                                    }
                                } 

                                })
                                      
                                        }
                                    });
                        }
                    });
                
            
            });
        
    },
    getListOfHospitals: (dbname) => {
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
    gethospitaldetailsbyID: (id) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("hospital").findOne({ "id": id }, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {

                            console.log(result)
                            if(result != null){
                                resolve(result);

                            }else{

                                db.collection("hospital").findOne({ "branches.branch_id": id }, function (err, hospital) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        
                                        hospital.branches.forEach(function (branch, idx, array) {
                                            if(branch.branch_id == id){
                                            resolve(branch);

                                            }

                                        })


            
                            }
                        })
                        }
                    }
                    });
                }
            });
        });
    },
}
