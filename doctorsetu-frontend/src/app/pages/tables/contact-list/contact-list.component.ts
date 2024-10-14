import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  status: boolean = false;
  statusedit:boolean = false;
  editsymptomname:any;
  fileToUpload: File = null;
  displayFile:any = "Upload Symptom File"
  displayFileedit:any;
  symptomEdit_id:any;
  fileupdate:boolean = false;
  symptom_delete:string;
  editsymptomstatus:string='active';
  symptomstatus:string='active'

  deleteit:boolean=false;
  constructor(private toastr: ToastrService,private doctorService: DoctorService, public matDialog: MatDialog) { }

  showhidebox() {
    this.status = !this.status;
    this.statusedit = false;

  }
  showhideboxeditcancel(){
    this.statusedit = false;
    this.status = false;


  }
  
  showhideboxedit(element){
    console.log(element)
    this.symptomEdit_id  =element._id;
    this.statusedit = !this.statusedit;
    this.status = false;

    this.editsymptomname =element.sym_name;
    this.displayFileedit= element.sym_icon.substring(element.sym_icon.lastIndexOf('/') + 1,element.sym_icon.length);

  }
  openModaledit(){
    console.log("=======")

    console.log(this.fileupdate)
    console.log("=======")

    if(!this.fileupdate){
      var update={"_id":this.symptomEdit_id,"sym_name":this.editsymptomname, 'status':this.editsymptomstatus}
      this.doctorService.updatesymptom(update).subscribe((symptom: any) => {
        this.symptomname="";
        this.fileToUpload=null;
        this.toastr.success('Succesfully Updated');
        setTimeout(() => {
          window.location.reload();
        
        }, 1110);
            })
    }else{
      const formData = new FormData();
      let data =this.myForm.get('fileSource').value;
      formData.append('icon', this.myForm.get('fileSource').value);
      formData.append('sym_name', this.editsymptomname);
      formData.append('_id', this.symptomEdit_id);
      formData.append('status', this.editsymptomstatus);

  
      
  
      this.doctorService.updatesymptom(formData).subscribe((symptom: any) => {
        this.symptomname="";
        this.fileToUpload=null;
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
    formData.append('symptom', this.symptomname);
    formData.append('status', this.symptomstatus);

    

    this.doctorService.addsymptom(formData).subscribe((symptom: any) => {
      this.symptomname="";
      this.fileToUpload=null;
      this.toastr.success('Succesfully Added');
      setTimeout(() => {

      window.location.reload();
    }, 1110);    })
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  handleFileInputedit(event) {
    // this.fileToUpload = files.item(0);
    if(event.target.files[0].size < 1000000){

    this.fileupdate =true;
    console.log(event.target.files[0].name)
   this.displayFileedit = event.target.files[0].name;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      console.log(this.myForm)
    }
  }else{
    this.toastr.info('Icon size is large!');

  }
}
  handleFileInput(event) {
    // this.fileToUpload = files.item(0);
    if(event.target.files[0].size < 1000000){

    console.log(event.target.files[0].name)
   this.displayFile = event.target.files[0].name;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      console.log(this.myForm)
    }
  }else{
    this.toastr.info('Icon size is large!');

  }
}
get f(){
  return this.myForm.controls;
}
   
  editModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(EditPopupComponent, dialogConfig);
  }

  deleteModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(DeletePopupComponent, dialogConfig);
  }

  symptoms: any;
  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  symptomlist: Array<any> = [
    { code: 'p1', name: 'Covid19', status: 'Active' },
    { code: 'p2', name: 'Cardio', status: 'Active' },
    { code: 'p3', name: 'Cancer', status: 'Active' },
    { code: 'p4', name: 'Urology', status: 'Active' },

  ];



