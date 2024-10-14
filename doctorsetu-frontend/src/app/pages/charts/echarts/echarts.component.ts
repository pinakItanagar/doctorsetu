import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator,  } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NbIconConfig } from '@nebular/theme';
import { NavigationStart, Router } from '@angular/router';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { PatientService } from './../../../api/patient.service';

import { FormControl } from '@angular/forms';
import { Input} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';
import {  Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent {
  constructor(private patientService: PatientService, private router: Router, private doctorService:DoctorService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
patients:any=[];
dataSource:any;

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
this.me();
  //  this.filteredBanks.next(this.banks.slice());
  // this.filteredBanksMulti.next(this.banks.slice());

  this.filteredBanks2.next(this.banks2.slice());
  this.filteredBanksMulti2.next(this.banks2.slice());

  this.filteredBanks3.next(this.banks3.slice());
  this.filteredBanksMulti3.next(this.banks3.slice());

  this.filteredBanks4.next(this.banks4.slice());
  this.filteredBanksMulti4.next(this.banks4.slice());
  // listen for search field value changes
  // this.bankFilterCtrl.valueChanges
  //   .pipe(takeUntil(this._onDestroy))
  //   .subscribe(() => {
  //     this.filterBanks();
  //   });

    this.filteredBanks4.next(this.banks4.slice());
    this.filteredBanksMulti4.next(this.banks4.slice());
    // listen for search field value changes
    // this.bankFilterCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterBanks();
    //   });
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
  // this.bankMultiFilterCtrl.valueChanges
  //   .pipe(takeUntil(this._onDestroy))
  //   .subscribe(() => {
  //     this.filterBanksMulti();
  //   });

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
  this.getpatientList();

  
  }
})
}
 
//  public bankCtrl: FormControl = new FormControl();
 public bankCtrl2: FormControl = new FormControl();
 public bankCtrl3: FormControl = new FormControl();
 public bankCtrl4: FormControl = new FormControl();

 /** control for the MatSelect filter keyword */
// public bankFilterCtrl: FormControl = new FormControl();
public bankFilterCtrl2: FormControl = new FormControl();
public bankFilterCtrl3: FormControl = new FormControl();
public bankFilterCtrl4: FormControl = new FormControl();

  /** control for the selected bank for multi-selection */
// public bankMultiCtrl: FormControl = new FormControl();
public bankMultiCtrl2: FormControl = new FormControl();
public bankMultiCtrl3: FormControl = new FormControl();
public bankMultiCtrl4: FormControl = new FormControl();

 /** control for the MatSelect filter keyword multi-selection */
// public bankMultiFilterCtrl: FormControl = new FormControl();
public bankMultiFilterCtrl2: FormControl = new FormControl();
public bankMultiFilterCtrl3: FormControl = new FormControl();
public bankMultiFilterCtrl4: FormControl = new FormControl();


/** list of banks filtered by search keyword */
// public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
public filteredBanks2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
public filteredBanks3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
public filteredBanks4: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

/** list of banks filtered by search keyword for multi-selection */
// public filteredBanksMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
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

      
//  this.filteredBanks
//    .pipe(take(1), takeUntil(this._onDestroy))
//    .subscribe(() => {          
     
//      this.singleSelect.compareWith = (a: any, b: any) => a === b;
//    });

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
     //  this.bankCtrl.setValue(this.doctors[0]);

      this.bankCtrl2.setValue(this.banks2[0]);
      this.bankCtrl3.setValue(this.banks3[0]);
      this.bankCtrl4.setValue(this.banks4[0]);

    }, 1233);
 


}

// private filterBanks() {
//  if (!this.banks) {
//    return;
//  }
//  // get the search keyword
//  let search = this.bankFilterCtrl.value;
//  if (!search) {
//    this.filteredBanks.next(this.banks.slice());
//    return;
//  } else {
//    search = search.toLowerCase();
//  }
//  // filter the banks
//  this.filteredBanks.next(
//    this.banks.filter(bank => bank.name.first.toLowerCase().indexOf(search) > -1)
//  );
// }


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


