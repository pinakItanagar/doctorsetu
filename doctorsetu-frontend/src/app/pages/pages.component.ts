import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { DoctorService } from './../api/doctor.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
 admin:boolean=true;
 constructor(private doctorService: DoctorService) { }

 ngOnInit(): void {
  // if(this.admin){
  //   this.menu = MENU_ITEMS.filter((item) => item.title !== "Masters")
  // }
  this.me();
}
accestype:string;
masterpermission:string;
hospitalpermission:string
dashboardpermission:string;
consultationpermission:string
me(){
  this.doctorService.doctorDetailsbysessionID().subscribe(response=> {
  if(response.status == 200){
  console.log("ME API");
 console.log(response.res.accestype)
 console.log("ME API");

  this.accestype = response.res.accestype;
 
  this.getaccesslist();

  
  
  }
})
}
getaccesslist()   {

this.doctorService.getaccesslist().subscribe((access) => {
console.log(access.response);

var master = access.response.filter(ele => ele.page == "master");
//var hospital = access.response.filter(ele => ele.page == "hospital");
var hospital = access.response.filter(ele => ele.page == "verifydoctor");
var dashboard = access.response.filter(ele => ele.page == "dashboard");
var consultation = access.response.filter(ele => ele.page == "consultation");

console.log(master);

// if(this.accestype == 'hospitalauthority') {
//   this.masterpermission = master[0].hospitalauthority;
//   this.hospitalpermission = hospital[0].hospitalauthority;

//   this.masterpermission = master[0].admin;
//  this.hospitalpermission = hospital[0].admin;

// }
if(this.accestype == 'admin') {
  console.log("adminnnnnnnnnn")
  this.masterpermission = master[0].admin;
  this.hospitalpermission = hospital[0].admin;

  this.dashboardpermission = dashboard[0].admin;
  this.consultationpermission = consultation[0].admin;
  console.log(this.masterpermission, this.hospitalpermission, this.masterpermission, this.consultationpermission)
};

if(this.accestype == 'doctor'){
   this.masterpermission = master[0].doctor;
   this.hospitalpermission = hospital[0].doctor;

   this.dashboardpermission = dashboard[0].doctor;
   this.consultationpermission = consultation[0].doctor;
   //alert("1.MASTER : " + this.masterpermission + "2.HOSPITAL :" + this.hospitalpermission + "3.DASH :" + this.hospitalpermission + "4.CON :" + this.consultationpermission);
  // alert(this.masterpermission);
  //console.log(this.masterpermission, this.hospitalpermission, this.masterpermission, this.consultationpermission)

  }
if(this.accestype == 'verifiedauthority'){ 
  this.masterpermission = master[0].verifiedauthority;
  this.hospitalpermission = hospital[0].verifiedauthority;

  this.dashboardpermission = dashboard[0].verifiedauthority;
 this.consultationpermission = consultation[0].verifiedauthority;

  
}

if(this.accestype == 'madicalauthority') {
  this.masterpermission = master[0].madicalauthority
  this.hospitalpermission = hospital[0].madicalauthority;

  this.dashboardpermission = dashboard[0].madicalauthority;
 this.consultationpermission = consultation[0].madicalauthority;

}
if(this.accestype == 'hospitaladmin') {
  this.masterpermission = master[0].hospitaladmin
  this.hospitalpermission = hospital[0].hospitaladmin;

  this.dashboardpermission = dashboard[0].hospitaladmin;
 this.consultationpermission = consultation[0].hospitaladmin;

}
if(this.accestype == 'branchadmin') {
  this.masterpermission = master[0].branchadmin
  this.hospitalpermission = hospital[0].branchadmin;


  this.dashboardpermission = dashboard[0].branchadmin;
 this.consultationpermission = consultation[0].branchadmin;
}




console.log(this.masterpermission, this.hospitalpermission, this.dashboardpermission, this.masterpermission, this.consultationpermission)

if(this.masterpermission == 'no' && this.hospitalpermission == 'no' && this.dashboardpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Masters" && item.title !== "Hospital" && item.title !== "Dashboard" && item.title !== "Consultation")) 

 





}else if(this.masterpermission == 'no' && this.hospitalpermission == 'no' && this.dashboardpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Masters" && item.title !== "Hospital" && item.title !== "Dashboard" )) 

  
}else if(this.masterpermission == 'no' && this.hospitalpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Masters" && item.title !== "Hospital" && item.title !== "Consultation")) 


}else if(this.masterpermission == 'no' && this.dashboardpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Dashboard" && item.title !== "Masters" && item.title !== "Consultation")) 


}else if(this.dashboardpermission == 'no' && this.hospitalpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Dashboard" && item.title !== "Hospital" && item.title !== "Consultation")) 


}else if(this.masterpermission == 'no' && this.hospitalpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Masters" && item.title !== "Hospital" )) 

  
}else if(this.masterpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Masters"  && item.title !== "Consultation")) 

  
}else if(this.masterpermission == 'no' && this.dashboardpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Dashboard" && item.title !== "Masters")) 
  
}else if(this.hospitalpermission == 'no' && this.dashboardpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Dashboard" && item.title !== "Hospital")) 
  
}else if(this.hospitalpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Hospital" && item.title !== "Consultation")) 
  
}else if(this.hospitalpermission == 'no' && this.dashboardpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Hospital" && item.title !== "Hospital")) 
  
}else if(this.dashboardpermission == 'no' && this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Dashboard" && item.title !== "Consultation")) 
  







}else if(this.masterpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Masters")) 


}else if( this.hospitalpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Hospital")) 


}else if( this.dashboardpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Dashboard")) 


}else if( this.consultationpermission == 'no'){
  this.menu = MENU_ITEMS.filter((item) => (item.title !== "Consultation")) 


} else {


   this.menu = MENU_ITEMS;
}


//    console.log(data)
//    this.masterpermission= data.masterpermission;
//         access.response.forEach((obj, index) => {
// // console.log(obj)
//         })
})
}
  menu = MENU_ITEMS;
}
