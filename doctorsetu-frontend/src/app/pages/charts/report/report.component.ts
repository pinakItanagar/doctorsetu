import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator,  } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {


  constructor( public matDialog: MatDialog) {}
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  
 


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }


}

export interface PeriodicElement {
  _id:string;
  sym_name: string;
  sym_desc: string;
  sym_icon: string;
  sym_status:string;
}
