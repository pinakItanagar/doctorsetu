let mongoConnect = require('mongoclient-manager');
let config = require('config');
let async = require('async');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const nodeHtmlToImage = require('node-html-to-image');
const imageToBase64 = require('image-to-base64');
var base64Img = require('base64-img');
var randomize = require('randomatic');

var fs = require('fs');
var pdf = require('html-pdf');
const { timeStamp } = require('console');

var imagesToPdf = require("images-to-pdf")

 


module.exports = {

    addAppointment: (appointmentDetails) => {
        //data.updatedAt = moment().format();
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    appointmentDetails.appointment_status = "pending";
                    //appointmentDetails.appointment_id = uuidv4();
                    db.collection("appointment").countDocuments({}, function (error, numOfDocs) {
                        let count = 6002000 + numOfDocs
                        console.log(numOfDocs)
                        appointmentDetails.appointment_id = 'APT_' + count

                        if (appointmentDetails) {
                            console.log(appointmentDetails)
                            db.collection("appointment").insertOne(appointmentDetails, function (err, res) {
                                if (err)
                                    reject(err);
                                else {
                                    resolve(appointmentDetails);
                                }
                            });
                        }

                        else {
                            reject({ message: "Failed to make apointment" });
                        }
                    })

                }
            });
        });
    },

    getAppointmentPatientId: (patient_id, appointment_status, page_num, nPerPage) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));

                    db.collection("appointment").find({ $and: [{ "appointment_uid": patient_id }, { "appointment_status": appointment_status }] }).skip((page_num-1)*nPerPage).limit(nPerPage).sort({"appointment_date":1}).toArray(function (err, result) {
                        if (err) {
                            reject(err);
                        } else {

                            if (result.length == 0) { resolve(result); } else {

                                result.forEach(function (appointment, idx, array) {
                                    db.collection("doctor").findOne({ "id": appointment.appointment_docid }, function (err, doctordeatils) {
                                        if(doctordeatils ==null){ doctordeatils={}}
                                        let details = doctordeatils;

                                        appointment.doctorDetails = details;
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
    getmemberdetails: (id) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    console.log(id)
                    db.collection("member").find({$or: [{"member_id":id}, {"patient_id":id}]}).toArray(function (err, result) {
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
    addMember: (data) => {  
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    data.member_id = randomize('0', 12);
                    data.createdAt = moment().format();
                    data.updatedAt = moment().format();

                    if (data.hasOwnProperty("profilepic")) {
                        if( data.profilepic.includes('patient-default-profile') || data.profilepic.length <5){
                        if(data.member_gender == 'male' || data.member_gender == 'Male'){
                            data.profilepic = "/pictures/profile/user/patient-default-profile-icon-male.jpg"
                           }else if(data.member_gender == 'Female' || data.member_gender == 'female'){
                               data.profilepic = "/pictures/profile/user/patient-default-profile-icon-female.jpg"
    
                           }else{
                               data.profilepic = "/pictures/profile/user/patient-default-profile-icon.png"
    
                           }
                       }
                  }else{
                    data.profilepic = "/pictures/profile/user/patient-default-profile-icon.png"

                  }
                
                    db.collection("member").insertOne(data, function (err, res) {
                        if (err)
                            reject(err);
                        else {
                            resolve(res);
                        }
                    });
                }
            });
        });
    },

    updatemember: (member_id, data ) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    data.updatedAt = moment().format();

                    if (data.hasOwnProperty("profilepic")) {
                        if( data.profilepic.includes('patient-default-profile') || data.profilepic.length <5){
                        if(data.member_gender == 'male' || data.member_gender == 'Male'){
                            data.profilepic = "/pictures/profile/user/patient-default-profile-icon-male.jpg"
                           }else if(data.member_gender == 'Female' || data.member_gender == 'female'){
                               data.profilepic = "/pictures/profile/user/patient-default-profile-icon-female.jpg"
    
                           }else{
                               data.profilepic = "/pictures/profile/user/patient-default-profile-icon.png"
    
                           }
                       }
                  }else{
                    data.profilepic = "/pictures/profile/user/patient-default-profile-icon.png"

                  }

                    db.collection("member").findOneAndUpdate({ "member_id": member_id } , { $set: data  }, { upsert: false }, function (err, result) {
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

    updateEprescription: (appointment_id, fileName, observation, analysis, presciption) => {
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let filrarray = [];
                    // filearray.push(fileName);
                    db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id }, { $set: { "eprescription": fileName, 'appointment_status': 'completed', "observation": observation, "analysis":analysis, "presciption":presciption } }, function (err, result) {
                        console.log("=======")
                        console.log(err)
                        console.log("err")
                        console.log(result)
                        console.log("=======")


                        if (err) {
                            reject(err);
                        } else {
                            console.log(result)
                            resolve(result.values);
                        }
                    });
                }
            });
        });
    },


    getPatientProfile: (patient_id) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("patient").findOne({ "patient_id": patient_id }, function (err, result) {
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
    updateAppoinement: (appointment_id, data ) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let filrarray = [];
                    // filearray.push(fileName);
                    console.log("appointment_id " )
                    
                    db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id } , { $set: data  }, { upsert: false }, function (err, result) {
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

    cancelappoinement: (appointment_id, description ) => { 
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {
                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    let filrarray = [];
                    // filearray.push(fileName);
                    console.log("appointment_id " + description)
                    
                    db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id } , { $set: {"appointment_status": "cancled", "appointment_cancelres" : description}  }, { upsert: false }, function (err, result) {
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
    geteprescriptionpdf: (appointment_id, current_time) => { 
        console.log("geteprescriptionpdf")
        return new Promise((resolve, reject) => {
            mongoConnect.getConnects().then((mongo_connections) => {

                if (mongo_connections) {
                    let db = mongo_connections['app'].db(config.get('DB.datastore.name'));
                    db.collection("appointment").findOne({"appointment_id" : appointment_id} , function (err, appointment) {
                        if (err) {
                            reject(err);
                        }else{
                            console.log(appointment)
                           if(appointment.eprescription && !appointment.reportpdf){
                        //    if(appointment){
                            
                 db.collection("doctor").findOne({"id" : appointment.appointment_docid } , function (err, doctor) {
                 db.collection("patient").findOne({"patient_id" : appointment.appointment_uid} , function (err, patient) {
                    if(appointment.appointment_mid != "self"){
                        patient.patient_address = appointment.appointment_patientdata.user_address;
                    }
                    var header_height ='64mm'


                    if(appointment.appointment_hosid){

                        db.collection("hospital").findOne({ "id": appointment.appointment_hosid }, function (err, hospitalAddress) {
                            if (err) {
                                reject(err);
                            } else {
                                if(hospitalAddress != null){
                                    doctor.hostipal = hospitalAddress.hosp_name+', '+hospitalAddress.address;

                                    if(hospitalAddress.phone){
                                        header_height ='76mm'
                                        hospitalAddress.phone ="Ph:"+hospitalAddress.phone
                                    }else{
                                        hospitalAddress.phone=''
                                    }
                                    if(hospitalAddress.email){
                                        header_height ='76mm'

                                        hospitalAddress.email ="Email:"+hospitalAddress.email
                                    }else{
                                        hospitalAddress.email=''
                                    }




                                    // if(appointment.appointment_hosid  != undefined && appointment.appointment_hosid  != '' && appointment.appointment_hosid.length >3 ){
                                        //hospital
                                        hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+hospitalAddress.hosp_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>                       <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+''+" <span style='font-size:10px'>"+hospitalAddress.address+" </h2> </td> </tr>                                 <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+''+" <span style='font-size:10px'>"+hospitalAddress.phone+' '+ hospitalAddress.email +"</h2> </td> </tr>"

                                            // }else if(appointment.appointment_subtype.toUpperCase() == 'clinic'){
                                            //     //clinic
                                            //         hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>"
                                            //     }else{  
                                            //         // doctor online
                                            //  hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>"
                                            //     }


                                }else{
                                    db.collection("hospital").findOne({ "branches.branch_id": appointment.appointment_hosid }, function (err, hospitalAddress) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            hospitalAddress.branches.forEach(function (branch, idx, array) {
                                                // if(branch.branch_id == id){

                                                if(branch.branch_id == appointment.appointment_hosid){
                                                    doctor.hostipal = branch.hosp_name+', '+branch.address;

                                                    if(branch.phone){
                                                        header_height ='76mm'
                                                        branch.phone ="Ph:"+branch.phone
                                                    }else{
                                                        branch.phone=''
                                                    }
                                                    if(branch.email){
                                                        header_height ='76mm'
                
                                                        branch.email ="Email:"+branch.email
                                                    }else{
                                                        branch.email=''
                                                    }

                                                    // if(appointment.appointment_hosid  != undefined && appointment.appointment_hosid  != '' && appointment.appointment_hosid.length >3 ){
                                                    //     //hospital
                                                    hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+branch.hosp_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>                       <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+''+" <span style='font-size:10px'>"+branch.address+" </h2> </td> </tr>                                 <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+''+" <span style='font-size:10px'>"+branch.phone+' '+" "+branch.email +"</h2> </td> </tr>"
                                                    //         }else if(appointment.appointment_subtype.toUpperCase() == 'clinic'){
                                                                //clinic
                                                                //     hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>"
                                                                // }else{  
                                                                    // doctor online
                                                            //  hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>"
                                                                // }
                
                                                    
                                                }
                                            })
                                }
                            })
                            }
                        }
                        });

                    }else if(appointment.appointment_subtype == 'clinic'){
                        var doctor_address = appointment.appointment_doctordata.doc_clinicdetails.doc_clinic_name + ', '+appointment.appointment_doctordata.doc_clinicdetails.doc_clinic_address;
                        if(appointment.appointment_doctordata.doc_mobile){
                            header_height ='76mm'

                            appointment.appointment_doctordata.doc_mobile ='Ph:'+appointment.appointment_doctordata.doc_mobile
                        }else{
                            appointment.appointment_doctordata.doc_mobile =''
                        }

                        if(appointment.appointment_doctordata.doc_email){
                            header_height ='76mm'

                            appointment.appointment_doctordata.doc_email ='Email:'+appointment.appointment_doctordata.doc_email
                        }else{
                            appointment.appointment_doctordata.doc_email =''
                        }

                        hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+appointment.appointment_doctordata.doc_clinicdetails.doc_clinic_name+" <span style='font-size:10px'>"+" </h2> </td> </tr>                       <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+''+" <span style='font-size:10px'>"+appointment.appointment_doctordata.doc_clinicdetails.doc_clinic_address+" </h2> </td> </tr>                                 <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+''+" <span style='font-size:10px'>Ph:"+appointment.appointment_doctordata.doc_mobile+' '+"Email:"+appointment.appointment_doctordata.doc_email +"</h2> </td> </tr>"


                    }else{

                        header_height ='64mm'

       if(doctor.contact.address) {
        var doctor_address = doctor.contact.address.line1 || ""; 
        if(doctor.contact.address.line2){
            doctor_address = doctor_address +" "+doctor.contact.address.line2 
        }
        if(doctor.contact.address.line3){
            doctor_address = doctor_address +""+doctor.contact.line3   
        }
        if(doctor.contact.address.city){
            doctor_address = doctor_address +" "+doctor.contact.city   
        }
        if(doctor.contact.address.state){
            doctor_address = doctor_address +" "+doctor.contact.state   
        }
        }else if(doctor.contact.address != undefined){

        var doctor_address = doctor.contact.address.trim();
        
        }else{
            var doctor_address ="";

        }






        var doctor_name;
        if(doctor.name.first != null){
         doctor_name = doctor.name.first
        }
        if(doctor.name.middle != null){
         doctor_name = doctor_name+""+doctor.name.middle
        }
        if(doctor.name.last != null){
         doctor_name = doctor_name+""+doctor.name.last
        }

        var hospitaldetails = "<tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+''+" </h2> </td> </tr>";

    }
        doctor.specializations = doctor.specializations ||  {"degree": "", "name":""};
        doctor.contact.email[0] = doctor.contact.email[0] || "";
        doctor.contact.telephone[0] = doctor.contact.telephone[0] || "";
       
        doctor.hostipal = doctor.hostipal || doctor_address;
     
        var doctor_name;
       if(doctor.name.first != null){
        doctor_name = doctor.name.first
       }
       if(doctor.name.middle != null){
        doctor_name = doctor_name+""+doctor.name.middle
       }
       if(doctor.name.last != null){
        doctor_name = doctor_name+""+doctor.name.last
       }
       doctor.doc_smcregno = doctor.doc_smcregno || "";

            // var header_height ='64mm'

            if(patient.patient_address == undefined || patient.patient_address == null ||  patient.patient_address == "undefined"){
                patient.patient_address="";
            }else{
                //patient.patient_address = "The the sdfhfdsjhgfsdjhfsjhdjfhgfdsh dgsjhdsgjh dsgjhdjg dgkjhgdskjgd dgsjhdgsjhgds dgsjkhgdsjgds dgkjhdgjkhgdkj" + patient.patient_address
            console.log(patient.patient_address.length)
            if(patient.patient_address.length < 50){
                // var header_height ='64mm'
                // var header_height ='74mm'

            }else
                if(patient.patient_address.length > 86 && patient.patient_address.length < 100) {
                    console.log("height 74")

                    // header_height ='74mm'
                } else{ 
                        console.log("height 333 74")
                        patient.patient_address = patient.patient_address.substring(0,100) + "...";
                        // header_height ='74mm'
                    }   
            }



    //new member added        
    if(appointment.appointment_mid != "self"){
patient.patient_name=appointment.appointment_patientdata.user_name;

if(appointment.appointment_patientdata.user_gender == undefined ||appointment.appointment_patientdata.user_gender == null || appointment.appointment_patientdata.user_gender == "undefined" || appointment.appointment_patientdata.user_gender == "" ){
    patient.patient_gender ="___";
}else if(appointment.appointment_patientdata.user_gender == 'male'){
    patient.patient_gender='Male'
}else if(appointment.appointment_patientdata.user_gender == 'female'){
    patient.patient_gender='Female'
}else{
    patient.patient_gender=appointment.appointment_patientdata.user_gender;

}

// patient.patient_age=patient.appointment_patientdata.user_dob; 
if(appointment.appointment_patientdata.hasOwnProperty('user_dob')){
    patient.age =  appointment.appointment_patientdata.user_dob.substr(appointment.appointment_patientdata.user_dob.length-4);
    patient.age = parseInt(patient.age);
    patient.age = (2020- patient.age) + " Yrs" ;
    }else{
   patient.age ="__Yrs"
   }

// patient.patient_height=appointment.appointment_patientdata.user_height;  

if(appointment.appointment_patientdata.user_weight == undefined || appointment.appointment_patientdata.user_weight == null ){
    patient.patient_weight ="Weight: __Kgs";
}else{
    patient.patient_weight = "Weight: "+appointment.appointment_patientdata.user_weight + "Kgs"
}
// patient.patient_weight=appointment.appointment_patientdata.user_weight; 
if(appointment.appointment_patientdata.user_height == undefined || appointment.appointment_patientdata.user_height == null || appointment.appointment_patientdata.user_height == "undefined" ){
    patient.patient_height ="Height:__cms";
}else{
    patient.patient_height = "Height: "+appointment.appointment_patientdata.user_height + "cms"
} 


            }else{


                if(patient.hasOwnProperty('patient_dob')){
                    patient.age =  patient.patient_dob.substr(patient.patient_dob.length-4);
                    patient.age = parseInt(patient.age);
                    patient.age = (2020- patient.age) + " Yrs" ;
                    }else{
                   patient.age ="__Yrs"
                   }
                   console.log(patient)
                   if(patient.patient_gender == undefined || patient.patient_gender == null || patient.patient_gender == "undefined" ){
                       patient.patient_gender ="___";
                   }else if(patient.patient_gender == 'male'){
                    patient.patient_gender ='Male';
                   }else if(patient.patient_gender == 'Female'){
                    patient.patient_gender = 'Female';

                   }
                   if(patient.patient_weight == undefined || patient.patient_weight == null ){
                       patient.patient_weight ="Weight: __Kgs";
                   }else{
                       patient.patient_weight = "Weight: "+patient.patient_weight + "Kgs"
                   }
       
                   if(patient.patient_height == undefined || patient.patient_height == null || patient.patient_height == "undefined" ){
                       patient.patient_height ="Height:__cms";
                   }else{
                       patient.patient_height = "Height: "+patient.patient_height + "cms"
                   }

            }

            if(appointment.observation == undefined || appointment.observation == null || appointment.observation == "undefined" ){

            appointment.observation = "";
            }
            if(appointment.analysis == undefined || appointment.analysis == null || appointment.analysis == "undefined"){

                appointment.analysis = "";
                }
                if(appointment.presciption == undefined || appointment.presciption == null || appointment.presciption == "undefined" ){

                    appointment.presciption = "";
                    }
                    if(appointment.appointment_desc == undefined || appointment.appointment_desc == null || appointment.appointment_desc == "undefined" ){

                        appointment.appointment_desc = "";
                        }

        
            appointment.reportpdfurl =  "/public/eprescription/" + appointment.appointment_id+".pdf"
            appointment.reportpdf =  appointment.appointment_id+".pdf"
        var pdf_images = [];
                                
        var pdf_firstpage = "<tr align='left'> <td> <p style='flex-direction: row; margin-left: 1px; padding: 1px; font-family:Arial, Helvetica, sans-serif;font-weight:  bold;font-size: 15px; margin: 0px;'> Reported Symptoms & Illness Brief: </p> </td> </tr> <tr align='left'> <td> <p style='display: flex; flex-direction: column;margin:5px; border-width: 1px; border-style: solid; border-color: #888; padding: 5px; border-radius: 1px; min-height:60px; font-family:Arial, Helvetica, sans-serif'>"+appointment.appointment_desc+" </p> </td> </tr> <tr align='left'> <td> <p style='display: flex; flex-direction: row; margin-left: 1px; padding: 1px;font-weight: bold; margin: 0px;font-size: 15px; font-family:Arial, Helvetica, sans-serif;'> <br>Chief Complaints and Relevant Points from History: </p> </td> </tr> <tr align='left'> <td> <p style='display: flex; flex-direction: column;margin:5px; border-width: 1px; border-style: solid; border-color: #888; padding: 5px; border-radius: 1px; min-height:60px; font-family:Arial, Helvetica, sans-serif;'>"+appointment.observation+" </p> </td> </tr> <tr align='left'> <td> <p style='display: flex; flex-direction: row; margin-left: 1px; padding: 1px; font-weight: bold; font-size: 15px; margin: 0px;font-family:Arial, Helvetica, sans-serif;'><br> Examination / Lab Findings : </p> </td> </tr> <tr align='left'> <td> <p style='display: flex; flex-direction: column;margin:5px; border-width: 1px; border-style: solid; border-color: #888; padding: 5px; border-radius: 1px; min-height:60px;font-family:Arial, Helvetica, sans-serif;'>"+appointment.analysis+" </p> </td> </tr> <tr align='left'> <td><p style='display: flex; flex-direction: row; margin-left: 1px; padding: 1px; font-weight: bold; margin: 0px;font-size: 15px;font-family:Arial, Helvetica, sans-serif;'> <br>Diagnosis, Suggested Investigations and Prescription:</p> </td> </tr> <tr align='left'> <td> <p style='display: flex; flex-direction: column;margin:5px; border-width: 1px; border-style: solid; border-color: #888; padding: 5px; border-radius: 1px; min-height:60px;font-family:Arial, Helvetica, sans-serif;'> "+appointment.presciption +" </p> </td> </tr> </table> </td> </tr><table style=' width: 500px; margin: auto; vertical-align: middle;'>"

                                pdf_images.push(pdf_firstpage);
                            if(Array.isArray(appointment.eprescription)){
                                console.log("array")                               
                                appointment.eprescription.forEach(function(number, i){
                            
                                    let pdf_image   = path.join(__dirname, '../public/eprescription/'+ appointment.eprescription[i]);
                                    base64Img.base64(pdf_image, function(err, pdf_image_bash) {
                                 //  var pdf_image_html = "<div style='page-break-before: always;'><div><tr style='margin:2px auto;'> <td align='center' style='border-width: 1px; border-style: solid; border-color: #888; border-radius: 5px; vertical-align: middle; '> <div style='width: 500px; height: 521px; text-align: center; line-height: 500px;'> <img src='"+pdf_image_bash+"' alt='prescription' style='max-height: 100%; vertical-align: middle; display: inline; max-width: 100%;'> </div> </td> </tr> "
                                   var pdf_image_html = " <tr align='left'> <td align='center'> <div style='page-break-before: always; page-break-after:auto; overflow:hidden;border-width: 1px; border-style: solid; border-color: #888; border-radius: 1px;width: 591px; height: 500px; text-align: center; line-height: 500px;'> <img src='"+pdf_image_bash+"' alt='prescription' style='max-height: 100%; padding-top:2px;vertical-align: middle; display: inline; max-width: 100%;'> </div> "

        
                                   pdf_images.push(pdf_image_html);
                                        setTimeout(()=>{
                                             if( (appointment.eprescription.length-1) == i){
                                                pdf_images.push("</td> </tr> </table>")

                                                   let desPathe = path.join(__dirname, '../public/eprescription/' +appointment_id+".pdf")
                                                   var options = { format: 'Letter',
                                                   "header": {
                                                   "height": header_height,
                                                //  "contents": "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title> </head> <body style='width: 80%; margin: 10px; font-size: 13px;'> <table style='margin: auto; width: 600px; background-color: #eee;' cellspacing='0' cellpadding='0' border='0'> <tr align='center' style=' background-repeat: no-repeat; background-size: cover; height: 80px; width: 100%; background-position: initial; '> <td align='left'> <h1 style='padding: 0px; margin: 0px; margin-left: 25px; color: rgb(81, 14, 143);'>DoctorSetu</h1> <h4 style='padding: 0px; margin: 0px; margin-left: 30px; color: rgb(22, 133, 27);'>"+doctor_address+"</h4> </td> </tr> <tr> <td> <table style='margin: auto; width: 600px; ; margin: 7px auto; border-width: 1px; border-style: solid; border-color: #888;border-radius: 5px; padding:5px 0px; ' cellspacing='0' cellpadding='0' border='0'> <tr> <td> <h4 style='display: flex; flex-direction: row; margin:1px 25px; padding: 0px; color: rgb(59, 40, 40);'>"+doctor_name+"</h4> </td> </tr> <tr> <td> <p style='display: flex; flex-direction: row; margin:1px 25px; padding: 0px; color: rgb(43, 15, 15);'>"+doctor.specializations.degree+" </p> </td> </tr> <tr> <td> <p style='display: flex; flex-direction: row; justify-content: space-between; margin:1px 25px; color: rgb(43, 15, 15);'> <span>"+doctor.specializations.name+"</span> <span style='float:right'>"+doctor.imr+"</span> </p> </td> </tr> <tr> <td> <div style='display: flex; flex-direction: row; justify-content: space-between; margin:1px 25px ; color: rgb(43, 15, 15);'> <div style='height: 16px;line-height: 16px;vertical-align: middle;display: inline-flex;'> <img src=''  alt='' style='padding-right: 10px;'> <span>Ph: "+doctor.contact.telephone[0]+"</span> <span> <img src='' alt='' style='padding-right: 10px;'> <span style='float:right'>Email:"+ doctor.contact.email[0]+"</span> </div>  </td> </tr> </table> </td> </tr>"},
                                                   //"contents":"<!DOCTYPE html><html lang='en'><head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title></head><body style='width: 80%; margin: 1px; font-size: 12px;'> <table style=' width: 600px;  border='0'> <tr style='background-color: #416EB8;'> <td> <table style=' width: 500px; margin: 1px auto; padding:0px; ' cellspacing='0' cellpadding='0' border='0'> <tr align='center'> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #FFF;'>"+doctor_name+"<h7 style='font-size:10px'> "+" "+doctor.specializations[0].degree+"</h2> </td> </tr> <tr> <td> <p style='display: flex; flex-direction: row; padding: 0px; justify-content: space-between; color:#FFF'> <span>"+doctor.specializations[0].name+"</span><span style='float:right'>Registration No: "+doctor.doc_smcregno+"</span> </p> </td> </tr> <tr> <td> <h4 style='display: flex; flex-direction: row; margin:0px; padding: 0px; color: #FFF;'>"+doctor.hostipal +"</span> </p> </td> </tr> <tr> <td> <div style='display: flex; flex-direction: row; justify-content: space-between; margin:1px; color: #FFF'> <div style='height: 16px;line-height: 16px;vertical-align: middle;display: inline-flex;'> <span>Tel: +91-"+ doctor.contact.telephone[0]+"</span> <span style='float:right'>Email: "+doctor.contact.email[0]+"</span></div></div> </td> </tr> </table> </td> </tr>        <tr> <td> <table style=' width: 600px;'> <tr align='left' > <td> <div style='width: 590px; border-width: 1px; margin: auto; border-style: solid; border-color: #888; border-radius: 5px;'> <p style='display: flex; flex-direction: row; justify-content: space-between;margin:0px; padding: 4px ;min-height:50px'> <span style='padding-left:5px'>"+appointment.appointment_date+" "+ appointment.appointment_time+"</span> <span style='float:right;padding-right:10px'>"+appointment.appointment_subtype+"</span> </p> <p style='margin:0px; padding: 4px;'> <span style='padding-left:10px'>"+patient.patient_name+"</span> <span style='float:right; padding-right:10px'> Gender: "+patient.patient_gender+ "&MediumSpace;&MediumSpace;&MediumSpace;Age: "+patient.age+"</span> </p> <p style='display: flex; flex-direction: row; justify-content: space-between;margin:0px; padding: 4px;'> <span style='padding-left:10px'>"+patient.patient_address+"</span> <span style='float:right; padding-right:10px'>"+patient.patient_height+" "+patient.patient_weight+"</span></span> </p> </div> </td> </tr>"},  
                                                    //   "contents":"<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title> </head> <body style='margin: 0px auto; font-size: 12px;font-family:Arial, Helvetica, sans-serif;'> <table style=' width: 600px; margin: 0px auto; margin-top:1px; padding:5px;background-color: #42a5f5;' cellspacing='0' cellpadding='0'  border='0'> <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+doctor.specializations[0].degree+" <!-- Dr.Kiran Kumar --> </h2> </td> </tr> </table> <table style=' width: 600px; margin: 0px auto; padding:5px;background-color: #42a5f5;'cellspacing='0' cellpadding='0' border='0'> <tr> <td align='left'> <span>"+doctor.specializations[0].name+"</span> </td> <td align='right'> <span>Registration No: "+doctor.doc_smcregno+"</span> </td> </tr> <tr align='left'> <td style='padding-top:5px; padding-bottom:5px'> <span>"+doctor.hostipal +"</span> </td> </tr> <tr> <td align='left'> <span>Tel: +91-"+ doctor.contact.telephone[0]+"</span> </td> <td align='right'> <span>Email: "+doctor.contact.email[0]+"</span> </td> </tr> </table><div  style='border:1px solid #888; margin:2px 5px 0px 5px;'> <table style='font-family:Arial, Helvetica, sans-serif; width: 100%; margin:auto; padding:10px; border-width:1px solid #000'cellspacing='0' cellpadding='0' border='0'; > <tr > <td align='left'> <span >"+appointment.appointment_date+" "+ appointment.appointment_time+"</span> <!-- <span>Date & Time</span> --> </td> <td align='right'> <span> Appointment Type: "+appointment.appointment_subtype.toUpperCase() +"</span> <!-- <span>Online</span> --> </td> </tr> <tr> <td align='left' style='padding-top:5px; padding-bottom:5px'> <span >"+patient.patient_name+"</span> </td> <td align='right' style='padding-top:5px; padding-bottom:5px; min-width:200px'> <span > Gender: "+patient.patient_gender+ "&MediumSpace;&MediumSpace;&MediumSpace;Age: "+patient.age+"</span> <!-- <span> Gender: "+patient.patient_gender+ "Age: "+patient.age+"</span> --> </td> </tr> <tr> <td align='left'><span>"+patient.patient_address+"</span></td> <td align='right'> <span style='align:left'>" +patient.patient_height+" "+patient.patient_weight+""+"</span></td> <td align='right'></td> </tr> </table> </body> </html>"},
                                                        "contents":"<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title> </head> <body style='margin: 0px auto; font-size: 12px;font-family:Arial, Helvetica, sans-serif;'> <table style=' width: 600px; margin: 0px auto; margin-top:1px; padding:5px;background-color: #42a5f5;' cellspacing='0' cellpadding='0'  border='0'>"+hospitaldetails+"</table> <table style=' width: 600px; margin: 0px auto; padding:5px;background-color: #42a5f5;'cellspacing='0' cellpadding='0' border='0'>           <tr> <td align='left'>  <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+doctor.specializations[0].degree+ "</td> </tr>                <tr> <td align='left'> <span>"+doctor.specializations[0].name+"</span> </td> <td align='right'> <span>Registration No: "+doctor.doc_smcregno+"</span> </td> </tr>  <tr> <td align='left'> <span>Tel: +91-"+ doctor.contact.telephone[0]+"</span> </td> <td align='right'> <span>Email: "+doctor.contact.email[0]+"</span> </td> </tr> </table><div  style='border:1px solid #888; margin:2px 5px 0px 5px;'> <table style='font-family:Arial, Helvetica, sans-serif; width: 100%; margin:auto; padding:10px; border-width:1px solid #000'cellspacing='0' cellpadding='0' border='0'; > <tr > <td align='left'> <span >"+appointment.appointment_date+" "+ appointment.appointment_time+"</span> <!-- <span>Date & Time</span> --> </td> <td align='right'> <span> Appointment Type: "+appointment.appointment_subtype.toUpperCase() +"</span> <!-- <span>Online</span> --> </td> </tr> <tr> <td align='left' style='padding-top:5px; padding-bottom:5px'> <span >"+patient.patient_name+"</span> </td> <td align='right' style='padding-top:5px; padding-bottom:5px; min-width:200px'> <span > Gender: "+patient.patient_gender+ "&MediumSpace;&MediumSpace;&MediumSpace;Age: "+patient.age+"</span> <!-- <span> Gender: "+patient.patient_gender+ "Age: "+patient.age+"</span> --> </td> </tr> <tr> <td align='left'><span>"+patient.patient_address+"</span></td> <td align='right'> <span style='align:left'>" +patient.patient_height+" "+patient.patient_weight+""+"</span></td> <td align='right'></td> </tr> </table> </body> </html>"},

                                                    "footer": {
                                                       "height": "14mm",
                                                   //"contents": "<tr> <td> <table style='margin: 7px auto; width: 600px; background-color: #eee;' cellspacing='0' cellpadding='0' border='0'> <tr align='center'> <td style=' border-width: 1px;border-style: dotted; border-color: #222;border-radius: 5px; padding:5px 0p; '> <p style='margin:5px 12px; padding: 4px 5px; '>Note:<small>This is the prescription created by the Doctor online. Hence signature not required.</small></p> </td> </tr> </table> </td> </tr>  </table> </body> </html>"
                                                       "contents": "<tr> <td> <table style='margin: 7px auto; width: 600px;' cellspacing='0' cellpadding='0' border='0'> <tr align='center'> <td style=' border-width: 0.3px;border-top: solid;border-top-width: thin; border-color: #222; padding:1px 0p;'> <p style='margin:5px 12px; padding: 4px 5px; font-family:Arial, Helvetica, sans-serif; '>Note:<small>This prescription created by the Doctor online. Hence signature not required.</small></p> </td> </tr> </table> </td> </tr> </table></body></html>"
               
                                               } };
               
                                                            pdf.create(pdf_images.join(''), options).toFile(desPathe, function(err, res) {

                                                            db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id } , { $set: {"reportpdfurl" :appointment.reportpdfurl, "reportpdf": appointment.reportpdf}  }, { upsert: false }, function (err, result) {
                                                                if (err) {
                                                                    reject(err);
                                                                } else {
                                                                    resolve(result.value);
                                                                }
                                                            });
                                                                   
                                                        })
                             }
                            },3000)

                                })
                            })
                            }else{
                                console.log("not a array")
                                setTimeout(() => {
                                              
                                          
                                let pdf_image_path   = path.join(__dirname, '../public/eprescription/'+ appointment.eprescription);
                                base64Img.base64(pdf_image_path, function(err, pdf_image_bash) {
                                    if(pdf_image_bash){
                                   var pdf_image_html = "<tr align='left'> <td align='center'> <div style='page-break-before: always;border-width: 1px; border-style: solid; border-color: #888; border-radius: 5px;width: 591px; height: 503px; text-align: center; line-height: 500px;'> <img src='"+pdf_image_bash+"' alt='prescription' style='max-height: 100%; padding-top:2px;vertical-align: middle; display: inline; max-width: 100%;'> </div></td> </tr> </table>"
                                    }else{
                                        pdf_image_html='';  
                                    }
                                   let desPathe = path.join(__dirname, '../public/eprescription/' +appointment_id+".pdf")
                                                                   
                                    var options = { format: 'Letter',
                                    "header": {
                                    "height": header_height,
                                 //  "contents": "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title> </head> <body style='width: 80%; margin: 10px; font-size: 13px;'> <table style='margin: auto; width: 600px; background-color: #eee;' cellspacing='0' cellpadding='0' border='0'> <tr align='center' style=' background-repeat: no-repeat; background-size: cover; height: 80px; width: 100%; background-position: initial; '> <td align='left'> <h1 style='padding: 0px; margin: 0px; margin-left: 25px; color: rgb(81, 14, 143);'>DoctorSetu</h1> <h4 style='padding: 0px; margin: 0px; margin-left: 30px; color: rgb(22, 133, 27);'>"+doctor_address+"</h4> </td> </tr> <tr> <td> <table style='margin: auto; width: 600px; ; margin: 7px auto; border-width: 1px; border-style: solid; border-color: #888;border-radius: 5px; padding:5px 0px; ' cellspacing='0' cellpadding='0' border='0'> <tr> <td> <h4 style='display: flex; flex-direction: row; margin:1px 25px; padding: 0px; color: rgb(59, 40, 40);'>"+doctor_name+"</h4> </td> </tr> <tr> <td> <p style='display: flex; flex-direction: row; margin:1px 25px; padding: 0px; color: rgb(43, 15, 15);'>"+doctor.specializations.degree+" </p> </td> </tr> <tr> <td> <p style='display: flex; flex-direction: row; justify-content: space-between; margin:1px 25px; color: rgb(43, 15, 15);'> <span>"+doctor.specializations.name+"</span> <span style='float:right'>"+doctor.imr+"</span> </p> </td> </tr> <tr> <td> <div style='display: flex; flex-direction: row; justify-content: space-between; margin:1px 25px ; color: rgb(43, 15, 15);'> <div style='height: 16px;line-height: 16px;vertical-align: middle;display: inline-flex;'> <img src=''  alt='' style='padding-right: 10px;'> <span>Ph: "+doctor.contact.telephone[0]+"</span> <span> <img src='' alt='' style='padding-right: 10px;'> <span style='float:right'>Email:"+ doctor.contact.email[0]+"</span> </div>  </td> </tr> </table> </td> </tr>"},
                                   // "contents":"<!DOCTYPE html><html lang='en'><head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title></head><body style='width: 80%; margin: 1px; font-size: 10px;'> <table style=' width: 600px;  border='0'> <tr style='background-color: #416EB8;'> <td> <table style=' width: 500px; margin: 1px auto; padding:0px; ' cellspacing='0' cellpadding='0' border='0'> <tr align='center'> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #FFF;'>"+doctor_name+"<h7 style='font-size:10px'> "+" "+doctor.specializations[0].degree+"</h2> </td> </tr> <tr> <td> <p style='display: flex; flex-direction: row; padding: 0px; justify-content: space-between; color:#FFF'> <span>"+doctor.specializations[0].name+"</span><span style='float:right'>Registration No: "+doctor.doc_smcregno+"</span> </p> </td> </tr> <tr> <td> <h4 style='display: flex; flex-direction: row; margin:0px; padding: 0px; color: #FFF;'>"+doctor.hostipal +"</span> </p> </td> </tr> <tr> <td> <div style='display: flex; flex-direction: row; justify-content: space-between; margin:1px; color: #FFF'> <div style='height: 16px;line-height: 16px;vertical-align: middle;display: inline-flex;'> <span>Tel: +91-"+ doctor.contact.telephone[0]+"</span> <span style='float:right'>Email: "+doctor.contact.email[0]+"</span></div></div> </td> </tr> </table> </td> </tr>        <tr> <td> <table style=' width: 600px;'> <tr align='left' > <td> <div style='width: 590px; border-width: 1px; margin:1px auto; border-style: solid; border-color: #888; border-radius: 5px;'> <p style='display: flex; flex-direction: row; justify-content: space-between;margin:0px; padding: 4px ;'> <span style='padding-left:5px'>"+appointment.appointment_date+" "+ appointment.appointment_time+"</span> <span style='float:right;padding-right:10px'>"+appointment.appointment_subtype+"</span> </p> <p style='margin:0px; padding: 1px;'> <span style='padding-left:10px'>"+patient.patient_name+"</span> <span style='float:right; padding-right:10px'> Gender: "+patient.patient_gender+ "&MediumSpace;&MediumSpace;&MediumSpace;Age: "+patient.age+"</span> </p> <p style='display: flex; flex-direction: row; justify-content: space-between;margin:0px; padding: 4px;'> <span style='padding-left:10px'>"+patient.patient_address+"</span> </td><td><span style='float:right; padding-right:10px'>"+patient.patient_height+" "+patient.patient_weight+"</span></span> </p> </div> </td> </tr>"},  
                                    // "contents":"<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title> </head> <body style='margin: 0px auto; font-size: 12px;font-family:Arial, Helvetica, sans-serif;'> <table style=' width: 600px; margin: 0px auto; margin-top:1px; padding:5px;background-color: #42a5f5;' cellspacing='0' cellpadding='0'  border='0'> <tr align='center' style='width: 600px; '> <td align='center'> <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+doctor.specializations[0].degree+" <!-- Dr.Kiran Kumar --> </h2> </td> </tr> </table> <table style=' width: 600px; margin: 0px auto; padding:5px;background-color: #42a5f5;'cellspacing='0' cellpadding='0' border='0'> <tr> <td align='left'> <span>"+doctor.specializations[0].name+"</span> </td> <td align='right'> <span>Registration No: "+doctor.doc_smcregno+"</span> </td> </tr> <tr align='left'> <td style='padding-top:5px; padding-bottom:5px'> <span>"+doctor.hostipal +"</span> </td> </tr> <tr> <td align='left'> <span>Tel: +91-"+ doctor.contact.telephone[0]+"</span> </td> <td align='right'> <span>Email: "+doctor.contact.email[0]+"</span> </td> </tr> </table><div  style='border:1px solid #888; margin:2px 5px 0px 5px;'> <table style='font-family:Arial, Helvetica, sans-serif; width: 100%; margin:auto; padding:10px; border-width:1px solid #000'cellspacing='0' cellpadding='0' border='0'; > <tr > <td align='left'> <span >"+appointment.appointment_date+" "+ appointment.appointment_time+"</span> <!-- <span>Date & Time</span> --> </td> <td align='right'> <span>"+appointment.appointment_subtype.toUpperCase() +"</span> <!-- <span>Online</span> --> </td> </tr> <tr> <td align='left' style='padding-top:5px; padding-bottom:5px'> <span >"+patient.patient_name+"</span> </td> <td align='right' style='padding-top:5px; padding-bottom:5px; min-width:200px'> <span > Gender: "+patient.patient_gender+ "&MediumSpace;&MediumSpace;&MediumSpace;Age: "+patient.age+"</span> <!-- <span> Gender: "+patient.patient_gender+ "Age: "+patient.age+"</span> --> </td> </tr> <tr> <td align='left'><span>"+patient.patient_address+"</span></td> <td align='right'> <span style='align:left'>" +patient.patient_height+" "+patient.patient_weight+""+"</span></td> <td align='right'></td> </tr> </table> </body> </html>"},
                                                        "contents":"<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Document_2</title> </head> <body style='margin: 0px auto; font-size: 12px;font-family:Arial, Helvetica, sans-serif;'> <table style=' width: 600px; margin: 0px auto; margin-top:1px; padding:5px;background-color: #42a5f5;' cellspacing='0' cellpadding='0'  border='0'>"+hospitaldetails+"</table> <table style=' width: 600px; margin: 0px auto; padding:5px;background-color: #42a5f5;'cellspacing='0' cellpadding='0' border='0'>           <tr> <td align='left'>  <h2 style='padding: 0px; margin: 0px; color: #000;'> "+doctor_name+" <span style='font-size:10px'>"+doctor.specializations[0].degree+ "</td> </tr>                <tr> <td align='left'> <span>"+doctor.specializations[0].name+"</span> </td> <td align='right'> <span>Registration No: "+doctor.doc_smcregno+"</span> </td> </tr>  <tr> <td align='left'> <span>Tel: +91-"+ doctor.contact.telephone[0]+"</span> </td> <td align='right'> <span>Email: "+doctor.contact.email[0]+"</span> </td> </tr> </table><div  style='border:1px solid #888; margin:2px 5px 0px 5px;'> <table style='font-family:Arial, Helvetica, sans-serif; width: 100%; margin:auto; padding:10px; border-width:1px solid #000'cellspacing='0' cellpadding='0' border='0'; > <tr > <td align='left'> <span >"+appointment.appointment_date+" "+ appointment.appointment_time+"</span> <!-- <span>Date & Time</span> --> </td> <td align='right'> <span> Appointment Type: "+appointment.appointment_subtype.toUpperCase() +"</span> <!-- <span>Online</span> --> </td> </tr> <tr> <td align='left' style='padding-top:5px; padding-bottom:5px'> <span >"+patient.patient_name+"</span> </td> <td align='right' style='padding-top:5px; padding-bottom:5px; min-width:200px'> <span > Gender: "+patient.patient_gender+ "&MediumSpace;&MediumSpace;&MediumSpace;Age: "+patient.age+"</span> <!-- <span> Gender: "+patient.patient_gender+ "Age: "+patient.age+"</span> --> </td> </tr> <tr> <td align='left'><span>"+patient.patient_address+"</span></td> <td align='right'> <span style='align:left'>" +patient.patient_height+" "+patient.patient_weight+""+"</span></td> <td align='right'></td> </tr> </table> </body> </html>"},

                                    "footer": {
                                        "height": "14mm",
                                    //"contents": "<tr> <td> <table style='margin: 7px auto; width: 600px; background-color: #eee;' cellspacing='0' cellpadding='0' border='0'> <tr align='center'> <td style=' border-width: 1px;border-style: dotted; border-color: #222;border-radius: 5px; padding:5px 0p; '> <p style='margin:5px 12px; padding: 4px 5px; '>Note:<small>This is the prescription created by the Doctor online. Hence signature not required.</small></p> </td> </tr> </table> </td> </tr>  </table> </body> </html>"
                                        "contents": "<tr> <td> <table style='margin: 7px auto; width: 600px;' cellspacing='0' cellpadding='0' border='0'> <tr align='center'> <td style=' border-width: 0.3px;border-top: solid;border-top-width: thin; border-color: #222; padding:1px 0p;'> <p style='margin:5px 12px; padding: 4px 5px; '>Note:<small>This prescription created by the Doctor online. Hence signature not required.</small></p> </td> </tr> </table> </td> </tr> </table></body></html>"

                                } };

                                                    pdf.create(pdf_images+pdf_image_html, options).toFile(desPathe, function(err, res) {

                                                            db.collection("appointment").findOneAndUpdate({ "appointment_id": appointment_id } , { $set: {"reportpdfurl" :appointment.reportpdfurl, "reportpdf": appointment.reportpdf}  }, { upsert: false }, function (err, result) {
                                                                if (err) {
                                                                    reject(err);
                                                                } else {
                                                                    resolve(result.value);
                                                                }
                                                            });
                                                                    
                                                        })
                                                
                                        })

                                    }, 3000);
                                                
                            }

              //  })
        //})

            })
                        })
                            
                            }else{
                                resolve(appointment)

                            }
                            
                        }
                        
                    });
                }
            });
        });
    }

}