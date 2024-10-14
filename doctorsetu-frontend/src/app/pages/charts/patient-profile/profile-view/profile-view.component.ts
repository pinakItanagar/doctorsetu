import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { PatientService } from './../../../../api/patient.service';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { environment } from './../../../../../environments/environment';
import { stringify } from 'querystring';

@Component({
  selector: 'ngx-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  constructor(private patientService: PatientService,private activatedRoute: ActivatedRoute) { }
  patient:any
  id:any;
  address:any;
  city:string=""
  state:string=""
  pin:string=""
  dob:string="";
  email:string=''
  patient_predisease:string;
  phnumber:string=""
  patient_name:string="name";
  profileimg:string=""
  patient_gender:string;
  aadhaar:string=''
  height:string='_'
  weight:string='_'
  blood_group:string=""
  patient_allergicto:string=""
  member_id:string;
  member:any;
  member_relationship:string="Self"
  nickname:string=""
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.member_id = this.activatedRoute.snapshot.queryParams.member_id;

    if(this.id){
    this.getpatientDetails();
    }else{
      this.getmemberDetails();

    }

  }


  getpatientDetails(){
    this.patientService.getpatiendetails(this.id).subscribe((response) => {
      this.patient = response.res;
      console.log(response.res)
      this.patient_name=this.patient.patient_name;
      this.nickname=this.patient.patient_name;
      this.address=this.patient.patient_address
      this.patient_gender=this.patient.patient_gender
      this.dob=this.patient.patient_dob;
      this.patient_allergicto=this.patient.patient_allergicto;
      this.phnumber=this.patient.phnumber;
      this.email=this.patient.email;
      this.patient_predisease=this.patient.patient_predisease
      this.aadhaar=this.patient.patient_aadhaar;
      this.weight=this.patient.patient_weight || "__";
      this.height=this.patient.patient_height || "__";
      this.blood_group=this.patient.patient_bloodgrp;

      if(this.patient.profilepic) this.profileimg=environment.apiUrl+'/'+this.patient.profilepic; else this.profileimg=environment.apiUrl+'/'+this.patient.patient_image;

      

    })
  }
  getmemberDetails(){
    this.patientService.getmemberdetails(this.member_id).subscribe((response) => {
      this.member = response.res[0];
      console.log(response.res[0])
      this.patient_name=this.member.member_name;
      this.address=this.member.member_address
      this.patient_gender=this.member.member_gender;
      this.dob=this.member.member_dob;
      this.patient_allergicto=this.member.member_allergicto;
      this.phnumber=this.member.member_phnumber;
      this.email=this.member.member_email;
      this.patient_predisease=this.member.member_predisease
      this.aadhaar=this.member.member_aadhaar;
      this.weight=this.member.member_weight || "__";
      this.height=this.member.member_height || "__";
      this.blood_group=this.member.member_bloodgrp;
      this.member_relationship=this.member.member_relationship;
      this.nickname=this.member.member_nickname;

      if(this.member.profilepic) this.profileimg=environment.apiUrl+'/'+this.member.profilepic; else this.profileimg=environment.apiUrl+'/'+this.member.member_image;

      

    })
  }
}
