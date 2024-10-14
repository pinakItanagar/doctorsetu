import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'ngx-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'email', 'userType', 'doctor','hospitaladmin', 'branchadmin']; 
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: any;
  constructor(
    private doctorService: DoctorService,
    public matDialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getaccesslist()

  }

  getaccesslist() {
    this.doctorService.getaccesslist().subscribe((access) => {

      access.response.forEach((obj, index) => {
      
    });
    console.log(access.response)
    this.dataSource =access.response;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
      
    
    });
  }

  savesccess(){

  // var data = [{"_id":"5f99330b71f7c43ffc0bc0b7","id":1,"page":"dashboard","admin":"no","madicalauthority":"yes","verifiedauthority":"yes","hospitalauthority":"no", "doctor": "no","hospitaladmin":"no","branchadmin":"no"},{"_id":"5f993810983455d0ae7049be","id":2,"page":"master","admin":"yes","madicalauthority":"yes","verifiedauthority":"yes","hospitalauthority":"no", "doctor": "no","hospitaladmin":"no","branchadmin":"no"},{"_id":"5f993825983455d0ae7049bf","id":3,"page":"consultation","admin":"no","madicalauthority":"yes","verifiedauthority":"yes","hospitalauthority":"no", "doctor": "no","hospitaladmin":"no","branchadmin":"no"}, {"_id":"5f993825983455d0ae7049bd","id":4,"page":"verifydoctor","admin":"no","madicalauthority":"yes","verifiedauthority":"yes","hospitalauthority":"no", "doctor": "no","hospitaladmin":"no","branchadmin":"no"}, {"_id":"5f993825983455d0ae7049bS","id":5,"page":"hospital","admin":"no","madicalauthority":"yes","verifiedauthority":"yes","hospitalauthority":"no", "doctor": "no","hospitaladmin":"no","branchadmin":"no"}]
this.doctorService.saveaccesslist(this.dataSource._data._value).subscribe((access) => {
     
// this.doctorService.saveaccesslist(data).subscribe((access) => {
        window.location.reload();
        
      })
  }

 

}


export interface PeriodicElement {
  _id: string;
  name: string;
  email: string;
  userType: string;
  id: string;
  status: string;
}