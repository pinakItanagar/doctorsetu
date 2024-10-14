import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../../../api/doctor.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

import { PatientService } from './../../../../api/patient.service';

@Component({
  selector: 'ngx-payment-setting',
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.scss']
})
export class PaymentSettingComponent implements OnInit {

  constructor(private patientService:PatientService, private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) { }
  id;
  
   doc_consultation_fee=0;
   doc_account_name;
   doc_account_number;
   doc_ifsc_code;
   doc_branch_name;
   doc_acc:boolean= false;
   doc_gst_no;
   hospital:any;
   doctor_details;
   branch_id:string;
   add_branch:string;
   ngOnInit(): void {
     this.id = this.activatedRoute.snapshot.queryParams.id;
     this.branch_id = this.activatedRoute.snapshot.queryParams.branch_id;
     this.add_branch = this.activatedRoute.snapshot.queryParams.addbranch;
   
     if(this.activatedRoute.snapshot.queryParams.hospital_id == undefined){
 this.gethospitaldetailsbyID()
   }
    //  this.getDoctorDetails(this.id)
   }
 
   gethospitaldetailsbyID(){
    this.patientService.gethospitaldetailsbyID(this.id).subscribe((response) => {
      delete response.response._id;
      this.hospital=response.response;

      if(this.branch_id != undefined ){
        var branch =this.hospital.branches.filter(obj => obj.branch_id === this.branch_id); 

        if(branch[0].doc_payment_setting){

          this.doc_account_name= branch[0].doc_payment_setting.doc_account_name || '';
      this.doc_account_number=  branch[0].doc_payment_setting.doc_account_number || '';
      this.doc_ifsc_code=  branch[0].doc_payment_setting.doc_ifsc_code || '';
      this.doc_branch_name= branch[0].doc_payment_setting.doc_branch_name || '';
      this.doc_gst_no= branch[0].doc_payment_setting.doc_gst_no || '';
   
      }
      }else{

          if(this.hospital.doc_payment_setting){

          
        
      // this.doc_consultation_fee= this.hospital.doc_payment_setting.doc_consultation_fee || 0;
      this.doc_account_name= this.hospital.doc_payment_setting.doc_account_name || '';
      this.doc_account_number=  this.hospital.doc_payment_setting.doc_account_number || '';
      this.doc_ifsc_code=  this.hospital.doc_payment_setting.doc_ifsc_code || '';
      this.doc_branch_name= this.hospital.doc_payment_setting.doc_branch_name || '';
      this.doc_gst_no= this.hospital.doc_payment_setting.doc_gst_no || '';
   
          }
        }    
    })
  
  }
//    getDoctorDetails(id: any) {
//      // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
//        this.doctorService.doctorDetails(id).subscribe((response) => {
//          console.log(response.res)
//          delete response.res._id;
 
//          this.doctor_details=response.res;
         
//          if(response.res.doc_payment_setting){
//          this.doc_consultation_fee= response.res.doc_payment_setting.doc_consultation_fee || 0;
//          this.doc_account_name= response.res.doc_payment_setting.doc_account_name || '';
//          this.doc_account_number=  response.res.doc_payment_setting.doc_account_number || '';
//          this.doc_ifsc_code=  response.res.doc_payment_setting.doc_ifsc_code || '';
//          this.doc_branch_name= response.res.doc_payment_setting.doc_branch_name || '';
//          this.doc_gst_no= response.res.doc_payment_setting.doc_gst_no || '';
//          }
//        })
 
//  }
 upload(){
  this.hospital.doc_payment_setting =  {
  //  doc_consultation_fee: this.doc_consultation_fee.toString(),
   doc_account_name: this.doc_account_name,
   doc_account_number: this.doc_account_number,
   doc_ifsc_code: this.doc_ifsc_code,
   doc_branch_name: this.doc_branch_name,
   doc_gst_no:this.doc_gst_no,
   doc_acc:true
   
 }
 if(this.branch_id != undefined){

 for(let i=0; i<this.hospital.branches.length;i++){
  if(this.hospital.branches[i].branch_id == this.branch_id){
    this.hospital.branches[i].doc_payment_setting = {
      //  doc_consultation_fee: this.doc_consultation_fee.toString(),
       doc_account_name: this.doc_account_name,
       doc_account_number: this.doc_account_number,
       doc_ifsc_code: this.doc_ifsc_code,
       doc_branch_name: this.doc_branch_name,
       doc_gst_no:this.doc_gst_no,
       doc_acc:true
       
     }
    this.doctorService.hospitalUpdate(this.id, this.hospital).subscribe((response) => {

      console.log("Updated succfully!");
      window.location.reload();
    })
  }
 }
}else{


//  console.log(this.doctor_details);
//  this.doctorService.doctorUpdate(this.id, this.doctor_details).subscribe((response) => {
  this.doctorService.hospitalUpdate(this.id, this.hospital).subscribe((response) => {

   console.log("Updated succfully!");
   window.location.reload();
 })
}
 }

}
