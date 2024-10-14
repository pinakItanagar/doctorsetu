import { Component, OnInit } from '@angular/core';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { PatientService } from './../../../api/patient.service';
import { environment } from './../../../../environments/environment';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NavigationStart } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'ngx-consultation-update',
  templateUrl: './consultation-update.component.html',
  styleUrls: ['./consultation-update.component.scss']
})
export class ConsultationUpdateComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private patientService: PatientService,private activatedRoute: ActivatedRoute, private router: Router) { }
  id:string;
  appointment_subtype:string;
  appointment:any;
  date:string;
  appointment_status:string;
  appointment_time:string;
  appointment_desc:string="123";
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
  user_preexisting:string="";
  user_alergicto:string='';
  user_address:string=""
  profilepicdoc:string=''
  profilepic:string=''
  displayFile:string;
  myFiles:any=[];
  showupload:boolean=false;
  imageview:any;
  petientdoc:any=[];


 
  ngOnInit(): void {

  this.id = this.activatedRoute.snapshot.queryParams.id;
  this.getconsultationDetails();
    }
    viewupload(){
      this.showupload = !this.showupload;
    }
    
    getconsultationDetails(){
  
        this.patientService.getconsulationdetails(this.id).subscribe((response) => {
          console.log(response.res[0]);

          this.appointment=response.res[0];
          this.appointment_subtype= this.appointment.appointment_subtype;
          this.date=this.appointment.date;
          this.appointment_status=this.appointment.appointment_status;

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
          this.appointment_time=this.appointment.appointment_time;
          this.appointment_desc=this.appointment.appointment_desc;
          this.updatedAt=this.appointment.updatedAt.substring(0,10);
          this.doctor_name=this.appointment.doctorDetails.name.first;
          this.specialization=this.appointment.doctorDetails.specializations[0].name;
          this.degree=this.appointment.doctorDetails.specializations[0].degree;
          this.smc_no=this.appointment.doctorDetails.doc_smcregno;
          this.doc_phnum="+91-"+this.appointment.doctorDetails.contact.telephone[0];
          if(this.appointment.doctorDetails.clinicdetails && this.appointment.doctorDetails.clinicdetails.doc_clinic_name){
          this.clinic_name=this.appointment.doctorDetails.clinicdetails.doc_clinic_name};
          this.doctor_email=this.appointment.doctorDetails.contact.email[0];
          this.doctor_address=this.appointment.doctorDetails.contact.address[0];
          this.patient_name=this.appointment.appointment_patientdata.user_name;
          this.patient_gender=this.appointment.appointment_patientdata.user_gender;
          this.user_preexisting=this.appointment.appointment_patientdata.user_preexisting
          this.user_alergicto=this.appointment.appointment_patientdata.user_alergicto
          this.user_address=this.appointment.appointment_patientdata.user_address
          if(this.appointment.doctorDetails.profilepic) this.profilepicdoc=environment.apiUrl+'/'+this.appointment.doctorDetails.profilepic; else this.profilepicdoc=environment.apiUrl+'/'+this.appointment.doctorDetails.profileimg;
          if(this.appointment.appointment_patientdata.user_img) this.profilepic=environment.apiUrl+'/'+this.appointment.appointment_patientdata.user_img; else this.profilepic=environment.apiUrl+'/'+"pictures/profile/user/male-profile-icon.jpg";

          this.user_dob=this.appointment.appointment_patientdata.user_dob;
          this.user_mobile="+91-"+this.appointment.appointment_patientdata.user_mobile;
          if(this.appointment.appointment_patientdata.user_height){
          this.user_height=this.appointment.appointment_patientdata.user_height +"cms";
          }else{
            this.user_height="__cms";

          }
          if(this.appointment.document_file.doc_0){
            this.petientdoc.push(this.appointment.document_file.doc_0);
          }
          if(this.appointment.document_file.doc_1){
            this.petientdoc.push(this.appointment.document_file.doc_1);
          }if(this.appointment.document_file.doc_2){
            this.petientdoc.push(this.appointment.document_file.doc_2);
          }
          if(this.appointment.appointment_patientdata.user_weight){
            this.user_weight=this.appointment.appointment_patientdata.user_weight +"cms";
            }else{
              this.user_weight="__Kgs";
  
            }
          // this.user_weight=this.appointment.appointment_patientdata.user_weight + "Kgs";
          this.user_bloodgroup=this.appointment.appointment_patientdata.user_bloodgroup ;
            
  
  
  
  
        })
      }

      handleFileInput(event:any) {
        console.log("====")
        // this.fileToUpload = files.item(0);
        console.log(event)
        this.displayFile = event.target.files[0].name;
    
        if (event.target.files.length > 0) {
          const file = event.target.files;
          // this.myForm.patchValue({
          //   fileSource: file
          // });
          this.myFiles.push(file);

          console.log(this.myFiles)

        }
    }
 viewpreception(file){
   console.log(file[0])
   let blob = new Blob(file, { type: file[0].type });
let url = window.URL.createObjectURL(blob);

window.open(url, "_blank")

 }
    viewiamge(event){
      console.log("=====")
      console.log(event)
      window.open(environment.apiUrl+"/uploads/"+event.documentname)

      // var reader = new FileReader();
  
      //   reader.readAsDataURL(event.target.files[0]); // read file as data url
      //   reader.onload = (event) => { // called once readAsDataURL is completed
      //     this.imageview = event.target.result;
          
        // }
    }
    
    removeimge(file){
      this.myFiles = this.myFiles.filter((item) => item.name !== file.name);


    }

      submit(){
        const formData = new FormData();

        for (var i = 0; i < this.myFiles.length; i++) {
          console.log(this.myFiles[i]) 
          formData.append("eprescription", this.myFiles[i][0]);
        }
        console.log(this.observation, this.analysis, this.presciption);
        let data =this.myForm.get('fileSource').value;
        formData.append('appointmentId', this.id);
        formData.append('eprescription', this.myForm.get('fileSource').value);

        formData.append('observation', this.observation);

        formData.append('analysis', this.analysis);

        formData.append('presciption', this.presciption);
        console.log("========")

        console.log(formData);
        console.log("========")

            
        
        
        this.patientService.updateappointment(formData).subscribe((response) => {
 
          console.log(response);
          this.router.navigateByUrl('pages/charts/details?id='+this.id);

        })
      }
      // downloadpdf(){
      //   console.log("download pdf", this.appointment.reportpdfurl)
      //   // window.location.assign('http://devapi.doctorsetu.com/eprescription/APT_6002013.pdf');
      //   FileSaver.saveAs(environment.apiUrl+"/eprescription/APT_6002013.pdf", "APT_6002013.pdf");
  
      //   // window.do ("http://devapi.doctorsetu.com/eprescription/APT_6002013.pdf")
  
      // }
  
  
  }
  
