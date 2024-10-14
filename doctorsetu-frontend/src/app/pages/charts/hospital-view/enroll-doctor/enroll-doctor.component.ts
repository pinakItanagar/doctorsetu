import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator,  } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NbIconConfig } from '@nebular/theme';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { PatientService } from '../../../../api/patient.service';

import { FormControl } from '@angular/forms';
import { Input} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';
import {  Injectable } from '@angular/core';
import { DoctorService } from '../../../../api/doctor.service';
import { ConstantPool } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'ngx-enroll-doctor',
  templateUrl: './enroll-doctor.component.html',
  styleUrls: ['./enroll-doctor.component.scss']
})
export class EnrollDoctorComponent implements OnInit {

  constructor(private patientService: PatientService, 
    private router: Router, private doctorService:DoctorService, private activatedRoute: ActivatedRoute) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  patients:any=[];
  dataSource:any;
  status: boolean = false;
  editstatus:boolean=false;

//  ngOnInit(): void {

//  }

 showhidebox() {
  this.status = !this.status;
}
showhideboxeditcancel(){
  this.editstatus = !this.editstatus;

}
edit_docname;
edit_doc_consultation_fee;
edit_interval;
edit_consultationlist;
edit_doc;
fileno: number = 0;
id: any;
private banks: any[]  = [];

days: any = [{ name: 'mon', fname: 'monday' }, { name: 'tue', fname: 'tuesday' }, { name: 'wed', fname: 'wednesday' }, { name: 'thu', fname: 'thursday' }, { name: 'fri', fname: 'friday' }, { name: 'sat', fname: 'saturday' }, { name: 'sun', fname: 'sunday' }];
avaliableMode: any = [{ name: "call", icon: "fas fa-phone" }, { name: "video", icon: "fas fa-video" }, { name: "whatsapp", icon: "fab fa-whatsapp" }, { name: "opd", icon: "fas fa-clinic-medical" }]
consultationlist: any ={};





openModaledit(){
}


@ViewChild('singleSelect') singleSelect: MatSelect; 

/** Subject that emits when the component has been destroyed. */
private _onDestroy = new Subject<void>();


ngAfterViewInit() {
}

ngOnDestroy() {
 this._onDestroy.next();
 this._onDestroy.complete();
}


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
doc_consultation_fee:any=100;
pin:string='';
map:boolean= false;
// apikey:string="AIzaSyBYdGiZgGgCTyUOFheIcBmMxvQv4q6finI";
interval:number=30;
doctor_details:any =[];
isClinic:boolean=false;
image:string;
hosp_name:string;
hospital:any;
hospitalslotDetails:any[];
doctor_id:string;
doctorlist:any=[];
branch_id:string;
add_branch:string;
ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.queryParams.id;
  this.branch_id = this.activatedRoute.snapshot.queryParams.branch_id;
  this.add_branch = this.activatedRoute.snapshot.queryParams.addbranch;

  this.filteredBanks.next(this.banks.slice());
  this.filteredBanksMulti.next(this.banks.slice());
  if(this.activatedRoute.snapshot.queryParams.addbranch == undefined && this.activatedRoute.snapshot.queryParams.hospital_id == undefined){
    this.gethospitaldetailsbyID();
  console.log("===========================")
  }
    this.bankFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanks();
     });


     this.bankMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti();
     });
}

public bankCtrl: FormControl = new FormControl();
public bankFilterCtrl: FormControl = new FormControl();
public bankMultiCtrl: FormControl = new FormControl();
public bankMultiFilterCtrl: FormControl = new FormControl();

public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

