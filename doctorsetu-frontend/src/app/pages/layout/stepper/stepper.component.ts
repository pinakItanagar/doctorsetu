import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { NbIconConfig } from '@nebular/theme';
import { NavigationStart, Router } from '@angular/router';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { escapeLabel } from '@swimlane/ngx-charts';

import { FormControl } from '@angular/forms';
import { Input} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';
import {  Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  constructor(private doctorService: DoctorService, private router: Router) { }




  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };
  symptoms: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  btnClick = function () {
    this.router.navigateByUrl('./doc-profile');
  };
  doctors: any=[];
  selectedDoctor: any;
  popupstatus: boolean = false;
  popupstatusview:boolean=false
  verify:any=[]
  doctorlist:any=[]
  presenverifyList =[]
  
  getverifiedlisttocheck(){
  this.doctorService.getverifiedlist().subscribe((verify) => {
    this.presenverifyList=verify.response

  })
  }
  confirm:boolean=false;


  Reviewupdate(){
    this.confirm=true;
    this.popupstatus = false;
    this.popupstatusview = false;

  }

  reviewnow(){
    this.confirm=false;

    this.popupstatus = true;
    this.popupstatusview = false;
  }

  showpopup(element) {
    console.log(element)
    this.verify.doctor_id=element.id
    this.verify.doctor_name=element.name.first;

    this.popupstatus = true;
    
    if(!element.verified){
      this.popupstatus = true;
      this.popupstatusview = false;

    }else{
      this.popupstatusview = true;
      this.popupstatus = false;


    }
    this.verify.verifylist=element.verify.verifylist;

    // if(element.verify && (element.verify.verifylist != undefined)){
      // this.doctorService.getverifiedlist().subscribe((verify) => {
        var check_array = this.verify.verifylist;
        if(check_array.length){
          this.presenverifyList.forEach(element => {
          this.add(this.verify.verifylist, element);
            // if(check_array.some(el => el.id != element.id)){
            //   console.log("pushing--------------")
            //   this.verify.verifylist.push(element);
            // }
     });
    }else{
      this.verify.verifylist = this.presenverifyList.filter(ele => ele.status == "Enable")
    }
        // this.verify.verifylist = element.verify.verifylist;
      this.verify.verifycomments = element.verify.verifycomments;
      // });

    // }else{

    //   this.doctorService.getverifiedlist().subscribe((verify) => {
    //     console.log(verify.response);
    //     this.verify.verifylist=verify.response;
    //   });

    // }
  }
   add(arr, name) {

    const found = arr.some(el => el.name === name.name);
    if (!found  && (name.status == "Enable")){
      console.log(name);
      console.log("add")
       arr.push({ id:name.id, name: name.name, status:name.status, verify:false });
      }
    return arr;
  }

  
  closepopup() {
    // this.currentediting="";
    this.confirm=false;

    this.popupstatus = false;
    this.popupstatusview=false;
this.verify.verifylist =[]
this.verify.verifycomments=''
this.verify.doctor_id=''
  }
  /** list of banks */
  private banks: any[]  = [{"id":"All","name":{"first":"All Doctor's","middle":"","last":""}}];
  private banks2: any[] = [
   {name: 'All', id: 'A'},
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

 private banks4: any[] = [
  {name: 'All', id: 'A'},
  {name: 'Banglore', id: '567826'},
  {name: 'Delhi', id: '567823'},
  {name: 'Hydrabad', id: '567666'}
]


private banks3: any[] = [
  {name: 'All', id: 'Allstate'},
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
  ngOnInit(): void {
this.getverifiedlisttocheck();
    this.filteredBanks.next(this.banks.slice());
   this.filteredBanksMulti.next(this.banks.slice());

   this.filteredBanks2.next(this.banks2.slice());
   this.filteredBanksMulti2.next(this.banks2.slice());

   this.filteredBanks3.next(this.banks3.slice());
   this.filteredBanksMulti3.next(this.banks3.slice());

   this.filteredBanks4.next(this.banks4.slice());
   this.filteredBanksMulti4.next(this.banks4.slice());
   // listen for search field value changes
   this.bankFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanks();
     });

     this.filteredBanks4.next(this.banks4.slice());
     this.filteredBanksMulti4.next(this.banks4.slice());
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
     this.bankFilterCtrl4.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanks4();
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
     this.bankMultiFilterCtrl4.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti4();
     });
    this.selectedDoctor = "Select All";
    this.getverifiedlist();
    this.me();

  }

  accestype:string;
  id:string;
  online:string;
  doctor_name:string;
  doctor_details:any;
  me(){
    this.doctorService.doctorDetailsbysessionID().subscribe(response=> {
    if(response.status == 200){
    console.log("ME API");
    this.id=response.res.id;
    this.online= response.res.online;
    this.doctor_name=response.res.name.first;
    this.doctor_details = response.res;

    this.accestype=response.res.accestype;
    this.getdoctorlist();

    
    
    }
  })
  }
  public bankCtrl: FormControl = new FormControl();
  public bankCtrl2: FormControl = new FormControl();
  public bankCtrl3: FormControl = new FormControl();
  public bankCtrl4: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
 public bankFilterCtrl: FormControl = new FormControl();
 public bankFilterCtrl2: FormControl = new FormControl();
 public bankFilterCtrl3: FormControl = new FormControl();
 public bankFilterCtrl4: FormControl = new FormControl();

   /** control for the selected bank for multi-selection */
 public bankMultiCtrl: FormControl = new FormControl();
 public bankMultiCtrl2: FormControl = new FormControl();
 public bankMultiCtrl3: FormControl = new FormControl();
 public bankMultiCtrl4: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
 public bankMultiFilterCtrl: FormControl = new FormControl();
 public bankMultiFilterCtrl2: FormControl = new FormControl();
 public bankMultiFilterCtrl3: FormControl = new FormControl();
 public bankMultiFilterCtrl4: FormControl = new FormControl();

 
 /** list of banks filtered by search keyword */
 public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks4: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

 /** list of banks filtered by search keyword for multi-selection */
 public filteredBanksMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti4: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

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

    this.filteredBanks4
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {          
      
      this.singleSelect.compareWith = (a: any, b: any) => a === b;
    });

     setTimeout(() => {
      //  this.bankCtrl.setValue(this.banks[0]);

       this.bankCtrl2.setValue(this.banks2[0]);
       this.bankCtrl3.setValue(this.banks3[0]);
       this.bankCtrl4.setValue(this.banks4[0]);

     }, 1233);
  


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

