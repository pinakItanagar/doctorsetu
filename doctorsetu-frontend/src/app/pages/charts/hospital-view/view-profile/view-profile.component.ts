import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { DoctorService } from './../../../../api/doctor.service';
import { environment } from './../../../../../environments/environment';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { PatientService } from './../../../../api/patient.service';
import { BarLabelComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'ngx-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor( private patientService:PatientService,private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) {}

days: any = [{ name: 'mon', fname: 'monday' }, { name: 'tue', fname: 'tuesday' }, { name: 'wed', fname: 'wednesday' }, { name: 'thu', fname: 'thursday' }, { name: 'fri', fname: 'friday' }, { name: 'sat', fname: 'saturday' }, { name: 'sun', fname: 'sunday' }];
appointmentType: any = [{ name: "call", icon: "fas fa-phone" }, { name: "video", icon: "fas fa-video" }, { name: "whatsapp", icon: "fab fa-whatsapp" }, { name: "clinic", icon: "fas fa-clinic-medical" }];
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
image:string;
hosp_name:string;
city:string;
affiliations:string;
state:string;
pin:string;
registration_number:string;
contact_person:string;
hospital_email:string;
hospital_ph:string;
branch_id:string;
name = 'Angular 5';
lat: any = 12.991559579643953;
lng: any = 77.59527616202831;
mapType = 'satellite';
map:boolean=false;

if (navigator){
navigator.geolocation.getCurrentPosition( pos => {
    this.lng = +pos.coords.longitude;
    this.lat = +pos.coords.latitude;
  });
}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.branch_id = this.activatedRoute.snapshot.queryParams.branch_id;

    this.gethospitaldetailsbyID();
  }

  
  mapview(){
    this.map=!this.map

  }
  
  
  markerDragEnd($event: any) {
    this.lat = $event.latLng.lat();
    this.lng = $event.latLng.lng();
  }
  gethospitaldetailsbyID(){
    this.patientService.gethospitaldetailsbyID(this.id).subscribe((response) => {
       if(this.branch_id != undefined){
        var branch =response.response.branches.filter(obj => obj.branch_id === this.branch_id);      
        branch =branch[0]
        this.address=branch.address || '';
        this.image = branch.hosp_logo || 'https://www.lyfboat.com/app/uploads/hospitals/default-hospital-profile.jpg';
        this.symptoms = branch.symptoms.toString().split(',').join(', ');
        this.specialisation =branch.specialisation.toString().split(',').join(', ');
        this.address = branch.address;
        this.about = branch.about || '';
        this.contact_person = branch.contact_person || ''

        if(branch.marker){
          this.lat=branch.marker.latitude || 12.991559579643953;
          this.lng= branch.marker.longitude || 77.59527616202831;
          }
          this.affiliations = branch.affiliations
        this.hosp_name=branch.hosp_name;
        this.city=branch.city || '';
         this.state=branch.state || '';
        this.pin=branch.pin || '';
        this.registration_number = branch.registration_number || '';
        // this.hosp_name=response.response.hosp_name;
        this.hospital_email = branch.email || '';
        this.hospital_ph = branch.phone || '';
               this.slotDetails=branch.slotDetails
               this.doc_achievements=branch.achievements
       }else{

        if(response.response.marker){
        this.lat=response.response.marker.latitude || 12.991559579643953;
        this.lng= response.response.marker.longitude || 77.59527616202831;
        }
        
      this.address=response.response.address || ''
      this.image=response.response.hosp_logo ||  'https://www.lyfboat.com/app/uploads/hospitals/default-hospital-profile.jpg';
      this.about = response.response.about || '';
      if(response.response.symptoms.length){
      this.symptoms = response.response.symptoms.toString().split(',').join(', ');
      }
      if(response.response.specialisation){
      this.specialisation =response.response.specialisation.toString().split(',').join(', ');
      }
      this.affiliations =response.response.affiliations;
      this.hosp_name=response.response.hosp_name;
      this.city=response.response.city || '';
       this.state=response.response.state || '';
       
       this.contact_person = response.response.contact_person || ''
      this.pin=response.response.pin || '';
      this.registration_number = response.response.registration_number || '';
      this.hospital_email = response.response.email || '';
      this.hospital_ph = response.response.phone || '';
      this.slotDetails=response.response.slotDetails
      this.doc_achievements=response.response.achievements
       }

    })
  }

  updatehospital(data){
    this.patientService.updatehospital(data).subscribe((response) => {

    })
  }

  // getDoctorDetails(id:any) {
  //     this.doctorService.doctorDetails(id).subscribe((response) => {
  
  //     this.doc_achievements=response.res.doc_achievements;
  //     this.doctor_name=response.res.name.first;
  //     this.doctor=response.res;
  //     this.profileimg=environment.apiUrl+'/'+this.doctor.profilepic;
      
  //     this.avaliableMode = this.doctor.slotDetails[0].avaliableMode;
  //     this.avaliableDays=this.doctor.slotDetails[0].days;
  //     this.slotDetails=this.doctor.slotDetails;
  //     this.address=this.doctor.contact.address[0]
  //     this.clinicname=this.doctor.clinicdetails ? this.doctor.clinicdetails.doc_clinic_name : "";
  //     this.haveclinic=this.doctor.clinicdetails ? 'Yes' : 'No'
  //     this.doc_clinic_address=this.doctor.clinicdetails ? this.doctor.clinicdetails.doc_clinic_address : "";
  //     this.phone=this.doctor.contact.telephone[0];
  //     this.aadhaar=this.doctor.doc_aadhaar;      ;
  //     this.email=this.doctor.contact.email[0]
  //     this.doc_dob=this.doctor.doc_dob;
      
  //     this.gender=this.doctor.gender;
  //     this.languages=this.doctor.languages[0].replace(/,(?=[^\s])/g, ", ");
  //     this.symptoms=this.doctor.symptoms.toString().replace(/,(?=[^\s])/g, ", ");
  //     this.about=this.doctor.about
  //     this.smc=this.doctor.doc_smcregno;
  //     this.imr=this.doctor.doc_imrno;
  //     this.qualification=this.doctor.specializations[0].degree;
  //     this.specialisation=this.doctor.specializations[0].name.replace(/,(?=[^\s])/g, ", ");
      
  //   })
  
  // }

}
