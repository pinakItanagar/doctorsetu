
import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator,  } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NbIconConfig } from '@nebular/theme';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  constructor() {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

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
  dataSource = ELEMENT_DATA;



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
