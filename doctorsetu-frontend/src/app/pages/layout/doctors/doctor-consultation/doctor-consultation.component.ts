import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { DoctorService } from './../../../../api/doctor.service';
// import { Routes } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'ngx-doctor-consultation',
  templateUrl: './doctor-consultation.component.html',
  styleUrls: ['./doctor-consultation.component.scss']
})


export class DoctorConsultationComponent implements OnInit {
  constructor(private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) { }
  name = 'Angular 5';
  lat:any=12.972442;
  lng:any = 77.580643;
  // latitude = -28.68352;
  // longitude = -147.20785;
  mapType = 'satellite';
  
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }
  // FormControl = new FormControl(new Date());
  // ngModelDate = new Date();
  fileno: number = 0;
  id: any;
  days: any = [{ name: 'mon', fname: 'monday' }, { name: 'tue', fname: 'tuesday' }, { name: 'wed', fname: 'wednesday' }, { name: 'thu', fname: 'thursday' }, { name: 'fri', fname: 'friday' }, { name: 'sat', fname: 'saturday' }, { name: 'sun', fname: 'sunday' }];
  avaliableMode: any = [{ name: "call", icon: "fas fa-phone" }, { name: "video", icon: "fas fa-video" }, { name: "whatsapp", icon: "fab fa-whatsapp" }, { name: "clinic", icon: "fas fa-clinic-medical" }]
  consultationlist: any ={};
  // = {
  //   config_1: {
  //     startTime: '10:00',
  //     endTime: '12:30',
  //     days: ['monday', 'tuesday', 'wednesday', 'thursday'],
  //     avaliableMode: ['call', 'clinic'],
  //   }
  // }
  doctor_name: any='';
  clinicname:string='';
  address:string;
  city:string ="";
  state:string ="";
  doc_consultation_fee:any=0;
  pin:string='';
  map:boolean= false;
  // apikey:string="AIzaSyBYdGiZgGgCTyUOFheIcBmMxvQv4q6finI";
  interval:number=30;
  doctor_details:any =[];
  isClinic:boolean=false;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;

    this.getDoctorDetails(this.id)
  }

  mapview(){
    this.map=!this.map

  }
  isClinictoggal(){
    if(this.isClinic){
      console.log(this.consultationlist)

      for (var key in this.consultationlist) {
        console.log(this.consultationlist[key].avaliableMode)
        var index = this.consultationlist[key].avaliableMode.indexOf("clinic");
        this.consultationlist[key].avaliableMode.splice(index, 1);
      }
    }
  }
  toggleconsult(name, key, type) {
    console.log(name);
    console.log(key)
    console.log(type)
    console.log(this.isClinic)
    if((!this.isClinic && name !='clinic') || (this.isClinic)){
      console.log("enter")

    

      if (this.consultationlist[key][type].includes(name)) {
        let index = this.consultationlist[key][type].indexOf(name);
        if (index > -1) {
          this.consultationlist[key][type].splice(index, 1);
        }
      } else {
        this.consultationlist[key][type].push(name);
      }
    }
  }
  removeConfigBlock(key) {
    if(key != 'config_0'){
    delete this.consultationlist[key];
    }
  }

  getvalue(value) {
    alert(value);
  }
  addconsultblock() {
    var elementID = 'config_' + 0;
   
   alert(JSON.stringify(this.consultationlist));
   // console.log(JSON.stringify(this.consultationlist['config_' + this.fileno]));
    for(var i=0; i<this.fileno; i++) {
      elementID = 'config_' + i ;
     
      /*
      this.consultationlist[elementID] = {
        startTime: this.consultationlist[elementID].startTime,
        endTime: this.consultationlist[elementID].endTime,
        days: [],
        avaliableMode: []
      }*/
    }
    
    if(this.fileno <5) {
      this.fileno++;
      this.consultationlist['config_' + this.fileno] = {
        startTime: '--:--',
        endTime: '--:--',
        days: [],
        avaliableMode: [],
      }
   
    }
    
    

  }
  getDoctorDetails(id: any) {
    // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
      this.doctorService.doctorDetails(id).subscribe((response) => {
        console.log(response.res)
        if(response.res.clinicdetails){
      this.clinicname=response.res.clinicdetails.doc_clinic_name || "";
      this.address=response.res.clinicdetails.doc_clinic_address || "";
      this.lat=response.res.clinicdetails.lat || 12.972442 ;
      this.lng=response.res.clinicdetails.long || 77.580643
       this.city=response.res.clinicdetails.doc_clinic_city || "";
       this.state=response.res.clinicdetails.doc_clinic_state || ""
       this.pin=response.res.clinicdetails.doc_clinic_pincode || 0;
       this.isClinic=response.res.clinicdetails.isClinic || false;
       
        }else{
          this.doctor_details.clinicdetails={}
          this.doctor_details.clinicdetails['lat']=12.972442
        }
        
        if(response.res.clinicdetails && response.res.clinicdetails.doc_consultation_fee){
          this.doc_consultation_fee=response.res.clinicdetails.doc_consultation_fee;
        }else{
          this.doc_consultation_fee=0;
        }
      delete response.res._id;
      this.doctor_details=response.res;
      

      response.res.slotDetails.forEach( item =>{ 
        this.interval= parseInt(item.interval);
            
        this.consultationlist['config_' + this.fileno] = {
          startTime: item.starttime,
          endTime: item.endtime,
          days: item.days,
          avaliableMode: item.avaliableMode,
        }
        this.fileno++;

      });
      console.log(this.doctor_details.slotDetails)

      this.doctor_name = response.res.name.first;
      // this.doctor_details = response.res;
      // this.image = "http://api.doctorsetu.com:8000"+this.doctor_details.profilepic;
      // imguri: Config.appapiurl + 'pictures/profile/user/patient-default-profile-icon-male.jpg',
      console.log("================")
    })

  }
  markerDragEnd($event: any) {
    console.log($event.latLng.lat());
    this.lat = $event.latLng.lat();
    this.lng = $event.latLng.lng();
    

  }
  upload() {
    var elementID = 'config_' + 0;
    this.doctor_details.slotDetails = [];
   // alert(JSON.stringify(this.consultationlist));
   
    for (let item in this.consultationlist) {
      this.doctor_details.slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[item].avaliableMode })
     // console.log("SLOT TIME : " + this.consultationlist[item].startTime);
    }
    
 
    
    this.doctorService.doctorUpdateSlot(this.id, this.doctor_details.slotDetails).subscribe((response) => {
      console.log("Updated successfully!");
    });
     /*
    if(this.doctor_details.clinicdetails) {
    } else {
      this.doctor_details.clinicdetails={}
    }
    this.doctor_details.clinicdetails.lat = this.lat;
    this.doctor_details.clinicdetails.long = this.lng
    this.doctor_details.clinicdetails.marker = {};
    this.doctor_details.clinicdetails.marker.latitude=this.lat;
    this.doctor_details.clinicdetails.marker.longitude=this.lng;


    this.doctor_details.clinicdetails.doc_clinic_name= this.clinicname;
    this.doctor_details.clinicdetails.doc_clinic_address= this.address;
    this.doctor_details.clinicdetails.doc_clinic_pincode= this.pin;
    this.doctor_details.clinicdetails.doc_clinic_state= this.state;
    this.doctor_details.clinicdetails.doc_clinic_city= this.city;
    this.doctor_details.clinicdetails.isClinic=this.isClinic;
    
    this.doctor_details.clinicdetails.doc_consultation_fee= this.doc_consultation_fee;
   /*
    this.doctorService.doctorUpdate(this.id, this.doctor_details).subscribe((response) => {

      console.log("Updated succfully!");
       window.location.reload();
    })*/

   // window.location.reload();

  }


  myupload(){
    
    
    this.doctor_details.slotDetails = [];
    for (let item in this.consultationlist) {
     // console.log("Days : " + this.consultationlist[item].days);
       this.doctor_details.slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[item].avaliableMode})
    }
   
    /*
    if(this.doctor_details.clinicdetails) {
    } else {
      this.doctor_details.clinicdetails={}
    }
    this.doctor_details.clinicdetails.lat = this.lat;
    this.doctor_details.clinicdetails.long = this.lng
    this.doctor_details.clinicdetails.marker = {};
    this.doctor_details.clinicdetails.marker.latitude=this.lat;
    this.doctor_details.clinicdetails.marker.longitude=this.lng;


    this.doctor_details.clinicdetails.doc_clinic_name= this.clinicname;
    this.doctor_details.clinicdetails.doc_clinic_address= this.address;
    this.doctor_details.clinicdetails.doc_clinic_pincode= this.pin;
    this.doctor_details.clinicdetails.doc_clinic_state= this.state;
    this.doctor_details.clinicdetails.doc_clinic_city= this.city;
    this.doctor_details.clinicdetails.isClinic=this.isClinic;
    
    this.doctor_details.clinicdetails.doc_consultation_fee= this.doc_consultation_fee;

    this.doctorService.doctorUpdate(this.id, this.doctor_details).subscribe((response) => {

      console.log("Updated succfully!");
       window.location.reload();
    })
    */
  }

}
