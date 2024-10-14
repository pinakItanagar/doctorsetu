import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http'; 
import { PatientService } from './../../../api/patient.service';
@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  displayedColumns: string[] = ['position', 'name', 'email', 'userType', 'delete']; 
 
  data: any;
  dataSource: any;
  displayFile:any = "Enter Specialization File"
  fileupdate:boolean = false;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  status: boolean = false;
  statusedit:boolean = false;
  displayFileedit:any;
  specializationEdit_id:any;
  specializationnameeit:any;
  specialization: any;
  constructor(private http: HttpClient,
    private doctorService: DoctorService,
    public matDialog: MatDialog,
    private patientService:PatientService

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
  }
  showhideboxedit(){
    this.statusedit =!this.statusedit;
  }
  deleteid;
  deleteuserType;
  deleteModal(element){
this.callstatus=!this.callstatus;
console.log(element)
this.deleteid= element.userID;
  this.deleteuserType= element.loginType;
  
  }
  leavechannel(){
    this.callstatus=false;
    this.deleteid=''
    this.deleteuserType=''
  }
  callstatus:boolean=false

  deleteit(){
    this.doctorService.deleteuser(this.deleteid, this.deleteuserType).subscribe((res: any) => {
      this.callstatus=false;
      this.deleteid=''
      this.deleteuserType=''
      window.location.reload();

        })

  }
  openModaledit(){
console.log(this.edit_userid,this.edit_useremail, this.edit_username, this.edit_userpassword, this.edit_userphnum, this.edit_usertype );
var data;
if(this.edit_usertype == "hospitaladmin"){
  var hostdata = this.hospitalList.filter(ele => ele.hosp_name == this.edit_hospital);
   data = {'userID': this.edit_userid, 'loginType':this.edit_usertype, "useremail":this.edit_useremail, "username":this.edit_username, "userpassword":this.edit_userpassword, "userphnum":this.edit_userphnum, 'hospital_id':hostdata[0].id}

   
}else if(this.edit_usertype == "branchadmin"){
  var hostdata = this.hospitalList.filter(ele => ele.hosp_name == this.edit_hospital);
  var branchdata  = hostdata[0].branches.filter(ele => ele.hosp_name == this.edit_branch);

  data = {'userID': this.edit_userid, 'loginType':this.edit_usertype, "useremail":this.edit_useremail, "username":this.edit_username, "userpassword":this.edit_userpassword, "userphnum":this.edit_userphnum,'hospital_id':hostdata[0].id, 'branch_id' : branchdata[0].branch_id}
}else{
  data = {'userID': this.edit_userid, 'loginType':this.edit_usertype, "useremail":this.edit_useremail, "username":this.edit_username, "userpassword":this.edit_userpassword, "userphnum":this.edit_userphnum}
} 

         this.doctorService.updateuserdetails(data).subscribe((res: any) => {
           window.location.reload();

         })

         

  //   if(!this.fileupdate){
  //     var update={"_id":this.specializationEdit_id,"name":this.specializationnameeit}
  //     this.doctorService.updatespecialization(update).subscribe((specialization: any) => {
  //       this.specializationname="";
  //       this.specializationEdit_id =null;
  //        window.location.reload();
  //     })

  //   }else{
  //     console.log("--file to uplod--")
  //   const formData = new FormData();
  //   formData.append('name', this.specializationnameeit);
  //   formData.append('_id', this.specializationEdit_id);


  //   this.doctorService.updatespecialization(formData).subscribe((specialization: any) => {
  //     this.specializationname="";
  //      window.location.reload();
  //   })

  // }
  }
  openModal() {
    const formData = new FormData();
    let data =this.myForm.get('fileSource').value;
    formData.append('specialization', this.specializationname);

    

    this.doctorService.addspecialization( formData).subscribe((specialization: any) => {
      this.specializationname="";
       window.location.reload();
    })
  }

  edit_userid:string;
  edit_username:string="we";
  edit_useremail:string;
  edit_userpassword:string;
  edit_userphnum:number;
  edit_usertype:string;
  edit_hospital:string;
  edit_branch:string;
    editModal(element) {
    console.log(element);
    this.doctorService.getuserdetails(element.userID,element.loginType).subscribe((data) => {

      console.log(data.response)
      this.edit_userid=element.userID;
      this.edit_username=data.response.name ||'';
      this.edit_useremail=data.response.email;
      // this.edit_userpassword=element.userpassword;
      this.edit_userphnum=data.response.phnumber;
      this.edit_usertype=element.loginType;
      this.statusedit = !this.statusedit;
      if(element.loginType == 'hospitaladmin'){
        var hostdata = this.hospitalList.filter(ele => ele.id == data.response.hospital_id);
        this.edit_hospital =hostdata[0].hosp_name;
      }else if(element.loginType == 'branchadmin'){
        console.log(this.hospitalList)
        console.log(data.response.hospital_id)
        var hostdata = this.hospitalList.filter(ele => ele.id == data.response.hospital_id);
       console.log(hostdata)
        this.edit_hospital =hostdata[0].hosp_name;
        this.branchList = hostdata[0].branches;

        var branchdata  = hostdata[0].branches.filter(ele => ele.branch_id == data.response.branch_id);
        this.edit_branch =branchdata[0].hosp_name;
      }

    })
  }

 
  specializationname: any;
  specializationfile:File;
  ngOnInit(): void {
    this.getuserlist()
this.gethospitalList()
  }

  ngAfterViewInit(): void {
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  removeSpeclization(name: any) {

    this.doctorService.removeSpeclization(name).subscribe(() => {
       window.location.reload();

    })
  }
  // getspecialitityList() {
  //   this.doctorService.getspecialitityList().subscribe((specialization) => {
  //   console.log("---specialization----");
  //   console.log(specialization.response);
  //   console.log("---=====----");

  //   specialization.response.forEach((obj, index) => {
      
  //   });
  //   this.specialization =specialization.response;
  //   this.dataSource =specialization.response;
  //   this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
      
    
  //   });
  // }
gethospitalList(){
  this.patientService.gethospitalList().subscribe((hospital) => {
    console.log(hospital.response)
this.hospitalList=hospital.response;

  })
}

  getuserlist() {
    this.doctorService.getuserlist().subscribe((access) => {

      access.response.forEach((obj, index) => {
        obj.sl_num = index+1;

        if(obj.loginID2 == undefined){
          // obj.loginID2= obj.loginID;
        }else{
          if(!obj.loginID2.includes('@')){
            obj.loginID2= obj.loginID;

          }

        }
        if(obj.loginType == "hospitaladmin") obj.showloginType = "Hospital Admin"
        if(obj.loginType == "verifiedauthority") obj.showloginType = "Verifying Authority"
        if(obj.loginType == "madicalauthority") obj.showloginType = "Medical Authority"
        if(obj.loginType == "branchadmin") obj.showloginType = "Branch Admin"
        if(obj.loginType == "admin") obj.showloginType = "Admin"

      console.log(access.response);
    });
    this.dataSource =access.response;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
      
    
    });
  }
 
   username:string;
   useremail:string;
   userpassword:string;
   userphnum:number;
   usertype:string;
   branch:string;
   hospitalList:any=[]
   branchList:any=[]
   hospital:any;
   changeHospital(){
      var data  = this.hospitalList.filter(ele => ele.hosp_name == this.hospital);
      this.branchList = data[0].branches;

   }
   edit_changeHospital(){
    var data  = this.hospitalList.filter(ele => ele.hosp_name == this.edit_hospital);
    this.branchList = data[0].branches;

 }
  createuser(){
    // username= email
    // loginType

    // password
    // email
    // phnum
    var data;
    //db.user.insertOne({loginExist:false, phnum:userphnum, userID:"875674674746", logintype:"email", loginType:"verifiedauthority", loginID:"verifiedauthority@doctorsetu.com", "password" : "fcea920f7412b5da7be0cf42b8c93759"});
    //db.madicalauthority.insertOne({id:"875674674747",name:"madical Authority", logintype:"email", email:"madicalauthority@doctorsetu.com", address:"jp Nagar", profilepic:"/pictures/profile/user/default-doctor-profile-icon.jpg"});
    console.log(this.username, this.useremail, this.userpassword, this.userphnum, this.usertype)
if(this.usertype == "hospitaladmin"){
  var hostdata = this.hospitalList.filter(ele => ele.hosp_name == this.hospital);
   data = {username:this.username,logintype:'email', loginType:this.usertype,phnum:this.userphnum,email:this.useremail, password:this.userpassword, hospital_id:hostdata[0].id }
}else if(this.usertype == "branchadmin"){
  var hostdata = this.hospitalList.filter(ele => ele.hosp_name == this.hospital);
  var branchdata  = hostdata[0].branches.filter(ele => ele.hosp_name == this.branch);

  data = {username:this.username,logintype:'email', loginType:this.usertype,phnum:this.userphnum,email:this.useremail, password:this.userpassword, hospital_id:hostdata[0].id, branch_id : branchdata[0].branch_id }
}else{
  data = {username:this.username,logintype:'email', loginType:this.usertype,phnum:this.userphnum,email:this.useremail, password:this.userpassword }
}
    this.doctorService.adduser(data).subscribe((adduser) => {

      window.location.reload()

    })
  }

}

export interface PeriodicElement {
  _id: string;
  name: string;
  email: string;
  userType: string;
  createId: string;
  id: string;
  status: string;
}
