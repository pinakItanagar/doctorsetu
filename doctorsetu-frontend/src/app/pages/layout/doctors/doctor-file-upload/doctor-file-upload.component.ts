import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { DoctorService } from './../../../../api/doctor.service';
// import { Routes } from '@angular/router';
import { environment } from './../../../../../environments/environment';
import { Params, Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-doctor-file-upload',
  templateUrl: './doctor-file-upload.component.html',
  styleUrls: ['./doctor-file-upload.component.scss']
})
export class DoctorFileUploadComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor( private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) {}

  fileOneName:string;
  fileTwoName:string;
  fileThreeName:string;
  fileFourName:string;
  fileFiveName:string;

  fileOneData:string;
  fileTwoData:string;
  fileThreeData:string;
  fileFourData:string;
  fileFiveData:string;

  filedoconename:string="Upload File";
  filedoctwoname:string="Upload File";
  filedocthreename:string="Upload File";
  filedocfourname:string="Upload File";
  filedocfivename:string="Upload File";
  image1:any;
  id:string;
  image2:any;
  url1:any;
  url2:any;
  url3:any;
  url4:any;
  url5:any;
  image3:any;
  image4:any;
  image5:any;
  updatedata:any={};
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
   
    this.getDoctorDetails(this.id)
  }

  removeone(){
this.fileOneData =null;
this.fileOneName=null;
this.filedoconename="Upload File";

  }
  removetwo(){
this.fileTwoData =null;
this.fileTwoName=null;
this.filedoctwoname="Upload File";


  }
  removethree(){
    this.fileThreeData =null;
this.fileThreeName=null;
this.filedocthreename="Upload File";


  }
  removefour(){
    this.fileFourData =null;
this.fileFourName=null;
this.filedocfourname="Upload File";


  }
  removefive(){
    this.fileFiveData =null;
this.fileFiveName=null;
this.filedocfivename="Upload File";


  }
  getDoctorDetails(id:any) {
    // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
      this.doctorService.doctorDetails(id).subscribe((response) => {
        console.log(response.res)
        if(response.res.doctor_documents && response.res.doctor_documents.cert0){
        this.fileOneName = response.res.doctor_documents.cert0.name;
        this.filedoconename = response.res.doctor_documents.cert0.documentname;
        this.image1= environment.apiUrl+"/eprescription/"+response.res.doctor_documents.cert0.documentname;


        }
  if(response.res.doctor_documents && response.res.doctor_documents.cert1){
    this.fileTwoName = response.res.doctor_documents.cert1.name;
    this.filedoctwoname = response.res.doctor_documents.cert1.documentname;
    this.image2= environment.apiUrl+"/eprescription/"+response.res.doctor_documents.cert1.documentname;

  }
  if(response.res.doctor_documents && response.res.doctor_documents.cert2){
    this.fileThreeName = response.res.doctor_documents.cert2.name;
    this.filedocthreename = response.res.doctor_documents.cert2.documentname;
    this.image3= environment.apiUrl+"/eprescription/"+response.res.doctor_documents.cert2.documentname;


  }

  if(response.res.doctor_documents && response.res.doctor_documents.cert3){
    this.fileFourName = response.res.doctor_documents.cert3.name;
    this.filedocfourname = response.res.doctor_documents.cert3.documentname;
    this.image4= environment.apiUrl+"/eprescription/"+response.res.doctor_documents.cert3.documentname;

  }

  if(response.res.doctor_documents && response.res.doctor_documents.cert4){
    this.fileFourName = response.res.doctor_documents.cert4.name;
    this.filedocfourname = response.res.doctor_documents.cert4.documentname;
    this.image5= environment.apiUrl+"/eprescription/"+response.res.doctor_documents.cert4.documentname;

  }

 


      })
    }


  onSelectFile(event:any ) { 
    if(event.target.files.length > 0) {
      let blob = new Blob(event.target.files, { type: event.target.files[0].type });
let url = window.URL.createObjectURL(blob);

this.url1 = url;
      const file = event.target.files[0];
      this.filedoconename=file.name;
      this.myForm.patchValue({
        fileSource: file
      });
    }
    this.fileOneData =this.myForm.get('fileSource').value;
    this.image1 = event.target.result;

    
  }

  onSelectFiletwo(event:any ) { 

    let blob = new Blob(event.target.files, { type: event.target.files[0].type });
let url = window.URL.createObjectURL(blob);
this.url2 = url;
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filedoctwoname=file.name;
      this.myForm.patchValue({
        fileSource: file
      });
      
      
    }
    this.fileTwoData =this.myForm.get('fileSource').value;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.image2 = event.target.result;
        console.log(this.image2)

      }
    }

  }
  onSelectFilethree(event:any ) { 

    let blob = new Blob(event.target.files, { type: event.target.files[0].type });
let url = window.URL.createObjectURL(blob);
this.url3 = url;
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filedocthreename=file.name;
      this.myForm.patchValue({
        fileSource: file
      });
      
      
    }
    this.fileThreeData =this.myForm.get('fileSource').value;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.image3 = event.target.result;
        console.log(this.image3)

      }
    }

  }
//   onSelectFilethree(event:any ) { 
//     let blob = new Blob(event.target.files, { type: event.target.files[0].type });
// let url = window.URL.createObjectURL(blob);

// this.url3 = url;
//     if(event.target.files.length > 0) {
      
