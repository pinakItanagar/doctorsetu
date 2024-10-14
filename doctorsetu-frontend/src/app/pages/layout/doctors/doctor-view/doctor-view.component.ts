import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { DoctorService } from './../../../../api/doctor.service';
// import { Routes } from '@angular/router';
import { environment } from './../../../../../environments/environment';


@Component({
  selector: 'ngx-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})


export class DoctorViewComponent implements OnInit {

  constructor( private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) {}

days: any = [{ name: 'mon', fname: 'monday' }, { name: 'tue', fname: 'tuesday' }, { name: 'wed', fname: 'wednesday' }, { name: 'thu', fname: 'thursday' }, { name: 'fri', fname: 'friday' }, { name: 'sat', fname: 'saturday' }, { name: 'sun', fname: 'sunday' }];
appointmentType: any =[{ name: "call", icon: "fas fa-phone" }, { name: "video", icon: "fas fa-video" }, { name: "whatsapp", icon: "fab fa-whatsapp" }, { name: "clinic", icon: "fas fa-clinic-medical" }];
id:string;
doctor_name:string;
doctor:any;
address:string;
phone:string;
aadhaar:string;
email:string;
doc_dob:string
gender:string;
StateMC:string;
smc:string;
imr:string;
qualification:string;
specialisation:string;
languages:string;
symptoms:string;
about:string
doc_achievements:string;
clinicname:string;
haveclinic:string;
profileimg:string;
doc_clinic_address:string;
avaliableMode:any;
avaliableDays:any;
slotDetails:any =[];
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
   
    this.getDoctorDetails(this.id)
  }

  getDoctorDetails(id:any) {
    // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
      this.doctorService.doctorDetails(id).subscribe((response) => {
  
      console.log(response.res.slotDetails)
      this.doc_achievements=response.res.doc_achievements;
      this.doctor_name=response.res.name.first;
      this.doctor=response.res;
      this.profileimg=environment.apiUrl+'/'+this.doctor.profilepic;
      
      this.avaliableMode = this.doctor.slotDetails[0].avaliableMode;
      this.avaliableDays=this.doctor.slotDetails[0].days;
     // console.log("video")
     // console.log(this.doctor.slotDetails[0].avaliableMode["video"]);
        this.slotDetails=this.doctor.slotDetails;
      this.address=this.doctor.contact.address[0]
      this.clinicname=this.doctor.clinicdetails ? this.doctor.clinicdetails.doc_clinic_name : "";
      this.haveclinic=this.doctor.clinicdetails ? 'Yes' : 'No'
      this.doc_clinic_address=this.doctor.clinicdetails ? this.doctor.clinicdetails.doc_clinic_address : "";
      this.phone=this.doctor.contact.telephone[0];
      this.aadhaar=this.doctor.doc_aadhaar;      ;
      this.email=this.doctor.contact.email[0]
      this.doc_dob=this.doctor.doc_dob;
      this.gender=this.doctor.gender;
      this.languages=this.doctor.languages[0].replace(/,(?=[^\s])/g, ", ");
      this.symptoms=this.doctor.symptoms.toString().replace(/,(?=[^\s])/g, ", ");
      console.log(this.symptoms)
      this.about=this.doctor.about
      // this.StateMC=this.doctor
      this.smc=this.doctor.doc_smcregno;
      this.imr=this.doctor.doc_imrno;
      this.qualification=this.doctor.specializations[0].degree;
      this.specialisation=this.doctor.specializations[0].name.replace(/,(?=[^\s])/g, ", ");
      //console.log(this.doctor.specializations[0].degree);



      // this.doctor_details = response.res;
      // this.profileimg = "http://api.doctorsetu.com:8000"+this.doctor_details.profilepic;
      // imguri: environment.appapiurl + 'pictures/profile/user/patient-default-profile-icon-male.jpg',
      console.log("================")
    })
  
  }

}
