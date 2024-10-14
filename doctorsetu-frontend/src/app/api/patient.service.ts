import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient
  ) { }

  
  getpatientList(){
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/patientlist`,{});

  
  }
  getmemberdetails(member_id){
    return this.http.post<any>(`${environment.apiUrl}/patient/profile/getmemberdetails`,{'id':member_id});

  }
  getpatiendetails(id){
    return this.http.post<any>(`${environment.apiUrl}/patient/profile/patientbyID`,{'patient_id':id});

  }
  updateappointment(data){ 

    return this.http.post<any>(`${environment.apiUrl}/patient/appointment/picture/saveprescription`, data);

  }
  geteprescriptionpdf(id){ 

    return this.http.post<any>(`${environment.apiUrl}/patient/appointment/geteprescriptionpdf`, {'appointment_id':id});

  }
  getconsulationdetails(id){
    return this.http.post<any>(`${environment.apiUrl}/doctor/appointment/appointmentId`,{'appointmentId':id});
    

  }
  

  makeAppointment(patient_id, doctor_id,ctype,illnessbrief, appointment_patientdata, appointment_doctordata ){
    var state = {
      peerIds: [],                                //Array for storing connected peers
      uid: Math.floor(Math.random() * 100),       //Generate a UID for local user
      channelName: 'ChannelName',         //Channel Name for the current session
      vidMute: false,                             //State variable for Video Mute
      audMute: false,                             //State variable for Audio Mute
      joinSucceed: false,                         //State variable for storing success
      ctype: 'ctype',
      days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    };
    let today = new Date();
    let dayOfWeek = state.days[today.getDay()];
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let hm = String(today.getHours()).padStart(2, '0')
    let minute = String(today.getMinutes()).padStart(2, '0')
    var yyyy = today.getFullYear();
    let currentdate = dd + '-' + mm + '-' + yyyy;
    let sortorder = yyyy + '-' + mm + '-' + dd;

   var data = {
      appointment_uid: patient_id,
      appointment_doctordata:  {
        "doc_name" : appointment_doctordata.name.first,
        "doc_StateMC" : appointment_doctordata.doc_smcregno,
        "doc_smcregno" : appointment_doctordata.doc_smcregno,
        "doc_exp" : appointment_doctordata.experience,
        "doc_gender" :appointment_doctordata.gender,
        "doc_languages" : appointment_doctordata.languages,
        "doc_address" : appointment_doctordata.contact.address[0],
        "doc_email" : appointment_doctordata.contact.email[0],
        "doc_mobile" : appointment_doctordata.contact.telephone[0],
        "doc_achievements" : appointment_doctordata.doc_achievements,
        "doc_clinicdetails" : appointment_doctordata.clinicdetails,
        "doc_profilepic" : appointment_doctordata.profilepic,
        "doc_specialization" :appointment_doctordata.specializations.name,
        "doc_qualification" : appointment_doctordata.specializations.degree,
        "doc_symptoms" : appointment_doctordata.symptoms,
        "doc_slotdetails" : appointment_doctordata.slotDetails,
        "doc_about" : appointment_doctordata.about,
},
      appointment_patientdata: {
        "user_img" : appointment_patientdata.patient_image,
        "user_name" : appointment_patientdata.patient_name,
        "user_mobile" : appointment_patientdata.phnumber,
        "user_email" : appointment_patientdata.email,
        "user_gender" : appointment_patientdata.patient_gender,
        "user_dob" : appointment_patientdata.patient_dob,
        "user_aadhaar" : appointment_patientdata.patient_aadhaar,
        "user_height" : appointment_patientdata.patient_height,
        "user_weight" : appointment_patientdata.patient_weight,
        "user_bloodgroup" : appointment_patientdata.patient_bloodgrp,
        "user_address" : appointment_patientdata.patient_address,
        "user_preexisting" : appointment_patientdata.patient_predisease,
        "user_alergicto" : appointment_patientdata.patient_allergicto || '',
},
      appointment_docid: doctor_id,
      appointment_date: currentdate,
      appointment_time: hm + ':' + minute + '-' + hm + ':' + minute,
      appointment_type: "emergency",
      appointment_subtype: ctype,
      slot: hm + ':' + minute + '-' + hm + ':' + minute,
      day: dayOfWeek,
      date: currentdate,
      appointment_desc: illnessbrief,
      documents: false,
      document_file: {},
      sortorder: sortorder + '-' + hm + ':' + minute + '-' + hm + ':' + minute,
      sortday: sortorder
    }

    return this.http.post<any>(`${environment.apiUrl}/patient/appointment/`,data);
    

  }

  listpayments(){ 
    return this.http.get<any>(`${environment.apiUrl}/doctor/profile/getpayment`,{});


  }

  capture(id, amount){
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/capture`,{id:id, amount:amount});

  }

  gethospitalList(){
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/hostiallist`,{});

  }

  updatehospital(data){
    return this.http.post<any>(`${environment.apiUrl}/hospital/updatehospital`,data);

  }
  gethospitaldetailsbyID(id){
    return this.http.post<any>(`${environment.apiUrl}/hospital/gethospitaldetailsbyID`,{'id':id});

  }

  
}