private filterBanks4() {

  if (!this.banks4) {
    return;
  }
  // get the search keyword
  let search = this.bankFilterCtrl4.value;
  if (!search) {
    this.filteredBanks4.next(this.banks4.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks4.next(
    this.banks4.filter(bank4 => bank4.name.toLowerCase().indexOf(search) > -1)
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

private filterBanksMulti4() {

  if (!this.banks4) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl4.value;
  if (!search) {
    this.filteredBanksMulti4.next(this.banks4.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti4.next(
    this.banks3.filter(bank4 => bank4.name.toLowerCase().indexOf(search) > -1)
  );
  
 }
  
  getSymptomsList() {
    this.doctorService.getSymptomsList().subscribe((symptoms) => {
      console.log("---symptoms----");
      console.log(symptoms.response);
      this.symptoms = symptoms.response;
      this.dataSource = symptoms.response;
    })
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  editdpctor(doctor) {
    console.log(doctor)
    // window.location.replace("/pages/layout/doctors");
    this.router.navigateByUrl('pages/layout/doctors?id=' + doctor.id);
  }
  doctorsearch() {
    console.log(this.dataSource);
    this.dataSource= this.doctors;

    if(this.bankCtrl.value.name.first != "All Doctor's"){

      var filterlist =  this.doctors.filter(obj=>obj.name.first.trim() ===this.bankCtrl.value.name.first.trim());

    this.dataSource =filterlist;
    }else{
      var filterlist = this.doctors
      this.dataSource= this.doctors;
    }

    if(this.bankCtrl3.value.name != "All"){

      var g = filterlist.filter(obj=>obj.contact.address.includes(this.bankCtrl3.value.name));
      this.dataSource =g;

    }
    if(this.bankCtrl2.value.name != "All"){

      var pin = filterlist.filter(obj=>obj.contact.address.includes(this.bankCtrl2.value.name));
      this.dataSource =pin;

    }

    if(this.bankCtrl4.value.name != "All"){

      var city = filterlist.filter(obj=>obj.contact.address.includes(this.bankCtrl4.value.name));
      this.dataSource =city;

    }

    

  }

  getverifiedlist(){
    this.doctorService.getverifiedlist().subscribe((verify) => {
      console.log(verify.response);
      this.verify.verifylist=verify.response;
 

    })
  }

  
  closepopupverify(){
            var result=[]
        this.verify.verifylist.forEach(element => {
          const found = this.presenverifyList.some(el => el.name === element.name);
                  if (found){
                 result.push(element)
                }
        })
            setTimeout(() => {
              this.popupstatus = false;
              this.doctorService.updateverifiedlist(this.verify.doctor_id,true,{'verifylist':result,'verifycomments':this.verify.verifycomments}).subscribe((verify) => {
        
              this.verify.doctor_id=''
              this.verify.verifylist=[]
              this.verify.verifycomments=''
               window.location.reload();
        
              })   
            }, 123);
    
  }
  closepopupreject(){
    
    console.log(this.verify)
    // this.currentediting="";
    
    // this.presenverifyList.forEach(function(i, idx, array){

      
      console.log(this.verify.verifylist);
      // var result = this.presenverifyList.filter(checkPerson => this.verify.verifylist.find(allowPerson => allowPerson.name === checkPerson.name));

var result=[]
      this.verify.verifylist.forEach(element => {
        let found = this.presenverifyList.some(el => el.name === element.name);
  if (found){
    if(element.status == "enable") {result.push(element);}
    
  }


      })
          setTimeout(() => {
            this.popupstatus = false;
            this.doctorService.updateverifiedlist(this.verify.doctor_id,false,{'verifylist':result,'verifycomments':this.verify.verifycomments}).subscribe((verify) => {
      
            this.verify.doctor_id=''
            this.verify.verifylist=[]
            this.verify.verifycomments=''
            window.location.reload();
      
            })   
          }, 123);

            
   


  }
  changepermission:string='no';
  getdoctorlist() {

    console.log("get doc list")
    this.doctorService.getdoctorlistall().subscribe((doctor) => {
      doctor.response.forEach((doc, index) => {
        console.log(doc)
        doc._id = index + 1;
      })
      this.doctorService.getaccesslist().subscribe((access) => {
        console.log(access.response)
   var data = access.response.filter(ele => ele.page == "verifydoctor");

   if(this.accestype == 'admin') this.changepermission = data[0].admin;

   if(this.accestype == 'doctor') this.changepermission = data[0].doctor;
   if(this.accestype == 'verifiedauthority') this.changepermission = data[0].verifiedauthority
   if(this.accestype == 'hospitalauthority') this.changepermission = data[0].hospitalauthority

   
   console.log(this.changepermission + "===" + this.accestype )
//    console.log(data)
//    this.changepermission= data.changepermission;
//         access.response.forEach((obj, index) => {
// // console.log(obj)
//         })
      })
        if(this.accestype == "doctor"){
          this.doctors= doctor.response.filter(ele => ele.id == this.id)
      this.doctorlist = this.doctors;
      this.bankCtrl.setValue(this.banks[0]);

      let perivatedate = Array.from(this.doctorlist);
      perivatedate.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
      this.banks = perivatedate;

      
        }else if(this.accestype == "hospitaladmin"){
         
          this.doctors=[]
          doctor.response.forEach(doc => {
            if(doc.hospital_enrolled){
              doc.hospital_enrolled.forEach(element => {
                if(element.hospital_id == this.doctor_details.hospital_id){
                  
                  this.doctors.push(doc)
                }
              });
            }
          });

      this.doctorlist= this.doctors;
      this.bankCtrl.setValue(this.banks[0]);

      let perivatedate = Array.from(this.doctorlist);
      perivatedate.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
      this.banks = perivatedate;

        }else if(this.accestype == "branchadmin"){
          console.log("=======================================")
          console.log("=======================================")
console.log(this)
          console.log("=======================================")
          this.doctors=[]
          doctor.response.forEach(doc => {
            if(doc.hospital_enrolled){
              doc.hospital_enrolled.forEach(element => {
                console.log(element)
                console.log(this.doctor_details)
                if(element.hospital_id == this.doctor_details.branch_id){
                
                  this.doctors.push(doc)
                }
              });
            }
          });

          // this.doctors = doctor.response;
      this.doctorlist= this.doctors;
      this.bankCtrl.setValue(this.banks[0]);

      let perivatedated = Array.from(this.doctorlist);
      perivatedated.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
      this.banks = perivatedated;

      

          // this.doctors = doctor.response;
          this.doctorlist= this.doctors;
          this.bankCtrl.setValue(this.banks[0]);
    
          let perivatedate = Array.from(this.doctorlist);
          perivatedate.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
          this.banks = perivatedate;
    
          
    
        }else{
          this.doctors = doctor.response;
          this.doctorlist= this.doctors;
          this.bankCtrl.setValue(this.banks[0]);
    
          let perivatedate = Array.from(this.doctorlist);
          perivatedate.unshift({"id":"All","name":{"first":"All Doctor's","middle":"","last":""}})
          this.banks = perivatedate;
    
          
    
        }
      
      this.doctors.forEach(element => {
        if(!element.verify){
          element.verify = {verifylist:[]}
        }
        if (element.clinicdetails) {
          element.Clinic = element.clinicdetails.doc_clinic_name;
          element.ClinicCity = element.clinicdetails.doc_clinic_address;
          element.ClinicPIN = element.clinicdetails.doc_clinic_pincode;
        }
      })

      //  [{ sl: 1, name: "English", code: "En", status: "Active" }, { sl: 2, name: "Arabic", code: "Ar", status: "Active" }, { sl: 3, name: "Chinese", code: "Ch", status: "Active" },
      // { sl: 4, name: "Czech", code: "Cz", status: "Active" }, { sl: 5, name: "Dutch", code: "Du", status: "Active" }, { sl: 6, name: "Estonian", code: "Es", status: "Active" },
      // { sl: 7, name: "French", code: "Fr", status: "Active" }, { sl: 8, name: "German", code: "Ge", status: "Active" }, { sl: 9, name: "Italian", code: "It", status: "Active" }, { sl: 10, name: "Polish", code: "Po", status: "Active" }, { sl: 11, name: "Portuguese", code: "Pg", status: "Active" },
      // { sl: 12, name: "Portuguese (Brazilian)", code: "Pg(Brazilian)", status: "Active" }, { sl: 13, name: "Russian", code: "Rus", status: "Active" }, { sl: 14, name: "Slovak", code: "Sl", status: "Active" }, { sl: 15, name: "Spanish", code: "Spa", status: "Active" }, { sl: 16, name: "Turkish", code: "Tur", status: "Active" },
      // { sl: 17, name: "Ukrainian", code: "Ukr", status: "Active" }]
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.doctors);

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;





    })


    // })
  }
  removeSymptom(name: any) {

    console.log(name);
    // this.doctorService.removeSymptom(name).subscribe(() => {
    // })
  }


  displayedColumns: string[] = [
    'position',
    // 'name', 
    'weight',
    'symbol',
    'Qualification',
    'Specialization',
    'VerificationStatus',
    'Clinic',
    'ClinicCity',
    'ClinicPIN',
    'NoofConsultations',
    'AppRegnDate',
    'actions'
  ];


  // this.dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  // name: string;
  position: number;
  weight: string;
  symbol: string;
  Qualification: string;
  Specialisation: string;
  VerificationStatus: string;
  Clinic: string;
  ClinicCity: string;
  ClinicPIN: number;
  NoofConsultations: number;
  AppRegnDate: string;
  actions: { view: string, edit: string, deletes: string };
}

// const ELEMENT_DATA: PeriodicElement[] = [
// {
//   position: 1, 
//   name: 'Karnataka', 
//   weight: 'ABCD3322Q', 
//   symbol: 'Dr.Niraj', 
//   Qualification: 'MBBS',
//   Specialisation: 'Consultant',
//   VerificationStatus: 'app',
//   Clinic: 'yes',
//   ClinicCity: 'BNG',
//   ClinicPIN: 560037,
//   NoofConsultations: 22,
//   AppRegnDate: '0920',
//   actions: {
//     view: '',
//     edit: '',
//     deletes: '',
//   },

// },
// {
//   position: 2, 
//   name: 'Delhi', 
//   weight: 'ABCD3322Q', 
//   symbol: 'Dr. Prasanth' , 
//   Qualification: 'MBBS', 
//   Specialisation: 'Consultant',
//   VerificationStatus: 'app',
//   Clinic: 'yes',
//   ClinicCity: 'Naioda',
//   ClinicPIN: 110001,
//   NoofConsultations: 26,
//   AppRegnDate: '0920',
//   actions: {
//     view: '',
//     edit: '',
//     deletes: '',
//   },
// },
// {
//   position: 3, 
//   name: 'Tamilanadu', 
//   weight: 'ABCD3322Q', 
//   symbol: 'Dr. Harasha' , 
//   Qualification: 'MBBS', 
//   Specialisation: 'Consultant',
//   VerificationStatus: 'app',
//   Clinic: 'yes',
//   ClinicCity: 'Chennai',
//   ClinicPIN: 600007,
//   NoofConsultations: 26,
//   AppRegnDate: '0920',
//   actions: {
//     view: '',
//     edit: '',
//     deletes: '',
//   },
// },
// ];
