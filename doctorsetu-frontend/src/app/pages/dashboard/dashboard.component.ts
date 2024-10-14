import { FormControl } from '@angular/forms';
import { DoctorService } from './../../api/doctor.service';
import { Router } from '@angular/router';
import { ViewChild, Input} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';
import { Component, Injectable } from '@angular/core';
import { strict } from 'assert';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent  {
  constructor(private doctorService: DoctorService,protected router: Router) { 

  }
  toggleNgModel = true;
  toggleFormControl = new FormControl();
  pending : any;
  completed:any;
  canceled:any;
  doctor_name:any;
  from:any;
  to:any;
  d:any;
  accestype:string;
  doctor_details:any;
  max:any;
  online:any=false; 
  image:any;
  id:any;
  active_doctor:any;
  doctorlist:any=[];
  selectedDoctor:any;
  fee:any;
  

  ngOnInit(): void {
    
   this.filteredBanks.next(this.banks.slice());
   this.filteredBanksMulti.next(this.banks.slice());

   this.filteredBanks2.next(this.banks2.slice());
   this.filteredBanksMulti2.next(this.banks2.slice());

   this.filteredBanks3.next(this.banks3.slice());
   this.filteredBanksMulti3.next(this.banks3.slice());
   // listen for search field value changes
   this.bankFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanks();
     });

     this.bankFilterCtrl2.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanks2();
     });
     this.bankFilterCtrl3.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanks3();
     });
   this.bankMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti();
     });

     this.bankMultiFilterCtrl2.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti2();
     });

     this.bankMultiFilterCtrl3.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti3();
     });
    this.getDoctorlist();
    this.selectedDoctor ="All Doctor's";
    this.me();
    this.doctorlist=[];
    this.pending = 0;
    this.completed = 0;
    this.canceled= 0;
    this.fee=0

    
    this.to=[new Date().getFullYear(),('0' + (new Date().getMonth() + 1)).slice(-2),('0' + new Date().getDate()).slice(-2)].join('-');
    this.d  = new Date(new Date().getTime() - 144*60*60*1000);
    this.from=[this.d.getFullYear(),('0' + (this.d.getMonth() + 1)).slice(-2),('0' + this.d.getDate()).slice(-2)].join('-');

    this.max=[new Date().getFullYear(),('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');
    // this.getServices(this.id,"pending",this.from, this.to);
    this.getaccesslist();
  }

  getaccesslist() {
    this.doctorService.getaccesslist().subscribe((access) => {

    });
  }
  public bankCtrl: FormControl = new FormControl();
  public bankCtrl2: FormControl = new FormControl();
  public bankCtrl3: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
 public bankFilterCtrl: FormControl = new FormControl();
 public bankFilterCtrl2: FormControl = new FormControl();
 public bankFilterCtrl3: FormControl = new FormControl();

   /** control for the selected bank for multi-selection */
 public bankMultiCtrl: FormControl = new FormControl();
 public bankMultiCtrl2: FormControl = new FormControl();
 public bankMultiCtrl3: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
 public bankMultiFilterCtrl: FormControl = new FormControl();
 public bankMultiFilterCtrl2: FormControl = new FormControl();
 public bankMultiFilterCtrl3: FormControl = new FormControl();

 /** list of banks */
 private banks: any[]  = [{"id":"All","name":{"first":"All Doctor's","middle":"","last":""}}];
 private banks2: any[] = [
   {name: 'All Pin Code', id: 'A'},
   {name: '567826', id: '567826'},
   {name: '567823', id: '567823'},
   {name: '567666', id: '567666'},
   {name: '567876', id: '567876'},
   {name: '567888', id: '567888'},
   {name: '567899', id: '267899'},
   {name: '567860', id: '567860'},
   {name: '566899', id: '566899'},
   {name: '567811', id: '567811'} 
 ]


