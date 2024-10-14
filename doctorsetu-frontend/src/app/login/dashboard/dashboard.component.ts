import { FormControl } from '@angular/forms';
import { DoctorService } from './../../api/doctor.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ExtraOptions, RouterModule } from '@angular/router';
import { MessagingService } from './../../api/messaging.service';
import { ToastrService } from 'ngx-toastr';

import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef, Injectable
} from '@angular/core';
import { PagesComponent } from '../../pages/pages.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private toastr: ToastrService,
    private doctorService: DoctorService, protected router: Router, private messagingService: MessagingService
  ) {

  }

  toggleNgModel = true;

  toggleFormControl = new FormControl();
  pending: any;
  completed: any;
  canceled: any;
  doctor_name: any;
  from: any;
  to: any;
  d: any;
  doctor_details: any;
  max: any;
  online: any;
  image: any;
  email: any;
  password: any;
  loginType: any;
  logintype: any;
  operators: any;
  operator: any;
  ngOnInit(): void {
    this.email = ""
    this.password = "";
    this.loginType = "doctor"
    this.logintype = "Email"
    this.operators = ["Admin", "Hospital", "Doctor"]
    this.operator = "Admin";
    this.pending = 0;
    this.completed = 0;
    this.canceled = 0;
    this.to = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');
    this.d = new Date(new Date().getTime() - 144 * 60 * 60 * 1000);

    this.doctor_details = { id: "b904fd47-6cc8-4d7e-85a0-e74d7676eb46" }
    this.from = [this.d.getFullYear(), ('0' + (this.d.getMonth() + 1)), ('0' + this.d.getDate()).slice(-2).slice(-2)].join('-');
    this.max = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');

    // this.alertService.success("HII HELOO",this.options)
    this.getServices("pending", this.from, this.to);
    this.getServices("completed", this.from, this.to);
    this.getServices("cancled", this.from, this.to);

    console.log("welcome", this.to, "----", this.from)
    // this.getDoctorDetails();
  }

  getServices(appointment_status, from_here, to_here) {
    from_here = from_here.split("-").reverse().join("-");
    to_here = to_here.split("-").reverse().join("-");


    this.doctorService.doctorAppointmentListCount("b904fd47-6cc8-4d7e-85a0-e74d7676eb46", appointment_status, from_here, to_here, "All", "All").subscribe((response) => {
      console.log("response")
      console.log(response.res)

      // if(appointment_status == 'pending'){
      this.pending = response.res.pending;
      // }else if(appointment_status == 'completed'){
      this.completed = response.res.completed;

      // }else{
      this.canceled = response.res.cancelled;

      // }


    })
  }
  // changeOnlineStatus(){
  //   console.log(this)
  //   this.doctorService.changeOnlineStatus("b904fd47-6cc8-4d7e-85a0-e74d7676eb46" ,this.online).subscribe((response) => {

  //   })
  // }
  getDoctorDetails() {
    console.log(this.from, "------------------")
    // this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
    //   console.log(response.res.online)
    //   this.online= response.res.online;
    //   this.doctor_name=response.res.name.first;
    //   this.doctor_details = response.res;
    //   this.image = "http://api.doctorsetu.com:8000"+this.doctor_details.profilepic;
    //   // imguri: Config.appapiurl + 'pictures/profile/user/patient-default-profile-icon-male.jpg',
    //   console.log("================")
    // })

  }
  emailnum: string;

  otpsend: boolean = true;
  callstatus: boolean = false;
  callstatustwo: boolean = false
  invalidnum: boolean = false;
  validnum: boolean = false;

  sendotp() {

    if (this.loginType != "") {

      console.log("OTP....", this.loginType)
      console.log(this.email)
      console.log(this.loginType)
      console.log(this.logintype)

      if (this.email.includes('@')) {
        this.logintype = "email"
      } else {
        this.logintype = "phnumber"
      }


      this.doctorService.sendotp(this.email, this.loginType, this.logintype.toLowerCase()).subscribe(response => {
        // this.toastr.info("otp sent!")
        this.otpsend = false;
        this.validnum = true;
        if (this.email.includes('@')) {
          this.emailnum = "Email Address " + this.email
        } else {
          this.emailnum = "Mobile Number +91-" + this.email

        }

      },
        error => {
          this.invalidnum = true;
      })

    } else {
      this.callstatus = true;

    }
  }


  closealert() {
    this.callstatus = false;
    this.callstatustwo = false;
    this.invalidnum = false;
    this.validnum = false;
  }

  sendcount: number = 0;
  resendotp() {
    if (this.sendcount < 3) {
      this.otpsend = false;
      console.log("OTP....")
      console.log(this.email)
      console.log(this.loginType)
      console.log(this.logintype)
      this.doctorService.sendotp(this.email, this.loginType, this.logintype.toLowerCase()).subscribe(response => {
        this.sendcount++
        // this.toastr.info("opt sent!")
        this.validnum = true;


      }, error => {

        this.invalidnum = true;
      })
    }

  }
  login() {

    this.doctorService.login(this.email, this.password, this.loginType, this.logintype).subscribe(response => {
      localStorage.setItem("sessionID", response.data.sessionID);
      this.messagingService.savetoken(response.data.details.id);
      this.router.navigateByUrl('/pages');
      this.toastr.success('Login Succesfully!');
      if (this.loginType == 'Doctor') {
        this.doctorService.changeOnlineStatus(response.data.details.id, true).subscribe((response) => {

        })

      }

    },
      error => {
        // this.toastr.error("Login failed!")
        this.callstatustwo = true;
      })
  }
}
