import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

import { Params, Router,ActivatedRoute } from '@angular/router';
import { DoctorService } from './../../../../api/doctor.service';
// import { Routes } from '@angular/router';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'ngx-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.scss']
})
export class DoctorEditProfileComponent implements OnInit {

  // formControl = new FormControl(new Date());
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  ngModelDate = new Date();

  options = [
    { value: 'This is value 1', label: 'Male' },
    { value: 'This is value 2', label: 'Female' },
    { value: 'This is value 3', label: 'Other' },
  ];
  option;
  // myForm: any;

  constructor( private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) {}

  id:string;
  doctor_name:string;
  doctor:any = [];
  address:string;
  phone:string;
  aadhaar:string;
  email:string;
  doc_dob:any;
  gender:string;
  StateMC:string;
  smc:string;
  imr:string;
  qualification:string;
  specialisation:string;
  languages:string;
  symptoms:string;
  about:string;
  pin:string= '';
  doc_achievements:string;
  clinicname:string;
  haveclinic:string;
  profileimg:any;
  doc_clinic_address:string;
  avaliableMode:any;
  city:string ='';
  state:string ='';
  avaliableDays:any;
  symptomslist:any;
  specializationList:any;
  selected:any;
  pwd:any;
  doc_clinic_city:any;
  doc_clinic_state:any;
  doc_clinic_pin:any;
  languageslist:any;
  any:any=['Dentist'];
 
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
   
    this.getDoctorDetails(this.id)
  }


  getDoctorDetails(id:any) {
    // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
      this.doctorService.doctorDetails(id).subscribe((response) => {
      delete response.res._id;
      this.pwd='';
      this.doc_achievements=response.res.doc_achievements;
      this.doctor_name=response.res.name.first;
      this.doctor=response.res;
      console.log(this.doctor.profilepic)
      this.profileimg=environment.apiUrl+'/'+this.doctor.profilepic;
      
      this.avaliableMode = this.doctor.slotDetails[0].avaliableMode;
      this.avaliableDays=this.doctor.slotDetails[0].days;
      this.doctorService.getspecialitityList().subscribe((specialization) => {
      this.specializationList =specialization.response;
      })

      this.doctorService.getLanguagesList().subscribe((languages) => {
        this.languageslist =languages.response;
        console.log(this.languages)
        })
     
        this.doctorService.getSymptomsList().subscribe((symptom)=>{
          this.symptomslist=symptom.response;
          console.log(this.symptomslist)
        })
      this.selected = [
        {id: 5, name: 'Angular'},
        {id: 6, name: 'Vue'}
      ];
      this.address=this.doctor.contact.address[0]
      this.clinicname=this.doctor.clinicdetails ? this.doctor.clinicdetails.doc_clinic_name : "";
      this.haveclinic=this.doctor.clinicdetails ? 'Yes' : 'No'
      this.doc_clinic_address=this.doctor.clinicdetails ? this.doctor.clinicdetails.doc_clinic_address : "";
      this.phone=this.doctor.contact.telephone[0];
      this.aadhaar=this.doctor.doc_aadhaar      ;
      this.email=this.doctor.contact.email[0]
      // this.doc_dob=this.doctor.doc_dob;
      this.doc_dob=this.formatDate(this.doctor.doc_dob);
      this.gender=this.doctor.gender;
      this.about=this.doctor.about
      if(this.doctor.clinicdetails){

      this.doc_clinic_state=this.doctor.clinicdetails.doc_clinic_state ? this.doctor.clinicdetails.doc_clinic_state : ""
      this.doc_clinic_city=this.doctor.clinicdetails.doc_clinic_city ? this.doctor.clinicdetails.doc_clinic_city : ""
      this.doc_clinic_pin=this.doctor.clinicdetails.doc_clinic_pin ? this.doctor.clinicdetails.doc_clinic_pin : ""
      }

      this.languages=this.doctor.languages[0].split(",");
      this.symptoms=this.doctor.symptoms;

      // this.StateMC=this.doctor
      this.smc=this.doctor.doc_smcregno;
      this.imr=this.doctor.doc_imrno;

      this.qualification=this.doctor.specializations[0].degree;
      this.specialisation=this.doctor.specializations[0].name.split(",");



      // this.doctor_details = response.res;
      // this.profileimg = "http://api.doctorsetu.com:8000"+this.doctor_details.profilepic;
      // imguri: environment.appapiurl + 'pictures/profile/user/patient-default-profile-icon-male.jpg',
      console.log("================")
    })
  
  }

  formatDate (input) {   
     console.log(input);  
    console.log("loading--")
      var allDate = input.split('-');  
      console.log(allDate);   
    console.log([allDate[2],allDate[1],allDate[0] ].join("-"))
     return [allDate[2],allDate[1],allDate[0] ].join("-");   
   } 
   formatDateback(input) {   
     console.log(input);   
     var allDate = input.split('-');  
      console.log(allDate);    
    return [allDate[0],allDate[1],allDate[2] ].join("-");    }

    onSelectFile(event) { 
      
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.myForm.patchValue({
          fileSource: file
        });
      }
      // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.profileimg = event.target.result;

        }
      }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault(); 
    }
  }
  updatedoctor(){

      console.log("-----")
      const formData = new FormData();
    let data =this.myForm.get('fileSource').value;
    console.log(data);
    formData.append('profile', this.myForm.get('fileSource').value);
    formData.append('user_id', this.id);
    formData.append('usertype', "doctor");

      this.doctorService.profileimage(formData).subscribe((result: any) => {
        console.log(result);
        
      window.location.reload();

      })
    
}