private banks3: any[] = [
  {name: 'All States', id: 'Allstate'},
  {name: 'Andhra Pradesh', id: 'Andhra Pradesh'},
  {name: 'Arunachal Pradesh', id: 'Arunachal Pradesh'},
  {name: 'Assam', id: 'Assam'},
  {name: 'Bihar', id: 'Bihar'},
  {name: 'Chhattisgarh', id: 'Chhattisgarh'},
  {name: 'Goa', id: 'Goa'},
  {name: 'Gujarat', id: 'Gujarat'},
  {name: 'Haryana', id: 'Haryana'},
  {name: 'Himachal Pradesh', id: 'Himachal Pradesh'},
  {name: 'Jammu and Kashmir', id: 'Jammu and Kashmir'},
  {name: 'Jharkhand', id: 'Jharkhand'},
  {name: 'Karnataka', id: 'Karnataka'},
  {name: 'Kerala', id: 'Kerala'},
  {name: 'Madhya Pradesh', id: 'Madhya Pradesh'},
  {name: 'Maharashtra', id: 'Maharashtra'},
  {name: 'Manipur', id: 'Manipur'},
  {name: 'Meghalaya', id: 'Meghalaya'},
  {name: 'Mizoram', id: 'Mizoram'},
  {name: 'Nagaland', id: 'Nagaland'},
  {name: 'Odisha', id: 'Odisha'},
  {name: 'Punjab', id: 'Punjab'},
  {name: 'Rajasthan', id: 'Rajasthan'},
  {name: 'Sikkim', id: 'Sikkim'},
  {name: 'Tamil Nadu', id: 'Tamil Nadu'},
  {name: 'Telangana', id: 'Telangana'},
  {name: 'Tripura', id: 'Tripura'},
  {name: 'Uttar Pradesh', id: 'Uttar Pradesh'},
  {name: 'Uttarakhand', id: 'Uttarakhand'},
  {name: 'West Bengal', id: 'West Bengal'}
]
 /** list of banks filtered by search keyword */
 public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

 /** list of banks filtered by search keyword for multi-selection */
 public filteredBanksMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

 @ViewChild('singleSelect') singleSelect: MatSelect; 

 /** Subject that emits when the component has been destroyed. */
 private _onDestroy = new Subject<void>();

 

 ngAfterViewInit() {
   this.setInitialValue();
 }

 ngOnDestroy() {
   this._onDestroy.next();
   this._onDestroy.complete();
 }

 /**
  * Sets the initial value after the filteredBanks are loaded initially
  */
 private setInitialValue() {

        
   this.filteredBanks
     .pipe(take(1), takeUntil(this._onDestroy))
     .subscribe(() => {          
       
       this.singleSelect.compareWith = (a: any, b: any) => a === b;
     });

     this.filteredBanks2
     .pipe(take(1), takeUntil(this._onDestroy))
     .subscribe(() => {          
       
       this.singleSelect.compareWith = (a: any, b: any) => a === b;
     });

     this.filteredBanks3
     .pipe(take(1), takeUntil(this._onDestroy))
     .subscribe(() => {          
       
       this.singleSelect.compareWith = (a: any, b: any) => a === b;
     });

      setTimeout(() => {
        // this.bankCtrl.setValue(this.banks[0]);
        this.bankCtrl2.setValue(this.banks2[0]);
        this.bankCtrl3.setValue(this.banks3[0]);
        // if(this.accestype == 'doctor'){

          setTimeout(() => {
            this.appointmentcount();
          }, 12);
        // }
        
      }, 1233);
   


 }
 goonline(){

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


 private filterBanks2() {
  if (!this.banks2) {
    return;
  }
  // get the search keyword
  let search = this.bankFilterCtrl2.value;
  if (!search) {
    this.filteredBanks2.next(this.banks2.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks2.next(
    this.banks2.filter(bank2 => bank2.name.toLowerCase().indexOf(search) > -1)
  );
}

private filterBanks3() {

  if (!this.banks3) {
    return;
  }
  // get the search keyword
  let search = this.bankFilterCtrl3.value;
  if (!search) {
    this.filteredBanks3.next(this.banks3.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks3.next(
    this.banks3.filter(bank3 => bank3.name.toLowerCase().indexOf(search) > -1)
  );
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

 private filterBanksMulti2() {
   
  if (!this.banks2) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl2.value;
  if (!search) {
    this.filteredBanksMulti2.next(this.banks2.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti2.next(
    this.banks2.filter(bank2 => bank2.name.toLowerCase().indexOf(search) > -1)
  );
}

private filterBanksMulti3() {

  if (!this.banks3) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl3.value;
  if (!search) {
    this.filteredBanksMulti3.next(this.banks3.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti3.next(
    this.banks3.filter(bank3 => bank3.name.toLowerCase().indexOf(search) > -1)
  );
  
}
   me(){
    this.doctorService.doctorDetailsbysessionID().subscribe(response=> {
    if(response.status == 200){
    this.id=response.res.id;
    this.online= response.res.online;
    this.doctor_name=response.res.name.first;
    this.doctor_details = response.res;

    this.accestype=response.res.accestype;
    
    // this.getServices("All","pending",this.from, this.to,"All","All");
    // this.getDoctorDetails(this.doctor_details.id);
   
  }else{
  
    this.router.navigateByUrl('/auth/login');
  
  }
  },
  error => {

    this.router.navigateByUrl('/auth/login');

  },)

}
  getServices(id,appointment_status:any, from_here:any, to_here:any, state:string, pin:string ) {

    from_here= from_here.split("-").reverse().join("-");
    to_here= to_here.split("-").reverse().join("-");
    this.doctorService.doctorAppointmentListCount(id,appointment_status, from_here , to_here, state, pin).subscribe((response) => {
this.banks=this.doctorlist;
// this.bankCtrl.setValue(this.doctorlist[0]);
this.fee=0;
response.res.appointments.forEach(element => {
  
  if(element.appointment_status == "completed"){

  let doctor = this.doctorlist.filter(obj=>obj.id ===element.appointment_docid);
  
if(doctor[0] && doctor[0].clinicdetails && doctor[0].clinicdetails.doc_consultation_fee){  

  this.fee= this.fee+parseInt(doctor[0].clinicdetails.doc_consultation_fee);
}else{
  this.fee=this.fee+250;
}
  }

});

  
  
  if(this.accestype == "hospitaladmin"){
    var pending = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.hospital_id && obj.appointment_status == "pending"));
    this.pending=  pending.length;
   
    var canceled = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.hospital_id && obj.appointment_status == "canceled"));
    this.canceled=  canceled.length;

    var completed = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.hospital_id && obj.appointment_status == "completed"));
    this.completed=  completed.length;
  }else if(this.accestype =="branchadmin"){ 
    var pending = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.branch_id && obj.appointment_status == "pending"));
    this.pending=  pending.length;
   
    var canceled = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.branch_id && obj.appointment_status == "canceled"));
    this.canceled=  canceled.length;

    var completed = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.branch_id && obj.appointment_status == "completed"));
    this.completed=  completed.length;

    // this.completed =  response.res.completed;
    // this.canceled =  response.res.cancelled;

}else{
  
      this.pending=  response.res.pending;
   
      this.completed =  response.res.completed;
      this.canceled =  response.res.cancelled;
}
    });
}
changeOnlineStatus(){
 
  console.log(this.online)
  this.doctorService.changeOnlineStatus(this.id ,!this.online).subscribe((response) => {
    
  })
}
getDoctorlist(){
  this.doctorService.getdoctorlist().subscribe((response) => {
  this.doctorlist =  response.response.sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
if((this.accestype == "hospitaladmin") || (this.accestype == "branchadmin")){
         
  var doctors=[]
  this.doctorlist.forEach(doc => {
    if(doc.hospital_enrolled){
      doc.hospital_enrolled.forEach(element => {
        if(element.hospital_id == this.doctor_details.hospital_id){
          
          doctors.push(doc)
        }
      });
    }
  });

this.active_doctor= doctors.length;
// this.bankCtrl.setValue(this.banks[0]);

// let perivatedate = Array.from(this.doctorlist);
// perivatedate.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
// this.banks = perivatedate;

}else{
  this.active_doctor=this.doctorlist.length;

}
  this.doctorlist.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
  this.bankCtrl.setValue(this.banks[0]);
  
  })
}