symptomname :any='';
symptomfile:any='';

  ngOnInit(): void {
    this.getSymptomsList();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

  }

  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  addNewSymptom(event: any) {
    this.symptomlist.push(event);
  }

  getSymptomsList() {
    this.doctorService.getSymptomsList().subscribe((symptoms) => {
    //   console.log("---symptoms----");
    //   console.log(symptoms.response);

    symptoms.response.forEach((obj, index) => {
      if(obj.sym_icon.length < 30) {obj.sym_icon ="https://testpanoeditor.s3-ap-southeast-1.amazonaws.com/doctorsetu/symptoms/"+obj.sym_icon;}

      obj.sl_num = index+1;

    });
    this.symptoms= symptoms.response;
    this.dataSource= symptoms.response;
    // this.symptoms = [{ "_id": "5f2936e8c617f86518bb02e7", "sym_name": "Covid19", "sym_desc": "", "sym_icon": "covid19.png", "sym_status": "active" }, { "_id": "5f2936fdc617f86518bb02e8", "sym_name": "Anxiety", "sym_desc": "", "sym_icon": "Anxiety.png", "sym_status": "active" }, { "_id": "5f293708c617f86518bb02e9", "sym_name": "Back Pain", "sym_desc": "", "sym_icon": "Back-Pain.png", "sym_status": "active" }, { "_id": "5f29371cc617f86518bb02ea", "sym_name": "Body Pain", "sym_desc": "", "sym_icon": "Body-Pain.png", "sym_status": "active" }, { "_id": "5f293729c617f86518bb02eb", "sym_name": "ColdCough", "sym_desc": "", "sym_icon": "ColdCough.png", "sym_status": "active" }, { "_id": "5f293736c617f86518bb02ec", "sym_name": "Constipation", "sym_desc": "", "sym_icon": "Constipation.png", "sym_status": "active" }, { "_id": "5f2937b1c617f86518bb02f0", "sym_name": "Fever", "sym_desc": "", "sym_icon": "Fever.png", "sym_status": "active" }, { "_id": "5f2937e3c617f86518bb02f3", "sym_name": "Headache", "sym_desc": "", "sym_icon": "Headache.png", "sym_status": "active" }, { "_id": "5f29384dc617f86518bb02f9", "sym_name": "Pregnancy Related", "sym_desc": "", "sym_icon": "Pregnancy-Related.png", "sym_status": "active" }, { "_id": "5f293871c617f86518bb02fb", "sym_name": "Skin Related", "sym_desc": "", "sym_icon": "Skin-Related.png", "sym_status": "active" }, { "_id": "5f29387ec617f86518bb02fc", "sym_name": "Stomach Ache", "sym_desc": "", "sym_icon": "Stomach-Ache.png", "sym_status": "active" }, { "_id": "5f29389bc617f86518bb02fd", "sym_name": "Tooth Pain", "sym_desc": "", "sym_icon": "Tooth-Pain.png", "sym_status": "active" }, { "_id": "5f2938a9c617f86518bb02fe", "sym_name": "Urinary Problem", "sym_desc": "", "sym_icon": "Urinary-Problem.png", "sym_status": "active" }, { "_id": "5f2938c3c617f86518bb0300", "sym_name": "Vomit Motion", "sym_desc": "", "sym_icon": "Vomit-Motion.png", "sym_status": "active" }, { "_id": "5f293b591d2776ac0b85afd4", "sym_name": "Throat Pain", "sym_desc": "", "sym_icon": "Throat-Pain.png", "sym_status": "active" }, { "_id": "5f2b9543bd85301473bf7e43", "sym_name": "Acidity", "sym_desc": "", "sym_icon": "Acidity.png", "sym_status": "active" }];
    // this.dataSource = [{ "_id": "5f2936e8c617f86518bb02e7", "sym_name": "Covid19", "sym_desc": "", "sym_icon": "covid19.png", "sym_status": "active" }, { "_id": "5f2936fdc617f86518bb02e8", "sym_name": "Anxiety", "sym_desc": "", "sym_icon": "Anxiety.png", "sym_status": "active" }, { "_id": "5f293708c617f86518bb02e9", "sym_name": "Back Pain", "sym_desc": "", "sym_icon": "Back-Pain.png", "sym_status": "active" }, { "_id": "5f29371cc617f86518bb02ea", "sym_name": "Body Pain", "sym_desc": "", "sym_icon": "Body-Pain.png", "sym_status": "active" }, { "_id": "5f293729c617f86518bb02eb", "sym_name": "ColdCough", "sym_desc": "", "sym_icon": "ColdCough.png", "sym_status": "active" }, { "_id": "5f293736c617f86518bb02ec", "sym_name": "Constipation", "sym_desc": "", "sym_icon": "Constipation.png", "sym_status": "active" }, { "_id": "5f2937b1c617f86518bb02f0", "sym_name": "Fever", "sym_desc": "", "sym_icon": "Fever.png", "sym_status": "active" }, { "_id": "5f2937e3c617f86518bb02f3", "sym_name": "Headache", "sym_desc": "", "sym_icon": "Headache.png", "sym_status": "active" }, { "_id": "5f29384dc617f86518bb02f9", "sym_name": "Pregnancy Related", "sym_desc": "", "sym_icon": "Pregnancy-Related.png", "sym_status": "active" }, { "_id": "5f293871c617f86518bb02fb", "sym_name": "Skin Related", "sym_desc": "", "sym_icon": "Skin-Related.png", "sym_status": "active" }, { "_id": "5f29387ec617f86518bb02fc", "sym_name": "Stomach Ache", "sym_desc": "", "sym_icon": "Stomach-Ache.png", "sym_status": "active" }, { "_id": "5f29389bc617f86518bb02fd", "sym_name": "Tooth Pain", "sym_desc": "", "sym_icon": "Tooth-Pain.png", "sym_status": "active" }, { "_id": "5f2938a9c617f86518bb02fe", "sym_name": "Urinary Problem", "sym_desc": "", "sym_icon": "Urinary-Problem.png", "sym_status": "active" }, { "_id": "5f2938c3c617f86518bb0300", "sym_name": "Vomit Motion", "sym_desc": "", "sym_icon": "Vomit-Motion.png", "sym_status": "active" }, { "_id": "5f293b591d2776ac0b85afd4", "sym_name": "Throat Pain", "sym_desc": "", "sym_icon": "Throat-Pain.png", "sym_status": "active" }, { "_id": "5f2b9543bd85301473bf7e43", "sym_name": "Acidity", "sym_desc": "", "sym_icon": "Acidity.png", "sym_status": "active" }];;

    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;



    })
  }
  symptom_id_delete:string;
  removeSymptom(name: any, symptom_id) {
      this.deleteit = true;
      this.symptom_delete = name;
      this.symptom_id_delete = symptom_id;
      console.log(name);
    //   this.doctorService.removeSymptom(name).subscribe(() => {
    //   window.location.reload();

    // })
  }
  closealert(){
    this.deleteit=false;
  }

  deletesymptom(){
    this.deleteit=false;

    this.doctorService.removeSymptom(this.symptom_id_delete).subscribe(() => {
      this.toastr.success('Succesfully Deleted');
      setTimeout(() => {
        window.location.reload();
      
      }, 1110);
    })
  }



}
export interface PeriodicElement {
  _id: string;
  sym_name: string;
  sym_desc: string;
  sym_icon: string;
  sym_status: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [{"_id":"5f2936e8c617f86518bb02e7","sym_name":"Covid19","sym_desc":"","sym_icon":"covid19.png","sym_status":"active"},{"_id":"5f2936fdc617f86518bb02e8","sym_name":"Anxiety","sym_desc":"","sym_icon":"Anxiety.png","sym_status":"active"},{"_id":"5f293708c617f86518bb02e9","sym_name":"Back Pain","sym_desc":"","sym_icon":"Back-Pain.png","sym_status":"active"},{"_id":"5f29371cc617f86518bb02ea","sym_name":"Body Pain","sym_desc":"","sym_icon":"Body-Pain.png","sym_status":"active"},{"_id":"5f293729c617f86518bb02eb","sym_name":"ColdCough","sym_desc":"","sym_icon":"ColdCough.png","sym_status":"active"},{"_id":"5f293736c617f86518bb02ec","sym_name":"Constipation","sym_desc":"","sym_icon":"Constipation.png","sym_status":"active"},{"_id":"5f2937b1c617f86518bb02f0","sym_name":"Fever","sym_desc":"","sym_icon":"Fever.png","sym_status":"active"},{"_id":"5f2937e3c617f86518bb02f3","sym_name":"Headache","sym_desc":"","sym_icon":"Headache.png","sym_status":"active"},{"_id":"5f29384dc617f86518bb02f9","sym_name":"Pregnancy Related","sym_desc":"","sym_icon":"Pregnancy-Related.png","sym_status":"active"},{"_id":"5f293871c617f86518bb02fb","sym_name":"Skin Related","sym_desc":"","sym_icon":"Skin-Related.png","sym_status":"active"},{"_id":"5f29387ec617f86518bb02fc","sym_name":"Stomach Ache","sym_desc":"","sym_icon":"Stomach-Ache.png","sym_status":"active"},{"_id":"5f29389bc617f86518bb02fd","sym_name":"Tooth Pain","sym_desc":"","sym_icon":"Tooth-Pain.png","sym_status":"active"},{"_id":"5f2938a9c617f86518bb02fe","sym_name":"Urinary Problem","sym_desc":"","sym_icon":"Urinary-Problem.png","sym_status":"active"},{"_id":"5f2938c3c617f86518bb0300","sym_name":"Vomit Motion","sym_desc":"","sym_icon":"Vomit-Motion.png","sym_status":"active"},{"_id":"5f293b591d2776ac0b85afd4","sym_name":"Throat Pain","sym_desc":"","sym_icon":"Throat-Pain.png","sym_status":"active"},{"_id":"5f2b9543bd85301473bf7e43","sym_name":"Acidity","sym_desc":"","sym_icon":"Acidity.png","sym_status":"active"}];

