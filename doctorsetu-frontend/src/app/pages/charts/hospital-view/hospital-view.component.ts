import { Component, OnInit } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { DoctorService } from './../../../api/doctor.service';
import { stringify } from 'querystring';

@Component({
  selector: 'ngx-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss']
})
export class HospitalViewComponent implements OnInit {
  constructor(private doctorService:DoctorService, private router: Router, private activatedRoute: ActivatedRoute) {}


  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };

  branch_id:string;
  addbranch:string;
  id:string;
  edit:string='Edit'
  accestype:string;
  doctor_details:any;
  block:boolean=true;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.branch_id = this.activatedRoute.snapshot.queryParams.branch_id;

this.edit="Edit"
    this.addbranch = this.activatedRoute.snapshot.queryParams.addbranch;

    if(this.activatedRoute.snapshot.queryParams.addbranch != undefined){
      this.edit='Add Branch';
      this.block =false
    }else if(this.activatedRoute.snapshot.queryParams.hospital_id != undefined){
      this.edit='Add Hospital';
      this.block =false


    }
    this.doctorService.doctorDetailsbysessionID().subscribe(response=> {
      if(response.status == 200){
      console.log("ME API");
      this.id=response.res.id;
      // this.online= response.res.online;
      // this.doctor_name=response.res.name.first;
      this.doctor_details = response.res;
      this.accestype=response.res.accestype;
    
      
      }
    })
  }
}
