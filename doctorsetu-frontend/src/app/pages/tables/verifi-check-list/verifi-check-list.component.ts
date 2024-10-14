import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-verifi-check-list',
  templateUrl: './verifi-check-list.component.html',
  styleUrls: ['./verifi-check-list.component.scss']
})
export class VerifiCheckListComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  displayedColumns: string[] = ['position', 'name', 'symbol', 'delete'];
  data: any;
  dataSource: any;
  displayFile:any = "Enter Specialization File"
  fileupdate:boolean = false;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  symptomlist: Array<any> = [
    { code: 'p1', name: 'Covid19', status: 'Active' },
    { code: 'p2', name: 'Cardio', status: 'Active' },
    { code: 'p3', name: 'Cancer', status: 'Active' },
    { code: 'p4', name: 'Urology', status: 'Active' },

  ];
  status: boolean = false;
  statusedit:boolean = false;
  displayFileedit:any;
  specializationEdit_id:any;
  specializationnameeit:any;
  specialization: any;
  constructor(private http: HttpClient,
    private doctorService: DoctorService,
    public matDialog: MatDialog,
    private toastr: ToastrService

  ) { }

  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
  verify:any
  getverifiedlist(){
    this.doctorService.getverifiedlist().subscribe((verify) => {
      console.log(verify.response);
      // this.verify.verifylist=verify.response;
      // this.verify.verifylist.push({'name':'Other Documemts',verify:true})
      this.specialization =verify.response;
      this.dataSource =verify.response;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      verify.response.forEach((obj, index) => {
        obj.sl_num = index+1;

      });

    })
  }
  handleFileInputedit(event){
    this.fileupdate =true;
    console.log(event.target.files.length)
    this.displayFileedit = event.target.files[0].name;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
  handleFileInput(event:any) {
    // this.fileToUpload = files.item(0);
    console.log(event.target.files.length)
    this.displayFile = event.target.files[0].name;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      console.log(this.myForm)
    }
}
  showhidebox() {
    this.status = !this.status;
    this.statusedit =false;

  }
  showhideboxedit(){
    this.statusedit =!this.statusedit;
    this.status =false;

  }

  openModaledit(){
    this.doctorService.updateverify(this.editverifysl, this.editverifyename,this.editverifystatus).subscribe((verify: any) => {
      this.editverifyename="";
      this.editverifystatus="";
      this.editverifysl=''
      window.location.reload();

    })

  }
  verifyename:'';
  verifystatus:'';
  editverifyename:'';
  editverifystatus:'';
  editverifysl:''
  openModal() {
 
      this.doctorService.addverify(this.verifyename,this.verifystatus).subscribe((Language: any) => {
        this.verifyename='';
        this.verifystatus='';
        window.location.reload();
      })
}

  verification_delete:string;
  deleteit:boolean=false;
  editModal(element) {
    this.statusedit = !this.statusedit;
    this.status = false;

    this.editverifyename =element.name;
    this.editverifysl=element.id;
    this.editverifystatus =element.status
  }
  closealert(){
    this.deleteit=false;
  }
 
  specializationname: any;
  specializationfile:File;
  ngOnInit(): void {
    this.getverifiedlist();
    // this.getspecialitityList();

  }

  ngAfterViewInit(): void {
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  removeVerify(name: any) {
    this.deleteit=true;
    this.verification_delete=name;
    // this.doctorService.removeVerify(name).subscribe(() => {
    //    window.location.reload();

    // })
  }
  deleteVerification(){
    this.deleteit=false;

    this.doctorService.removeVerify(this.verification_delete).subscribe(() => {
      this.toastr.success('Succesfully Deleted');
      setTimeout(() => {
        window.location.reload();
      
      }, 1110);   
     })
   
  }
  
  getspecialitityList() {
    this.doctorService.getspecialitityList().subscribe((specialization) => {
   
    specialization.response.forEach((obj, index) => {
      
    });
    this.specialization =specialization.response;
    this.dataSource =specialization.response;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
      
    
    });
  }

}


export interface PeriodicElement {
  _id: string;
  name: string;
  icon: string;
  id: string;
  status: string;
}
