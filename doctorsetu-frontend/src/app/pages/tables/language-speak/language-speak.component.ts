import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-language-speak',
  templateUrl: './language-speak.component.html',
  styleUrls: ['./language-speak.component.scss']
})
export class LanguageSpeakComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  languages: any;
  dataSource: any;
  languagename:any='';
  languagecode:any='';
  languagesl:any;
  langugaestatus:any='active'
  editlangugaestatus:any='active'

  deleteit:boolean=false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  status: boolean = false;
  editstatus:boolean=false;
  constructor(private toastr: ToastrService,private doctorService: DoctorService, public matDialog: MatDialog) { }
  showhidebox() {
    this.languagename='';
    this.languagecode='';

    this.status = !this.status;
    this.editstatus = false;

    
  }
  showhideboxeditcancel(){
    this.editstatus = false;
    this.status = false;


  }
  showhideboxedit(element){
    this.languagesl=element.sl;
    this.languagename=element.name;
    this.languagecode=element.code;
    this.editlangugaestatus=element.status;

    console.log(element)
    this.status = false;

    this.editstatus = !this.editstatus;


  }
  openModal() {
    console.log()
    this.doctorService.addlanguage(this.languagename,this.languagecode, this.langugaestatus).subscribe((Language: any) => {
      this.languagename="";
      this.languagecode="";
      this.toastr.success('Succesfully Added');
      setTimeout(() => {

      window.location.reload();
    }, 1110);


    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);EditPopupComponent
    })
  }

  openModaledit(){
    this.doctorService.updatelanguage(this.languagesl,this.languagename,this.languagecode, this.editlangugaestatus).subscribe((Language: any) => {
      this.languagename="";
      this.languagecode="";
      this.toastr.success('Succesfully Updated');
setTimeout(() => {
  window.location.reload();

}, 1110);
      

    })

  }
  closealert(){
    this.deleteit =false;
  }

  deletelanguage(){
    this.deleteit =false;

    this.doctorService.removeLanguage(this.lang_delete).subscribe((res) => {
      this.toastr.success('Succesfully Deleted');
      setTimeout(() => {
        window.location.reload();
      
      }, 1110);
    })
  }
  openModalpopup() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // const modalDialog = this.matDialog.open(EditPopupComponent, dialogConfig);
  }

  deleteModalpopup(name) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // const modalDialog = this.matDialog.open(DeletePopupComponent, dialogConfig);
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    this.getLanguageList();


  }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

  }

  public doFilter = (value: string) => {

    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  getLanguageList() {
    this.doctorService.getLanguagesList().subscribe((Language: any) => {
    this.languages = Language.response;
    this.languages.forEach(function(row, index) {
      row.sl_num = index+1;
    });
   
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.languages);
    
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   
    })
  }
  lang_delete:any;
  removeLanguage(name: any) {
    this.lang_delete=name;
    this.deleteit=true;
  }

}
export interface PeriodicElement {
  sl: number;
  name: string;
  code: string;
  status: string;
}
