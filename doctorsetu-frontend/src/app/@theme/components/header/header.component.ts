import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { PatientService } from './../../../api/patient.service';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DoctorService } from './../../../api/doctor.service';
import { MessagingService } from './../../../api/messaging.service';
import { Router } from '@angular/router'; 
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  doctor_details:{};
  currentTheme = 'default';

  //userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  userMenu = [ {}];

  currentMessage = new BehaviorSubject(null);
  message;
  
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private doctorService: DoctorService,
              protected router: Router,
              private breakpointService: NbMediaBreakpointsService,
              private angularFireMessaging: AngularFireMessaging,
              private  messagingService:MessagingService,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.requestPermission()
    this.receiveMessage()
    this.message = this.currentMessage
    this.currentTheme = this.themeService.currentTheme;
    this.doctor_details = {id:"b904fd47-6cc8-4d7e-85a0-e74d7676eb46"}
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);
      this.doctor_details = {id:"b904fd47-6cc8-4d7e-85a0-e74d7676eb46"}
      // this.getDoctorDetails();
      this.me();

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }
  me(){
    this.doctorService.doctorDetailsbysessionID().subscribe(response=> {
  
      console.log("me API");
      console.log(response.res)
       this.user.picture = environment.apiUrl+response.res.profilepic;

    this.user.name  = response.res.name.first || response.res.name;
    this.user.accestype  = response.res.accestype;
    if(this.user.accestype == "verifiedauthority") this.user.accestype = 'Verifying ' +'Authority';
    if(this.user.accestype == "madicalauthority") this.user.accestype = 'Medical ' +'Authority';


    },
    () => {
      // this.errors = error;
      this.router.navigateByUrl('/auth/login');
  
    },)
  
  }

  token:any;
  appointmentremarks:any=''
requestPermission() {
this.angularFireMessaging.requestToken.subscribe(
(token:any) => {
    this.token=token;
console.log("token--->",  token);
this.messagingService.sendtoken(token).subscribe(() => {
})



},
(err) => {
console.error('Unable to get permission to notify.', err);
}
);
}

callstatus:boolean=false;
joinagaoracall(){

    this.router.navigateByUrl('pages/charts/call?id='+this.routeurl.ChannelName+'&type='+this.routeurl.ctype+'&pid='+this.routeurl.patient_id+'&d_id='+this.routeurl.doctor_id+'&illnessbrief='+this.routeurl.illnessbrief);
    this.callstatus=false;
  
}

dontjoinagaoracall(){
  this.callstatus=false;
  console.log(this.routeurl.patient_id);

  this.patientService.getpatiendetails(this.routeurl.patient_id).subscribe((response) => {
    this.messagingService.rejectcall(this.routeurl.doctor_name, response.res.token);

  })


}
closepopup(){
  this.callstatus=false;

}
routeurl;

patientname:string='';
receiveMessage() {
this.angularFireMessaging.messages.subscribe(
(payload:any) => {
    if(payload.data.ChannelName){
    this.routeurl=payload.data
    this.callstatus=true;
    this.patientname=payload.data.patient_name;
    console.log(payload.data)
    this.appointmentremarks = payload.data.illnessbrief; 
    this.currentMessage.next(payload);
    }else{
      alert('Patient is busy');
      this.router.navigateByUrl('pages/charts/call');
setTimeout(() => {
  window.location.reload();

}, 12);
    }

        })
        }


  getDoctorDetails() {
    this.doctorService.doctorDetails("b904fd47-6cc8-4d7e-85a0-e74d7676eb46").subscribe((response) => {
      console.log(response.res.name.first)
       this.user.picture = "http://api.doctorsetu.com:8000"+response.res.profilepic;

    this.user.name  = response.res.name.first ;
    })

  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