//       const file = event.target.files[0];
//       this.filedocthreename=file.name;
//       this.myForm.patchValue({
//         fileSource: file
//       });
//     }
//     this.fileThreeData =this.myForm.get('fileSource').value;
//     this.image3=this.myForm.get('fileSource').value

//   }

  onSelectFilefour(event:any ) { 

    let blob = new Blob(event.target.files, { type: event.target.files[0].type });
let url = window.URL.createObjectURL(blob);
this.url4 = url;
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filedocfourname=file.name;
      this.myForm.patchValue({
        fileSource: file
      });
      
      
    }
    this.fileFourData =this.myForm.get('fileSource').value;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.image4 = event.target.result;
        console.log(this.image4)

      }
    }

  }
//   onSelectFilefour(event:any ) {
//     let blob = new Blob(event.target.files, { type: event.target.files[0].type });
// let url = window.URL.createObjectURL(blob);

// this.url4 = url;
//     if(event.target.files.length > 0) {
      
//       const file = event.target.files[0];
//       this.filedocfourname=file.name;
//       this.myForm.patchValue({
//         fileSource: file
//       });
//     }
//     this.fileFourData =this.myForm.get('fileSource').value;
//     this.image4=this.myForm.get('fileSource').value

//   }

//   onSelectFilefive(event:any ) {
//     console.log(event);
//     let blob = new Blob(event.target.files, { type: event.target.files[0].type });
// let url = window.URL.createObjectURL(blob);
// console.log(url);
// this.url5 = url;

//     if(event.target.files.length > 0) {
      


//       const file = event.target.files[0];
//       this.filedocfivename=file.name;
//       this.myForm.patchValue({
//         fileSource: file
//       });
//     }
//     this.fileFiveData =this.myForm.get('fileSource').value;
//     this.image5=this.myForm.get('fileSource').value

//   }

  onSelectFilefive(event:any ) { 

    let blob = new Blob(event.target.files, { type: event.target.files[0].type });
let url = window.URL.createObjectURL(blob);
this.url5 = url;
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filedocfivename=file.name;
      this.myForm.patchValue({
        fileSource: file
      });
      
      
    }
    this.fileFiveData =this.myForm.get('fileSource').value;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.image5 = event.target.result;
        console.log(this.image5)

      }
    }

  }
  goToLink(url, image1){
    console.log(url)
    console.log(image1)
    if(image1.length > 2000){
    window.open(url, "_blank");
  }else{
    window.open(image1, "_blank");

  }
    
  }
  upload(){
    // doctor_id
    var formData = new FormData();
    
    if(this.fileOneData){
      formData.append('document', this.fileOneData);

    var data =   {
        "name" : this.fileOneName,
        "documentname" : this.filedoconename
        }
      this.updatedata['cert0']= data;

    }else if(this.fileOneName){

      var data =   {
        "name" : this.fileOneName,
        "documentname" : this.filedoconename
      };
      this.updatedata['cert0']= data;
        }

        if(this.fileTwoData){
          formData.append('document', this.fileTwoData);    
        var data =   {
            "name" : this.fileTwoName,
            "documentname" : this.filedoctwoname
            }
          this.updatedata['cert1']= data;
    
        }else if(this.fileTwoName){
    
          var data =   {
            "name" : this.fileTwoName,
            "documentname" : this.filedoctwoname
          };
          this.updatedata['cert1']= data;
            }

            if(this.fileThreeData){
              formData.append('document', this.fileThreeData);

            var data =   {
                "name" : this.fileThreeName,
                "documentname" : this.filedocthreename
                }
              this.updatedata['cert2']= data;
        
            }else if(this.fileThreeName){
        
              var data =   {
                "name" : this.fileThreeName,
                "documentname" : this.filedocthreename
              };
              this.updatedata['cert2']= data;
                }


                if(this.fileFourData){
                formData.append('document', this.fileFourData);
            
                var data =   {
                    "name" : this.fileFourName,
                    "documentname" : this.filedocfourname
                    }
                  this.updatedata['cert3']= data;
            
                }else if(this.fileFourName){
            
                  var data =   {
                    "name" : this.fileFourName,
                    "documentname" : this.filedocfourname
                  };
                  this.updatedata['cert3']= data;
                    }

                    
                if(this.fileFiveData){
                  formData.append('document', this.fileFiveData);
              
                  var data =   {
                      "name" : this.fileFiveName,
                      "documentname" : this.filedocfivename
                      }
                    this.updatedata['cert4']= data;
              
                  }else if(this.fileFourName){
              
                    var data =   {
                      "name" : this.fileFiveName,
                      "documentname" : this.filedocfivename
                    };
                    this.updatedata['cert4']= data;
                      }
if(this.fileOneData || this.fileTwoData || this.fileThreeData || this.fileFourData || this.fileFiveData){
        formData.append('updatedata', JSON.stringify(this.updatedata));
        formData.append('doctor_id', this.id);
        this.doctorService.doctordocumentsupload(formData).subscribe((result: any) => {

          window.location.reload();
  
  
        })
                    }else{
                      var date = {'doctor_id':this.id,'updatedata': this.updatedata} 
                      this.doctorService.doctordocumentsupload(date).subscribe((result: any) => {

                        window.location.reload();
                
                
                      })
                      
                    }
      
        }
      

}

