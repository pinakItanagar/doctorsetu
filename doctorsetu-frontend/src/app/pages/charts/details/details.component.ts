import { Component, OnInit } from '@angular/core';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { PatientService } from './../../../api/patient.service';
import { environment } from './../../../../environments/environment';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'ngx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  checked = false;
  
  toggle(checked: boolean) {
    this.checked = checked;
  }
  constructor(private patientService: PatientService,private activatedRoute: ActivatedRoute) { }
 id:string;
 appointment_subtype:string;
 appointment:any;
 date:string;
 appointment_status:string;
 appointment_time:string;
 appointment_desc:string;
 updatedAt:string
 doctor_name:string;
 specialization:string
 degree:string;
 smc_no:string;
 doc_phnum:string;
 doctor_email:string;
 clinic_name:string = "";
 doctor_address:string;
 patient_name:string;
 patient_gender:string;
 user_dob:string;
 user_mobile:string;
 user_height:string;
 user_weight:string;
 user_bloodgroup:string;
 observation:string="";
 presciption:string="";
 analysis:string="";
 user_preexisting:string=""
 user_alergicto:string=''
 user_address:string=""
 profilepicdoc:string;
 profilepic:string;
 myFiles:any=[];
 cancelreason:string;
 petientdoc:any=[];

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
this.getconsultationDetails();
  }
  getconsultationDetails(){

      this.patientService.getconsulationdetails(this.id).subscribe((response) => {
        console.log(response.res[0]);
        this.appointment=response.res[0];
        this.appointment_subtype= this.appointment.appointment_subtype;
        this.date=this.appointment.date;
        if(this.appointment.appointment_cancelres){
        this.cancelreason=this.appointment.appointment_cancelres;}
        this.appointment_status=this.appointment.appointment_status;
        this.appointment_time=this.appointment.appointment_time;
        this.appointment_desc=this.appointment.appointment_desc;
        this.updatedAt=this.appointment.updatedAt.substring(0,10);
        this.doctor_name=this.appointment.doctorDetails.name.first;
        this.specialization=this.appointment.doctorDetails.specializations[0].name;
        this.degree=this.appointment.doctorDetails.specializations[0].degree;
        this.smc_no=this.appointment.doctorDetails.doc_smcregno;
        this.doc_phnum="+91-"+this.appointment.doctorDetails.contact.telephone[0]
        if(this.appointment.doctorDetails.clinicdetails && this.appointment.doctorDetails.clinicdetails.doc_clinic_name){
          this.clinic_name=this.appointment.doctorDetails.clinicdetails.doc_clinic_name};
        this.doctor_email=this.appointment.doctorDetails.contact.email[0];
        this.doctor_address=this.appointment.doctorDetails.contact.address[0];
        this.patient_name=this.appointment.appointment_patientdata.user_name;
        this.patient_gender=this.appointment.appointment_patientdata.user_gender;
        this.user_preexisting=this.appointment.appointment_patientdata.user_preexisting
        this.user_alergicto=this.appointment.appointment_patientdata.user_alergicto
        this.user_address=this.appointment.appointment_patientdata.user_address;
        if(this.appointment.document_file.doc_0){
          this.petientdoc.push(this.appointment.document_file.doc_0);
        }
        if(this.appointment.document_file.doc_1){
          this.petientdoc.push(this.appointment.document_file.doc_1);
        }if(this.appointment.document_file.doc_2){
          this.petientdoc.push(this.appointment.document_file.doc_2);
        }
        if(this.appointment.doctorDetails.profilepic) this.profilepicdoc=environment.apiUrl+'/'+this.appointment.doctorDetails.profilepic; else this.profilepicdoc=environment.apiUrl+'/'+this.appointment.doctorDetails.profileimg;
        if(this.appointment.appointment_patientdata.user_img) this.profilepic=environment.apiUrl+'/'+this.appointment.appointment_patientdata.user_img; else this.profilepic=environment.apiUrl+'/'+this.appointment.patient_image;

        this.user_dob=this.appointment.appointment_patientdata.user_dob;
        this.user_mobile=this.appointment.appointment_patientdata.user_mobile;
        this.user_height=this.appointment.appointment_patientdata.user_height +"cms";
        this.user_weight=this.appointment.appointment_patientdata.user_weight + "Kgs";
        this.user_bloodgroup=this.appointment.appointment_patientdata.user_bloodgroup ;
        if(this.appointment.observation){  
          this.observation=this.appointment.observation;
    

        }
        if(this.appointment.analysis){  
          
          this.analysis=this.appointment.analysis;

        }
        console.log(this.appointment.presciption)
        if(this.appointment.presciption){  
          this.presciption=this.appointment.presciption;

        }




      })
    }
    viewiamge(event){ 
      console.log(event)
      window.open(environment.apiUrl+"/uploads/"+event.name);


    }
    downloadpdf(){
      console.log("download pdf", this.appointment.reportpdfurl)
      // window.location.assign('http://devapi.doctorsetu.com/eprescription/APT_6002013.pdf');
      if(this.appointment.reportpdfurl != undefined){
        FileSaver.saveAs(environment.apiUrl+"/eprescription/"+this.appointment.reportpdf, this.appointment.reportpdf);
      }else{
        this.patientService.geteprescriptionpdf(this.id).subscribe((response) => {
          console.log(response.res)
          FileSaver.saveAs(environment.apiUrl+"/eprescription/"+this.id+".pdf", this.id+".pdf");

        })


      }

    }


}