// private filterBanksMulti() {
//  if (!this.banks) {
//    return;
//  }
//  // get the search keyword
//  let search = this.bankMultiFilterCtrl.value;
//  if (!search) {
//    this.filteredBanksMulti.next(this.banks.slice());
//    return;
//  } else {
//    search = search.toLowerCase();
//  }
//  // filter the banks
//  this.filteredBanksMulti.next(
//    this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
//  );
// }

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
 

  

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
  editdpctor(patient){
    console.log(patient)
    // window.location.replace("/pages/layout/doctors");
    this.router.navigateByUrl('pages/charts/patient-profile?id='+patient.patient_id);
  }
  editdpctormember(member){
    console.log(member)

    this.router.navigateByUrl('pages/charts/patient-profile?member_id='+member.member_id);


  }
  getpatientList(){
    console.log(this)
    this.patientService.getpatientList().subscribe((response) => {
      response.response.forEach((doc, index) => {
        doc._id = index + 1;
      })
      if(this.accestype == "doctor"){

        response.response.forEach(element => {

        if(element.count > 0){
          // this.patients.push(element);
          console.log(element.appointment)
          if(element.appointment.filter(ele => ele.appointment_docid == this.id)){
            // this.patients.push(element)
          }

        }

        });

      }else if(this.accestype == "hospitaladmin"){
        response.response.forEach(element => {

          if(element.count > 0){
            
            // for(let i=0;i>element.appointment.length-1;i++){
            //   this.patients.push(element);
            // }
            console.log(element.appointment.filter(ele => ele.appointment_hospital_id == this.id))
            if(element.appointment.filter(ele => ele.appointment_hospital_id == this.id).length>0){
              this.patients.push(element);
            }
  
          }
  
          });
      }else if(this.accestype == "branchadmin"){
        console.log(response.response);
        response.response.forEach(element => {

          if(element.count > 0){
            
            // for(let i=0;i>element.appointment.length-1;i++){
            //   this.patients.push(element);
            // }
            console.log(element.appointment.filter(ele => ele.appointment_hospital_id == this.id))
            if(element.appointment.filter(ele => ele.appointment_hospital_id == this.id).length>0){
              this.patients.push(element);
            }
  
          }
  
          });
      }else {
        this.patients = response.response;

      }
      this.patients.forEach(element => {
        if(!element.patient_address){
          element.patient_address = ""
        }
        
      });
      console.log(this.patients)
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.patients);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      

    })
  }

  doctorsearch() {
    console.log(this.dataSource);
    this.dataSource= this.patients;

    var filterlist = this.patients


    if(this.bankCtrl3.value.name != "All"){

      var g = filterlist.filter(obj=>obj.patient_address.includes(this.bankCtrl3.value.name));
      this.dataSource =g;
      filterlist = g

    }
    if(this.bankCtrl2.value.name != "All"){

      var pin = filterlist.filter(obj=>obj.patient_address.includes(this.bankCtrl2.value.name));
      this.dataSource =pin;
      filterlist = pin


    }

    if(this.bankCtrl4.value.name != "All"){
      console.log(filterlist);
      

      var city = filterlist.filter(obj=>obj.patient_address.includes(this.bankCtrl4.value.name));
      this.dataSource =city;
      filterlist = city

    }

    

  }
  displayedColumns: string[] = [
    'position', 
    'name', 
    'weight', 
    'symbol', 
    'Qualification', 
    'Regignation' , 
    'appointmentbook',
    'lastappointment',
    'completed',
    'status',
    'actions',
    'Members',
  ];
  // dataSource = ELEMENT_DATA;


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Qualification: number;
  Regignation: string;
  appointmentbook: number;
  lastappointment: string;
  completed: number;
  status: string;
  actions: {view: string, edit: string, deletes: string};
  Members: {K: string, N: string, P: string, S: string,};
}

const ELEMENT_DATA: PeriodicElement[] = [
{
  position: 1, 
  name: 'Ravi Varma', 
  weight: 5, 
  symbol: 'Male', 
  Qualification: 9908909988,
  Regignation: '02/09/2020',
  appointmentbook: 12,
  lastappointment: '12/09/2020',
  completed: 22,
  status: 'Active',
  actions: {
    view: '',
    edit: '',
    deletes: '',
  },
  Members: {
    K: 'K',
    N: 'N',
    P: 'P',
    S: 'S',
  }
   
},
{
  position: 2, 
  name: 'Karunya', 
  weight: 4, 
  symbol: 'Male' , 
  Qualification: 9908909988, 
  Regignation: '02/09/2020',
  appointmentbook: 9,
  lastappointment: '12/09/2020',
  completed: 16,
  status: 'Active',
  actions: {
    view: '',
    edit: '',
    deletes: '',
  },
  Members: {
    K: 'K',
    N: 'N',
    P: 'P',
    S: 'S',
  }
},
];