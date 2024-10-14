import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator,  } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientService } from './../../../api/patient.service';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ngx-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.scss']
})
export class PaymentOptionComponent implements OnInit {

  constructor( public matDialog: MatDialog,  private patientService:PatientService) {}
 

  symptoms:any;
  dataSource:any;
  doctorlist:any;
  popupstatus:boolean=false;

  cstatus: any = { "captured": "btn-primary", "refunded": "btn-success", "cancled": "btn-danger", "authorized": "btn-primary"}

  displayedColumns: string[] = ['paymentid', 'amount', 'email', 'contact','creat', 'status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public bankCtrl: FormControl = new FormControl();
 
  private banks: any[] = [{"id":"All","name":{"first":"All Doctor's","middle":"","last":""}}];

  public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  public bankFilterCtrl: FormControl = new FormControl();
  private _onDestroy = new Subject<void>();

 


  ngOnInit(): void {

    this.getpayementlist();
    this.filteredBanks.next(this.banks.slice());
    this.bankFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {

      this.filterBanks();
    });
  }

  
  ngAfterViewInit(): void {
  }

  currentediting:any;
  showpopup(element){
console.log(element)
if(element.status == 'authorized'){
  this.popupstatus=true;
this.currentediting= element;
}


  }

  capture(){
    this.popupstatus=false;

    this.patientService.capture(this.currentediting.id, this.currentediting.amount).subscribe((response) => {
      this.currentediting='';
      window.location.reload();

    })

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  
  closepopup(){
    this.popupstatus=false;
    this.currentediting= "";

  }
  getpayementlist(){
    this.patientService.listpayments().subscribe((response) => {
    console.log(response.res.items)
    this.dataSource=response.res.items;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })

}
private filterBanks() {
  this.banks=this.doctorlist
  if (!this.banks) {
    // return;
    this.banks=this.doctorlist
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
}

export interface PeriodicElement {
  _id:string;
  sym_name: string;
  sym_desc: string;
  sym_icon: string;
  sym_status:string;
}