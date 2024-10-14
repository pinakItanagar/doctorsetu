import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ModalComponent } from './modal/modal.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'ngx-specilization',
  templateUrl: './specilization.component.html',
  styleUrls: ['./specilization.component.scss']
})
export class SpecilizationComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete'];
  data: any;
  dataSource: any;
  fileToUpload: File = null;
  displayFile:any = "Upload Specialization File"
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
  editSpecilizationstatus:any='active';
  specilizationstatus:any='active';
  constructor(private toastr: ToastrService,private http: HttpClient,
    private doctorService: DoctorService,
    public matDialog: MatDialog,

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

  handleFileInputedit(event){
    console.log("======")
    if(event.target.files[0].size < 1000000){

    this.fileupdate =true;
    console.log(event.target.files.length)
    this.displayFileedit = event.target.files[0].name;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }else{

    // this.displayFile= "Upload Specialization File"

    this.toastr.info('Icon size is large!');

  }
  }
  handleFileInput(event:any) {
    // this.fileToUpload = files.item(0);
    if(event.target.files[0].size < 1000000){
    console.log(event.target.files[0].size)
    this.displayFile = event.target.files[0].name;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      console.log(this.myForm)
    }
  }else{
    this.displayFile= "Upload Specialization File"

    this.toastr.info('Icon size is large!');

  }
}
  showhidebox() {
    this.status = !this.status;
    this.statusedit =false;

  }
  showhideboxedit(){
    this.statusedit =!this.statusedit;
    this.status = false;

  }

  openModaledit(){
    console.log(this.displayFileedit)
    if(!this.fileupdate){
      var update={"_id":this.specializationEdit_id,"name":this.specializationnameeit,"status":this.editSpecilizationstatus}
      this.doctorService.updatespecialization(update).subscribe((specialization: any) => {
        this.specializationname="";
        this.fileToUpload = null;
        this.specializationEdit_id =null;
        this.toastr.success('Succesfully Updated');
        setTimeout(() => {
          window.location.reload();
        
        }, 1110);      })

    }else{
      console.log("--file to uplod--")
    const formData = new FormData();
    formData.append('icon', this.myForm.get('fileSource').value);
    formData.append('name', this.specializationnameeit);
    formData.append('_id', this.specializationEdit_id);
    formData.append('status', this.editSpecilizationstatus);



    this.doctorService.updatespecialization(formData).subscribe((specialization: any) => {
      this.specializationname="";
      this.fileToUpload = null;
      this.toastr.success('Succesfully Updated');
      setTimeout(() => {
        window.location.reload();
      
      }, 1110);



        })

  }
  }
  openModal() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    const formData = new FormData();
    let data =this.myForm.get('fileSource').value;
    formData.append('icon', this.myForm.get('fileSource').value);
    formData.append('specialization', this.specializationname);
    formData.append('status', this.specilizationstatus);

    

    this.doctorService.addspecialization( formData).subscribe((specialization: any) => {
      this.specializationname="";
      this.fileToUpload = null;
      this.toastr.success('Succesfully Added');
      setTimeout(() => {
        window.location.reload();
      
      }, 1110);    })
  }

  editModal(element) {
    this.statusedit = !this.statusedit;
    this.status = false;

    console.log(element);
    console.log("========================")
    this.specializationnameeit =element.name;
    this.specializationEdit_id =element._id;
    this.editSpecilizationstatus = element.status;
    this.displayFileedit= element.icon.substring(element.icon.lastIndexOf('/') + 1,element.icon.length);

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // const modalDialog = this.matDialog.open(EditPopupComponent, dialogConfig);
  }

  deleteModal() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    // dialogConfig.height = "350px";
    // dialogConfig.width = "600px";
    // const modalDialog = this.matDialog.open(DeletePopupComponent, dialogConfig);
  }

  specializationname: any='';
  specialization:any;
  specializationfile:File;
  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getspecialitityList()

  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  // addNewSymptom(event: any) {
  //   this.symptomlist.push(event);
  // }
  deleteit:boolean=false;
  specialization_delete:string;
  removeSpeclization(name: any) {
    this.deleteit = true;
    this.specialization_delete = name;

    // this.doctorService.removeSpeclization(name).subscribe(() => {
    //    window.location.reload();

    // })

  }
  closealert(){
    this.deleteit = false;
  }
  deleteSpecialization(){
    this.deleteit = false;

    this.doctorService.removeSpeclization(this.specialization_delete).subscribe(() => {
      this.toastr.success('Succesfully Deleted');
      setTimeout(() => {
        window.location.reload();
      
      }, 1110);   
     })
    
  }
  getspecialitityList() {
    this.doctorService.getspecialitityList().subscribe((specialization) => {
    console.log("---specialization----");
    console.log(specialization.response);
    console.log("---=====----");

    specialization.response.forEach((obj, index) => {
      if(obj.icon.length < 30) {obj.icon ="https://testpanoeditor.s3-ap-southeast-1.amazonaws.com/doctorsetu/specialization/"+obj.icon;}
      obj.sl_num = index+1;

    });
      // if (index === specialization.response.length-1){ 
        this.specialization =specialization.response;
    //  [{ "_id": "5f2a376878fae0ea4c8d1f2d", "name": "Dentist", "icon": "Dentist.png", "id": "1", "status": "enabled" }, { "_id": "5f2a377278fae0ea4c8d1f2e", "name": "Dietician", "icon": "Dietician.png", "id": "2", "status": "enabled" }, { "_id": "5f2a377978fae0ea4c8d1f2f", "name": "ENT Specialist", "icon": "ENT-Specialist.png", "id": "3", "status": "enabled" }, { "_id": "5f2a379f78fae0ea4c8d1f30", "name": "Gastroenterologist", "icon": "Gastroenterologist.png", "id": "4", "status": "enabled" }, { "_id": "5f2a37c678fae0ea4c8d1f31", "name": "Gynaecologist", "icon": "Gynaecologist.png", "id": "5", "status": "enabled" }, { "_id": "5f2a37f478fae0ea4c8d1f32", "name": "Mental Wellness", "icon": "Mental-Wellness.png", "id": "6", "status": "enabled" }, { "_id": "5f2a381878fae0ea4c8d1f33", "name": "Neurologist", "icon": "Neurologist.png", "id": "7", "status": "enabled" }, { "_id": "5f2a384078fae0ea4c8d1f34", "name": "Orthopedician", "icon": "Orthopedician.png", "id": "8", "status": "enabled" }, { "_id": "5f2a387478fae0ea4c8d1f35", "name": "Paediatrician", "icon": "Paediatrician.png", "id": "9", "status": "enabled" }, { "_id": "5f2a38f178fae0ea4c8d1f36", "name": "Physician", "icon": "Physician.png", "id": "10", "status": "enabled" }, { "_id": "5f2a392578fae0ea4c8d1f37", "name": "Skin & Hair Specialist", "icon": "Skin-&-Hair-Specialist.png", "id": "11", "status": "enabled" }, { "_id": "5f2a395078fae0ea4c8d1f38", "name": "Urologist", "icon": "Urologist.png", "id": "12", "status": "enabled" }]
    this.dataSource =specialization.response;
    //  [{ "_id": "5f2a376878fae0ea4c8d1f2d", "name": "Dentist", "icon": "Dentist.png", "id": "1", "status": "enabled" }, { "_id": "5f2a377278fae0ea4c8d1f2e", "name": "Dietician", "icon": "Dietician.png", "id": "2", "status": "enabled" }, { "_id": "5f2a377978fae0ea4c8d1f2f", "name": "ENT Specialist", "icon": "ENT-Specialist.png", "id": "3", "status": "enabled" }, { "_id": "5f2a379f78fae0ea4c8d1f30", "name": "Gastroenterologist", "icon": "Gastroenterologist.png", "id": "4", "status": "enabled" }, { "_id": "5f2a37c678fae0ea4c8d1f31", "name": "Gynaecologist", "icon": "Gynaecologist.png", "id": "5", "status": "enabled" }, { "_id": "5f2a37f478fae0ea4c8d1f32", "name": "Mental Wellness", "icon": "Mental-Wellness.png", "id": "6", "status": "enabled" }, { "_id": "5f2a381878fae0ea4c8d1f33", "name": "Neurologist", "icon": "Neurologist.png", "id": "7", "status": "enabled" }, { "_id": "5f2a384078fae0ea4c8d1f34", "name": "Orthopedician", "icon": "Orthopedician.png", "id": "8", "status": "enabled" }, { "_id": "5f2a387478fae0ea4c8d1f35", "name": "Paediatrician", "icon": "Paediatrician.png", "id": "9", "status": "enabled" }, { "_id": "5f2a38f178fae0ea4c8d1f36", "name": "Physician", "icon": "Physician.png", "id": "10", "status": "enabled" }, { "_id": "5f2a392578fae0ea4c8d1f37", "name": "Skin & Hair Specialist", "icon": "Skin-&-Hair-Specialist.png", "id": "11", "status": "enabled" }, { "_id": "5f2a395078fae0ea4c8d1f38", "name": "Urologist", "icon": "Urologist.png", "id": "12", "status": "enabled" }]

    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
      // }
      
    
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