/** list of banks filtered by search keyword for multi-selection */
public filteredBanksMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
branch:any;
gethospitaldetailsbyID(){
  this.patientService.gethospitaldetailsbyID(this.id).subscribe((response) => {
    delete response.response._id;
    this.hospital=response.response;
    console.log("calling-------------------")


    if(this.branch_id != undefined){
      var branch =response.response.branches.filter(obj => obj.branch_id === this.branch_id);      
this.branch =branch[0];
setTimeout(() => {
  console.log("calling--------123-----------")
  this.getDoctorlist();

}, 1234);

// branch=response.response.doctor_enrolled;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.branch.doctor_enrolled);
this.dataSource.sort = this.sort;
 this.dataSource.paginator = this.paginator;
    }else{
    

    this.hospital.doctor_enrolled=response.response.doctor_enrolled;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.hospital.doctor_enrolled);
this.dataSource.sort = this.sort;
 this.dataSource.paginator = this.paginator;
 this.getDoctorlist();

  }
  })
}
private filterBanks() {
  if (!this.banks) {
    return;
  }
  // get the search keyword
  let search = this.bankFilterCtrl.value;
  if (!search) {
    this.filteredBanks.next(this.banks.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks.next(
    this.banks.filter(bank => bank.name.first.toLowerCase().indexOf(search) > -1)
  );
}

getDoctorlist(){
  this.doctorService.getdoctorlist().subscribe((response) => {
  this.doctorlist =  response.response;
  // this.banks = this.doctorlist.filter(bank => bank.name.first != this.hospital.doctor_enrolled[0].doctor.name.first)
  this.bankCtrl.setValue(this.banks[0]);
  console.log(this)
  this.banks = this.doctorlist;

if(this.branch_id == undefined){
  if(this.hospital.doctor_enrolled){

  this.hospital.doctor_enrolled.forEach((ele, index, array)  => {
    this.doctorlist = this.doctorlist.filter(bank => bank.name.first != ele.doctor.name.first)

    if(index == this.hospital.doctor_enrolled.length - 1){
      console.log("last Index--");
      this.banks = this.doctorlist;

    }
  });
}else{
  this.banks = this.doctorlist;

  }
}else{
  console.log(this.branch)
  this.banks = this.doctorlist;

  if(this.branch.doctor_enrolled){
  this.branch.doctor_enrolled.forEach((ele, index, array)  => {
    this.doctorlist = this.doctorlist.filter(bank => bank.name.first != ele.doctor.name.first)

    if(index == this.branch.doctor_enrolled.length - 1){
      console.log("last Index--");
      this.banks = this.doctorlist;

    }
  });
}else{
  this.banks = this.doctorlist;

  }
}
  })

}

private filterBanksMulti() {
  if (!this.banks) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl.value;
  if (!search) {
    this.filteredBanksMulti.next(this.banks.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti.next(
    this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
  );
}

bank:string;
overlap:boolean=false;
hospital_enrolled:any;
// hospital enrolled
//Enroll new doctor to hospital

enrollDoctor() {
  this.doctor_id=this.bankCtrl.value.id;
  this.hospitalslotDetails = this.bankCtrl.value.hospitalslotDetails || []
  var slots = [];
    for (let item in this.consultationlist) {
      slots.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[item].avaliableMode})
    }
    if(this.bankCtrl.value.hospitalslotDetails != undefined){
      if(this.bankCtrl.value.slotDetails == undefined){
        this.bankCtrl.value.slotDetails = []
      }
      console.log(this.bankCtrl.value)

    this.bankCtrl.value.hospitalslotDetails.forEach(element => {
      this.bankCtrl.value.slotDetails.push(element);
    });
  }
console.log(this.bankCtrl.value);
    if(this.bankCtrl.value.slotDetails && this.bankCtrl.value.slotDetails.length>0){
  this.bankCtrl.value.slotDetails.forEach( (doc_slot, doc_slot_index, doc_slotarray) => {

    slots.forEach((slot, slot_index, slotarray )=> {
      if(doc_slot.days.some(r=> slot.days.indexOf(r) >= 0)){

        if(!this.isBetween(parseInt(doc_slot.starttime.substring(0, 2)), parseInt(slot.starttime.substring(0, 2)), parseInt(slot.endtime.substring(0, 2))) && !this.isBetween(parseInt(doc_slot.endtime.substring(0, 2)) , parseInt(slot.starttime.substring(0, 2)), parseInt(slot.endtime.substring(0, 2)))){

    }else{
    
    this.overlap=true;
    } 
  }

  if( slot_index == (slotarray.length-1) && doc_slot_index == (doc_slotarray.length-1) && this.overlap == false){
    
          var doctor_enrolled ={
            doctor:this.bankCtrl.value,
            doc_consultation_fee:this.doc_consultation_fee,
            interval:this.interval,
            consultationlist:this.consultationlist,
            slotDetails:slots
          }
          if(this.branch_id != undefined){
          
          for(let i=0; i<this.hospital.branches.length;i++){
          
            if(this.hospital.branches[i].branch_id == this.branch_id){
          
              this.hospital.branches[i].doctor_enrolled.push(doctor_enrolled);
              this.updatefields();
            }
          }
          }else{
            
            if(this.hospital.doctor_enrolled == undefined){
              this.hospital.doctor_enrolled = [];
              this.hospital.doctor_enrolled.push(doctor_enrolled);

            }else{
              this.hospital.doctor_enrolled.push(doctor_enrolled);
            }
            this.updatefields();
          }
        }

})

})
    }else{
      var doctor_enrolled ={
        doctor:this.bankCtrl.value,
        doc_consultation_fee:this.doc_consultation_fee,
        interval:this.interval,
        consultationlist:this.consultationlist,
        slotDetails:slots
      }
      if(this.branch_id != undefined){
      
      for(let i=0; i<this.hospital.branches.length;i++){
      
        if(this.hospital.branches[i].branch_id == this.branch_id){
      
          this.hospital.branches[i].doctor_enrolled.push(doctor_enrolled);
      
          this.updatefields();
      
        }
      }
      }else{
      this.hospital.doctor_enrolled.push(doctor_enrolled);
      
        this.updatefields();
      }
    }

}

removeoverlap(){
  this.overlap=false
}

deleteModalpopup(ele){
  if(this.branch_id != undefined){
    for(let i=0; i<this.hospital.branches.length;i++){
    
      if(this.hospital.branches[i].branch_id == this.branch_id){
    
        // this.hospital.branches[i].doctor_enrolled.push(doctor_enrolled);
        this.hospital.branches[i].doctor_enrolled = this.hospital.branches[i].doctor_enrolled.filter((item) => item.doctor.id != ele.doctor.id);

        this.updatefields();
    
      }
    }
    }else{
  this.hospital.doctor_enrolled = this.hospital.doctor_enrolled.filter((item) => item.doctor.id != ele.doctor.id);
  this.updatefields();

    }
}
isBetween(n, a, b) {
  return (n - a) * (n - b) <= 0
}

showhideboxedit(element){
  this.doctorService.doctorDetails(element.doctor.id).subscribe((response) => {
  this.doctor_details=response.res;
  this.edit_doc_consultation_fee=element.doc_consultation_fee;
  this.edit_interval=element.interval;
this.edit_docname=element.doctor.name.first
this.edit_doc=element;
this.edit_consultationlist=element.consultationlist;
  this.editstatus = !this.editstatus;
  this.fileno=0;
  console.log(element)
  if(element.slotDetails.length){ 
  element.slotDetails.forEach( item =>{ 
    this.fileno++;
    console.log(this.fileno + "=====")

  });
}
})
}


editopenModal() {
var slots = []

    for (let item in this.edit_consultationlist) {
      slots.push({'days':this.edit_consultationlist[item].days,'starttime':this.edit_consultationlist[item].startTime,'endtime':this.edit_consultationlist[item].endTime,'interval':this.edit_interval.toString(),'avaliableMode':this.edit_consultationlist[item].avaliableMode})
    }
    this.doctor_details.hospitalslotDetails.forEach(element => {

      if(this.branch_id != undefined){

      if(element.hospital_id != this.id){
        this.doctor_details.slotDetails.push(element);
      }
    }else{
      if(element.hospital_id != this.branch_id){
        this.doctor_details.slotDetails.push(element);
        }
    }
    });

    if(this.doctor_details.slotDetails.length>0){
      this.doctor_details.slotDetails.forEach( (doc_slot, doc_slot_index, doc_slotarray) => {

        slots.forEach((slot, slot_index, slotarray )=> {
        
          if(doc_slot.days.some(r=> slot.days.indexOf(r) >= 0)){
    
            if(!this.isBetween(parseInt(doc_slot.starttime.substring(0, 2)), parseInt(slot.starttime.substring(0, 2)), parseInt(slot.endtime.substring(0, 2))) && !this.isBetween(parseInt(doc_slot.endtime.substring(0, 2)) , parseInt(slot.starttime.substring(0, 2)), parseInt(slot.endtime.substring(0, 2)))){
    
        }else{
        
        this.overlap=true;
        } 
      }
      if( slot_index == (slotarray.length-1) && doc_slot_index == (doc_slotarray.length-1) && this.overlap == false){
        var doctor_enrolled ={
          doctor:this.edit_doc.doctor,
          doc_consultation_fee:this.edit_doc_consultation_fee,
          interval:this.edit_interval,
          consultationlist:this.edit_consultationlist,
          slotDetails:slots
        
        };
        
        if(this.branch_id != undefined){
         
          for(let i=0; i<this.hospital.branches.length;i++){
            if(this.hospital.branches[i].branch_id == this.branch_id){
            
          this.hospital.branches[i].doctor_enrolled = this.hospital.branches[i].doctor_enrolled.filter((item) => item.doctor.id != this.edit_doc.doctor.id);
        
          this.hospital.branches[i].doctor_enrolled.push(doctor_enrolled);
            }
        }
        }else{
          this.hospital.doctor_enrolled = this.hospital.doctor_enrolled.filter((item) => item.doctor.id != this.edit_doc.doctor.id);
        
        this.hospital.doctor_enrolled.push(doctor_enrolled);
        }
        this.doc_consultation_fee = this.edit_doc_consultation_fee;
        
        setTimeout(() => {
          this.updatefields();
        
        }, 1000);  
      
      }

    })
  }) 

    }else{
      var doctor_enrolled ={
        doctor:this.edit_doc.doctor,
        doc_consultation_fee:this.edit_doc_consultation_fee,
        interval:this.edit_interval,
        consultationlist:this.edit_consultationlist,
        slotDetails:slots
      
      };
      if(this.branch_id != undefined){
       
        for(let i=0; i<this.hospital.branches.length;i++){
          if(this.hospital.branches[i].branch_id == this.branch_id){
          
        this.hospital.branches[i].doctor_enrolled = this.hospital.branches[i].doctor_enrolled.filter((item) => item.doctor.id != this.edit_doc.doctor.id);
      
        this.hospital.branches[i].doctor_enrolled.push(doctor_enrolled);
          }
      }
      }else{
        this.hospital.doctor_enrolled = this.hospital.doctor_enrolled.filter((item) => item.doctor.id != this.edit_doc.doctor.id);
      
      this.hospital.doctor_enrolled.push(doctor_enrolled);
      }
      this.doc_consultation_fee = this.edit_doc_consultation_fee;

      setTimeout(() => {
        this.updatefields();
      
      }, 1000);  
    }


}

updatefields(){
  
 this.doctorService.hospitalUpdate(this.id, this.hospital).subscribe((response) => {
   console.log("Updated succfully!"); 
   var hospital_enrolled={}
   console.log(this.consultationlist)
   this.hospitalslotDetails =[]
   if(this.consultationlist.config_0){      
      for (let slot in this.consultationlist) {
        if(this.branch_id != undefined){
          hospital_enrolled={'hospital_id':this.branch.branch_id, 'hosp_name':this.branch.hosp_name,'fees':this.doc_consultation_fee}

      this.hospitalslotDetails.push({'days':this.consultationlist[slot].days,'starttime':this.consultationlist[slot].startTime,'endtime':this.consultationlist[slot].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[slot].avaliableMode, 'hospital_id':this.hospital.id})
        }else{
          hospital_enrolled={'hospital_id':this.hospital.id, 'hosp_name':this.hospital.hosp_name,'fees':this.doc_consultation_fee}

          this.hospitalslotDetails.push({'days':this.consultationlist[slot].days,'starttime':this.consultationlist[slot].startTime,'endtime':this.consultationlist[slot].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[slot].avaliableMode, 'hospital_id':this.branch_id})
        }

      }    
      setTimeout(() => {
        this.doctorService.updateDoctorslots(this.doctor_id, this.hospitalslotDetails, hospital_enrolled).subscribe((response) => {
          window.location.reload();
        })
      }, 1230);
  }else if(this.edit_consultationlist.config_0){  
    console.log(this)    
    for (let slot in this.edit_consultationlist) {
      if(this.branch_id != undefined){
        hospital_enrolled={'hospital_id':this.branch.branch_id, 'hosp_name':this.branch.hosp_name,'fees':this.doc_consultation_fee}

    this.hospitalslotDetails.push({'days':this.edit_consultationlist[slot].days,'starttime':this.edit_consultationlist[slot].startTime,'endtime':this.edit_consultationlist[slot].endTime,'interval':this.edit_interval.toString(),'avaliableMode':this.edit_consultationlist[slot].avaliableMode, 'hospital_id':this.branch_id})
      }else{
        hospital_enrolled={'hospital_id':this.hospital.id, 'hosp_name':this.hospital.hosp_name,'fees':this.doc_consultation_fee}
console.log(this.edit_consultationlist[slot])
console.log(this.hospital_enrolled)
        this.hospitalslotDetails.push({'days':this.edit_consultationlist[slot].days,'starttime':this.edit_consultationlist[slot].startTime,'endtime':this.edit_consultationlist[slot].endTime,'interval':this.edit_interval.toString(),'avaliableMode':this.edit_consultationlist[slot].avaliableMode, 'hospital_id':this.hospital.id})
      }

    }    
    setTimeout(() => {
      this.doctorService.updateDoctorslots(this.doctor_details.id, this.hospitalslotDetails, hospital_enrolled).subscribe((response) => {
         window.location.reload();
      })
    }, 1230);
  }else{
             window.location.reload();

  }
   
 })

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
  // if((!this.isClinic && name !='clinic') || (this.isClinic)){
    console.log("enter")

  

  if (this.consultationlist[key][type].includes(name)) {
    let index = this.consultationlist[key][type].indexOf(name);
    if (index > -1) {
      this.consultationlist[key][type].splice(index, 1);
    }
  } else {
    this.consultationlist[key][type].push(name);
  }
// }
}
edittoggleconsult(name, key, type) {
  
  // if((!this.isClinic && name !='clinic') || (this.isClinic)){
    console.log("enter")

  

  if (this.edit_consultationlist[key][type].includes(name)) {
    let index = this.edit_consultationlist[key][type].indexOf(name);
    if (index > -1) {
      this.edit_consultationlist[key][type].splice(index, 1);
    }
  } else {
    this.edit_consultationlist[key][type].push(name);
  }
// }
}
removeConfigBlock(key) {
  if(key != 'config_0'){
  delete this.consultationlist[key];
  }
}

edit_removeConfigBlock(key) {
  if(key != 'config_0'){
  delete this.edit_consultationlist[key];
  }
}
addconsultblock() {
  console.log(this.consultationlist)
  if(this.fileno <5){
  this.consultationlist['config_' + this.fileno] = {
    startTime: '10:00',
    endTime: '20:00',
    days: [],
    avaliableMode: [],
  }
  this.fileno++;
}
}
editaddconsultblock(){
  console.log(this.fileno)
  if(this.fileno <5){
    console.log(this.edit_consultationlist['config_' + this.fileno])

  this.edit_consultationlist['config_' + this.fileno] = {
    startTime: '10:00',
    endTime: '20:00',
    days: [],
    avaliableMode: [],
  }
  this.fileno++;
}
}
// getDoctorDetails(id: any) {
//   // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
//     this.doctorService.doctorDetails(id).subscribe((response) => {
//       console.log(response.res)
//       if(response.res.clinicdetails){
//     this.clinicname=response.res.clinicdetails.doc_clinic_name || "";
//     this.address=response.res.clinicdetails.doc_clinic_address || "";
//     this.lat=response.res.clinicdetails.lat || 12.972442 ;
//     this.lng=response.res.clinicdetails.long || 77.580643
//      this.city=response.res.clinicdetails.doc_clinic_city || "";
//      this.state=response.res.clinicdetails.doc_clinic_state || ""
//      this.pin=response.res.clinicdetails.doc_clinic_pincode || 0;
//      this.isClinic=response.res.clinicdetails.isClinic || false;
     
//       }else{
//         this.doctor_details.clinicdetails={}
//         this.doctor_details.clinicdetails['lat']=12.972442
//       }
      
//       if(response.res.clinicdetails && response.res.clinicdetails.doc_consultation_fee){
//         this.doc_consultation_fee=response.res.clinicdetails.doc_consultation_fee;
//       }else{
//         this.doc_consultation_fee=0;
//       }
//     delete response.res._id;
//     this.doctor_details=response.res;
    

//     response.res.slotDetails.forEach( item =>{ 
//       this.interval= parseInt(item.interval);
          
//       this.consultationlist['config_' + this.fileno] = {
//         startTime: item.starttime,
//         endTime: item.endtime,
//         days: item.days,
//         avaliableMode: item.avaliableMode,
//       }
//       this.fileno++;

//     });
//     console.log(this.doctor_details.slotDetails)

//     this.doctor_name = response.res.name.first;
//     // this.doctor_details = response.res;
//     // this.image = "http://api.doctorsetu.com:8000"+this.doctor_details.profilepic;
//     // imguri: Config.appapiurl + 'pictures/profile/user/patient-default-profile-icon-male.jpg',
//     console.log("================")
//   })

// }

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
markerDragEnd($event: any) {
  console.log($event.latLng.lat());
  this.lat = $event.latLng.lat();
  this.lng = $event.latLng.lng();
  

}
// upload(){
//   this.doctor_details.slotDetails=[];
//   for (let item in this.consultationlist) {
//     this.doctor_details.slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[item].avaliableMode})
//   }
//   console.log(this.doctor_details)
//   if(this.doctor_details.clinicdetails){
//   }else{
//     this.doctor_details.clinicdetails={}
//   }
//   this.doctor_details.clinicdetails.lat = this.lat;
//   this.doctor_details.clinicdetails.long=this.lng
//   this.doctor_details.clinicdetails.marker={};
//   this.doctor_details.clinicdetails.marker.latitude=this.lat;
//   this.doctor_details.clinicdetails.marker.longitude=this.lng;


//   this.doctor_details.clinicdetails.doc_clinic_name= this.clinicname;
//   this.doctor_details.clinicdetails.doc_clinic_address= this.address;
//   this.doctor_details.clinicdetails.doc_clinic_pincode= this.pin;
//   this.doctor_details.clinicdetails.doc_clinic_state= this.state;
//   this.doctor_details.clinicdetails.doc_clinic_city= this.city;
//   this.doctor_details.clinicdetails.isClinic=this.isClinic;
  
//   this.doctor_details.clinicdetails.doc_consultation_fee= this.doc_consultation_fee;

//   this.doctorService.doctorUpdate(this.id, this.doctor_details).subscribe((response) => {

//     console.log("Updated succfully!");
//     // window.location.reload();
//   })

// }
    

   
  displayedColumns: string[] = [
    'position', 
    'name', 
    'hospitalName',
    // 'branches',
    'status',
    // 'actions',
  ];
  // dataSource = ELEMENT_DATA;


}

export interface PeriodicElement {
  name: string;
  position: number;
  hospitalName: string;
  branches: number;
  status: string;
  // actions: {view: string, edit: string,};
}

const ELEMENT_DATA: PeriodicElement[] = [
{
  position: 1, 
  name: 'Ravi Varma', 
  hospitalName: 'max',
  branches: 4,
  status: 'Active',
  // actions: {
  //   view: '',
  //   edit: '',
  // },
   
},

];