import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../../../api/doctor.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-payment-setting',
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.scss']
})
export class PaymentSettingComponent implements OnInit {

  constructor(private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) { }
 id;
 
  doc_consultation_fee=0;
  doc_account_name;
  doc_account_number;
  doc_ifsc_code;
  doc_branch_name;
  doc_acc:boolean= false;
  doc_gst_no;

  doctor_details;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;

    this.getDoctorDetails(this.id)
  }

  getDoctorDetails(id: any) {
    // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
      this.doctorService.doctorDetails(id).subscribe((response) => {
        console.log(response.res)
        delete response.res._id;

        this.doctor_details=response.res;
        
        if(response.res.doc_payment_setting){
        this.doc_consultation_fee= response.res.doc_payment_setting.doc_consultation_fee || 0;
        this.doc_account_name= response.res.doc_payment_setting.doc_account_name || '';
        this.doc_account_number=  response.res.doc_payment_setting.doc_account_number || '';
        this.doc_ifsc_code=  response.res.doc_payment_setting.doc_ifsc_code || '';
        this.doc_branch_name= response.res.doc_payment_setting.doc_branch_name || '';
        this.doc_gst_no= response.res.doc_payment_setting.doc_gst_no || '';
        }
      })

}
upload(){
this.doctor_details.doc_payment_setting =  {
  doc_consultation_fee: this.doc_consultation_fee.toString(),
  doc_account_name: this.doc_account_name,
  doc_account_number: this.doc_account_number,
  doc_ifsc_code: this.doc_ifsc_code,
  doc_branch_name: this.doc_branch_name,
  doc_gst_no:this.doc_gst_no,
  doc_acc:true
  
}
console.log(this.doctor_details);
this.doctorService.doctorUpdate(this.id, this.doctor_details).subscribe((response) => {

  console.log("Updated succfully!");
  window.location.reload();
})
}
}