updatefields(){
  
  this.doctor.name.first=this.doctor_name;
  // this.doctor.contact.address[0]= this.address;
  console.log(this.address+" "+this.city+" "+ this.state+" "+this.pin)
  this.doctor.contact.address[0]= this.address+" "+this.city+" "+ this.state+" "+this.pin;

  this.doctor.contact.telephone[0]=this.phone;
  this.doctor.doc_aadhaar=this.aadhaar;
  this.doctor.contact.email[0]=this.email;
  this.doctor.doc_dob =this.formatDateback(this.doc_dob)
  this.doctor.gender=this.gender;
  this.doctor.StateMC=this.StateMC;
  this.doctor.doc_smcregno=this.smc;
  this.doctor.doc_imrno=this.imr;
  console.log(this.pwd)
if(this.pwd){
  console.log(this.pwd);
  console.log("pwd")
  this.doctor.pwd=this.pwd;
}
  this.doctor.specializations[0].degree=this.qualification;
  this.doctor.specializations[0].name=this.specialisation.toString();

  this.doctor.languages[0] = this.languages.toString();
  this.doctor.symptoms= this.symptoms;
  this.doctor.about=this.about;
  this.doctor.doc_achievements=this.doc_achievements;
if(this.doctor.clinicdetails){
  this.doctor.clinicdetails.doc_clinic_name = this.clinicname ? this.clinicname : null;
  this.doctor.clinicdetails.doc_clinic_address = this.doc_clinic_address ? this.doc_clinic_address : null;
  this.doctor.clinicdetails.doc_clinic_city=this.doc_clinic_city ? this.doc_clinic_city : null;
  this.doctor.clinicdetails.doc_clinic_state=this.doc_clinic_state ? this.doc_clinic_state : null;
  this.doctor.clinicdetails.doc_clinic_pin=this.doc_clinic_pin ? this.doc_clinic_pin : null;
}
  //specalization
  this.doctorService.doctorUpdate(this.id, this.doctor).subscribe((response) => {

    console.log("Updated succfully!");
    if(!this.profileimg.includes('pictures/profile')){

    this.updatedoctor();
    }else{
       window.location.reload();

    }
  })

}

}