gotopending(){
  var doctor = this.doctorlist.filter(obj=>obj.name.first.trim() ===this.selectedDoctor.trim());

  this.router.navigateByUrl('pages/charts/consultation?status='+"pending&id="+doctor[0].id+"&from="+this.from+"&to="+this.to+"&state="+this.bankCtrl3.value.name+"&pin="+this.bankCtrl2.value.name);
}
gottocompleted(){
  var doctor = this.doctorlist.filter(obj=>obj.name.first.trim() ===this.selectedDoctor.trim());

  this.router.navigateByUrl('pages/charts/consultation?status='+"completed&id="+doctor[0].id+"&from="+this.from+"&to="+this.to+"&state="+this.bankCtrl3.value.name+"&pin="+this.bankCtrl2.value.name);
}
gotonewconsultation(){
  var doctor = this.doctorlist.filter(obj=>obj.name.first.trim() ===this.selectedDoctor.trim());


  this.router.navigateByUrl('pages/charts/consultation?status='+"completed&id="+doctor[0].id+"&from="+this.from+"&to="+this.to+"&state="+this.bankCtrl3.value.name+"&pin="+this.bankCtrl2.value.name);

}
gotocancel(){
  var doctor = this.doctorlist.filter(obj=>obj.name.first.trim() ===this.selectedDoctor.trim());

  this.router.navigateByUrl('pages/charts/consultation?status='+"cancled&id="+doctor[0].id+"&from="+this.from+"&to="+this.to+"&state="+this.bankCtrl3.value.name+"&pin="+this.bankCtrl2.value.name);
}
activedoctor(){
  this.router.navigateByUrl('pages/layout/stepper');

}
getDoctorDetails(id:any) {

    this.doctorService.doctorDetails(id).subscribe((response) => {
  
    this.online= response.res.online;
    this.doctor_name=response.res.name.first;
    this.doctor_details = response.res;

    })

}
appointmentcount(){
  console.log("========989")
if(this.accestype != 'doctor'){
    this.selectedDoctor=this.bankCtrl.value.name.first;

  var doctor = this.doctorlist.filter(obj=>obj.name.first.trim() ===this.selectedDoctor.trim());
  this.getServices(doctor[0].id,"pending",this.from, this.to, this.bankCtrl3.value.name,this.bankCtrl2.value.name);
}else{
  this.getServices(this.doctor_details.id,"pending",this.from, this.to, this.bankCtrl3.value.name,this.bankCtrl2.value.name);

}
}

goToLink(url:number){
  if(url == 1){
  window.open("https://www.mohfw.gov.in/pdf/Telemedicine.pdf", '_blank');
  }else if(url ==2){
    window.open("https://mciindia.org/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/Modification%20in%20Medicine%20lists%20in%20Telemedicine%20Practice%20Guidelin.pdf", '_blank');
  }else{
    window.open("https://mciindia.org/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/Final_FAQ-TELEMEDICINE%20%206-4-2020..pdf", '_blank');

  }
}

}
