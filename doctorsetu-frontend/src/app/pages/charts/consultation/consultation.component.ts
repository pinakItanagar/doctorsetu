import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DoctorService } from './../../../api/doctor.service';
import { MatPaginator, } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NbIconConfig } from '@nebular/theme';
import { NavigationStart, Router,ActivatedRoute } from '@angular/router';
import { PatientService } from './../../../api/patient.service';
import { environment } from './../../../../environments/environment';
import { MessagingService } from './../../../api/messaging.service';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';


declare var require: any
const FileSaver = require('file-saver');
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AfterViewInit} from '@angular/core';
import {MatSelect} from '@angular/material/select';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';

import {
  ViewChildren,
  QueryList,
  ElementRef, Injectable
} from '@angular/core';
// import { threadId } from 'worker_threads';
import { collectExternalReferences } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'ngx-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  constructor(private ngxAgoraService:NgxAgoraService, private messagingService:MessagingService,private doctorService: DoctorService, private router: Router, private patientService:PatientService, private activatedRoute:ActivatedRoute) {
    this.uid = Math.floor(Math.random() * 100);

// this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
  }
  title = 'angular-video';
localCallId = 'agora_local';
remoteCalls: string[] = [];

private client: AgoraClient;
private localStream: Stream;
private uid: number;

  from: any;
  to: any;
  d: any;
  doctor_details: any;
  max: any;
  appointment_cancelres:string;
  currentediting:any={'id':'123','appointment_id':'0','name':"","doctor_details":{'name':{'first':'0'},'doc_smcregno':'','contact':{'telephone':['0']}},'appointment_patientdata':{'user_name':"","user_gender":'','user_dob':'','user_mobile':"",'appointment_desc':'','user_height':"","user_weight":'','user_bloodgroup':'','user_preexisting':''}};
  selectedDoctor: any;
  doctorlist: any=[]
  appointment_status: any = 'selectall';
  avaliableMode: any = { "call": "call", "video": "videocam", "whatsapp": "maps_ugc", "clinic": "home", "opd":"bed" }
  cstatus: any = { "pending": "btn-primary", "completed": "btn-success", "cancelled": "btn-danger" }
  popupstatus:boolean=false;
  cancelreason:boolean=false;
  popupstatusnew: boolean;
  specialization:string;
  degree:string;
  profilepicdoc:string;
  profilepic:string;
  petientdoc:any=[];
  patient:any;
  doctoview:boolean=false;
  patientview:boolean=false;
  consultationshow:boolean=false;
  show:string;

  patient_name:string;
  patient_gender:string;
  address:string;
  email:string;
  profileimg:string;
  blood_group:string;
  height:string;
  aadhaar:string;
  weight:string;
  patient_predisease:string;
  patient_allergicto:string;
  dob:string;
  phnumber:string;
  nickname:string;
  city:string;
  state:string;
  pin:string;
  
  viewdoctordetails:any=[];
  days: any = [{ name: 'mon', fname: 'monday' }, { name: 'tue', fname: 'tuesday' }, { name: 'wed', fname: 'wednesday' }, { name: 'thu', fname: 'thursday' }, { name: 'fri', fname: 'friday' }, { name: 'sat', fname: 'saturday' }, { name: 'sun', fname: 'sunday' }];
  appointmentType: any = [{ name: "call", icon: "call" }, { name: "video", icon: "videocam" }, { name: "whatsapp", icon: "maps_ugc" }, { name: "clinic", icon: "home" }, { name: "opd", icon: "bed" }];


  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  public bankCtrl: FormControl = new FormControl();
  public bankCtrl2: FormControl = new FormControl();
  public bankCtrl3: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
 public bankFilterCtrl: FormControl = new FormControl();
 public bankFilterCtrl2: FormControl = new FormControl();
 public bankFilterCtrl3: FormControl = new FormControl();

   /** control for the selected bank for multi-selection */
 public bankMultiCtrl: FormControl = new FormControl();
 public bankMultiCtr2: FormControl = new FormControl();
 public bankMultiCtr3: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
 public bankMultiFilterCtrl: FormControl = new FormControl();
 public bankMultiFilterCtrl2: FormControl = new FormControl();
 public bankMultiFilterCtrl3: FormControl = new FormControl();

 /** list of banks */
 private banks: any[] = [{"id":"All","name":{"first":"All Doctor's","middle":"","last":""}}];
 
 private banks2: any[] = [
  {name: 'All Pin Code', id: 'AAll Pin Code'},
  {name: '567826', id: '567826'},
  {name: '567823', id: '567823'},
  {name: '567666', id: '567666'},
  {name: '567876', id: '567876'},
  {name: '567888', id: '567888'},
  {name: '567899', id: '267899'},
  {name: '567860', id: '567860'},
  {name: '566899', id: '566899'},
  {name: '567811', id: '567811'} 
]


private banks3: any[] = [
 {name: 'All States', id: 'All States'},
 {name: 'Andhra Pradesh', id: 'Andhra Pradesh'},
 {name: 'Arunachal Pradesh', id: 'Arunachal Pradesh'},
 {name: 'Assam', id: 'Assam'},
 {name: 'Bihar', id: 'Bihar'},
 {name: 'Chhattisgarh', id: 'Chhattisgarh'},
 {name: 'Goa', id: 'Goa'},
 {name: 'Gujarat', id: 'Gujarat'},
 {name: 'Haryana', id: 'Haryana'},
 {name: 'Himachal Pradesh', id: 'Himachal Pradesh'},
 {name: 'Jammu and Kashmir', id: 'Jammu and Kashmir'},
 {name: 'Jharkhand', id: 'Jharkhand'},
 {name: 'Karnataka', id: 'Karnataka'},
 {name: 'Kerala', id: 'Kerala'},
 {name: 'Madhya Pradesh', id: 'Madhya Pradesh'},
 {name: 'Maharashtra', id: 'Maharashtra'},
 {name: 'Manipur', id: 'Manipur'},
 {name: 'Meghalaya', id: 'Meghalaya'},
 {name: 'Mizoram', id: 'Mizoram'},
 {name: 'Nagaland', id: 'Nagaland'},
 {name: 'Odisha', id: 'Odisha'},
 {name: 'Punjab', id: 'Punjab'},
 {name: 'Rajasthan', id: 'Rajasthan'},
 {name: 'Sikkim', id: 'Sikkim'},
 {name: 'Tamil Nadu', id: 'Tamil Nadu'},
 {name: 'Telangana', id: 'Telangana'},
 {name: 'Tripura', id: 'Tripura'},
 {name: 'Uttar Pradesh', id: 'Uttar Pradesh'},
 {name: 'Uttarakhand', id: 'Uttarakhand'},
 {name: 'West Bengal', id: 'West Bengal'}
]
 public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanks3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

 /** list of banks filtered by search keyword for multi-selection */
 public filteredBanksMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti2: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
 public filteredBanksMulti3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  ngOnInit(): void {
    
    this.me();
    this.filteredBanks.next(this.banks.slice());
    this.filteredBanksMulti.next(this.banks.slice());
 
    this.filteredBanks2.next(this.banks2.slice());
    this.filteredBanksMulti2.next(this.banks2.slice());

    this.filteredBanks3.next(this.banks3.slice());
    this.filteredBanksMulti3.next(this.banks3.slice());

    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {

        console.log("sdhgsdh")
        this.filterBanks();
      });

    this.bankMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
      });

      this.bankFilterCtrl2.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks2();
      });
      
    this.bankMultiFilterCtrl2.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti2();
      });

      this.bankFilterCtrl3.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks3();
      });
      
    this.bankMultiFilterCtrl3.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti3();
      });
    this.selectedDoctor = "All Doctor's"
    this.doctorlist = [];
    this.getDoctorlist();


    if(this.activatedRoute.snapshot.queryParams.from){
      this.from=this.activatedRoute.snapshot.queryParams.from;
    }else{
      this.d = new Date(new Date().getTime() - 144 * 60 * 60 * 1000);
      //this.from = [this.d.getFullYear(), ('0' + (this.d.getMonth() + 1)), ('0' + this.d.getDate()).slice(-2).slice(-2)].join('-');
      this.from=[this.d.getFullYear(),('0' + (this.d.getMonth() + 1)).slice(-2),('0' + this.d.getDate()).slice(-2)].join('-');
    }

    if(this.activatedRoute.snapshot.queryParams.to){
    this.to=this.activatedRoute.snapshot.queryParams.to;
    }else{
      this.to = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');

    }
    this.max = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');
    if(this.activatedRoute.snapshot.queryParams.status){
      this.appointment_status = this.activatedRoute.snapshot.queryParams.status;
    }

    
      
  }
  

 @ViewChild('singleSelect') singleSelect: MatSelect; 

 /** Subject that emits when the component has been destroyed. */
 private _onDestroy = new Subject<void>();
 ngAfterViewInit() {
  this.setInitialValue();
}

ngOnDestroy() {
  this._onDestroy.next();
  this._onDestroy.complete();
}


  /**
   * Attempts to connect to an online chat room where users can host and receive A/V streams.
   */
  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join('f68a62f0ab5a4525b6c6d7c0e53baa5a', 'doctorSetu_1602601770763_7423fd8cfc366', this.uid, onSuccess, onFailure);
    
  }

  /**
   * Attempts to upload the created local A/V stream to a joined chat room.
   */
  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        this.localStream.play(this.localCallId);
        if (onSuccess) {
          onSuccess();
        }
      },
      err => console.error('getUserMedia failed', err)
    );
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }
  accestype:string;
  id:string;
  online:string;
  doctor_name:string;
  me(){
    this.doctorService.doctorDetailsbysessionID().subscribe(response=> {
    if(response.status == 200){
    console.log("ME API");
    this.id=response.res.id;
    this.online= response.res.online;
    this.doctor_name=response.res.name.first;
    this.doctor_details = response.res;

    this.accestype=response.res.accestype;
    if(this.accestype == "doctor"){
      
    if(this.activatedRoute.snapshot.queryParams.id){

      this.getConsultationList(this.activatedRoute.snapshot.queryParams.id, "pending", this.from, this.to,"All States", "All Pin Code" );
     
    }else{

        this.getConsultationList(this.id, "pending", this.from, this.to,"All", "All");
     
      }
    }else{
      setTimeout(() => {
        this.getConsultationList("All", "pending", this.from, this.to,this.bankCtrl3.value.name,this.bankCtrl2.value.name);

      }, 123);

    }
   
  }
  },
  error => {

    this.router.navigateByUrl('/auth/login');

  },)

}
  joinagaoracall(){
    this.patientService.getpatiendetails(this.callto.appointment_uid).subscribe((response) => {
      let ChannelName = 'doctorSetu_' + new Date().getTime() + '_' + Math.random().toString(16).slice(2);

        if(this.callto.appointment_subtype == 'call'){
          this.messagingService.sendnotification(ChannelName,this.callto.appointment_subtype,this.callto.appointment_docid,this.callto.appointment_uid, this.callto.appointment_patientdata.user_name, this.callto.appointment_doctordata.doc_name, '', 'call', response.res.token);

        this.router.navigateByUrl('pages/charts/call?id='+ChannelName+'&type=audio'+'&pid='+this.callto.appointment_uid+'&d_id'+this.callto.appointment_docid);
        // this.router.navigateByUrl('pages/charts/call?id='+ChannelName+'&type=audio'+'&pid='+this.callto.appointment_uid+'&d_id'+this.callto.appointment_docid+'&illnessbrief='+this.callto.illnessbrief);

        }else if(this.callto.appointment_subtype == 'video'){
          this.messagingService.sendnotification(ChannelName,this.callto.appointment_subtype,this.callto.appointment_docid,this.callto.appointment_uid, this.callto.appointment_patientdata.user_name, this.callto.appointment_doctordata.doc_name, '', 'call', response.res.token);

          this.router.navigateByUrl('pages/charts/call?id='+ChannelName+'&type=video'+'&pid='+this.callto.appointment_uid+'&d_id='+this.callto.appointment_docid);
          // this.router.navigateByUrl('pages/charts/call?id='+ChannelName+'&type=video'+'&pid='+this.callto.appointment_uid+'&d_id='+this.callto.appointment_docid+'&illnessbrief='+this.callto.illnessbrief);

        }else{
          window.open("https://web.whatsapp.com/", '_blank');

        }
    })
  }

  dontjoinagaoracall(){
    this.callstatus=false;  
  
  }
  callstatus=false;
  callto;
        joinchannel(element){
          console.log(element.appointment_subtype)

          if(element.appointment_status =='pending' && element.appointment_subtype != 'clinic' && element.appointment_subtype != 'opd'){
          this.callto=element;
          this.callstatus =true;
          }

  // console.log(elelment)
  // this.patientService.getpatiendetails(element.appointment_uid).subscribe((response) => {
  //   if(response.res.token){
  //     //  this.messagingService.joinchannel("doctorSetu_"+response.res.appointment_uid);
  //     // this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
  //     this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
  //     this.assignClientHandlers();
  
  //     this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
  //     this.assignLocalStreamHandlers();
  //     // Join and publish methods added in this step
  //     this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));

  //   }else{
  //     console.log(response.res)
  //     alert("Doctor as no app token to calling...")
  //   }
  // })
}
/**
 * Sets the initial value after the filteredBanks are loaded initially
 */
private setInitialValue() {
  this.filteredBanks
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {          
      
      this.singleSelect.compareWith = (a: any, b: any) => a === b;
    });
    this.filteredBanks2
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {          
      
      this.singleSelect.compareWith = (a: any, b: any) => a === b;
    });
    this.filteredBanks3
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {          
      
      this.singleSelect.compareWith = (a: any, b: any) => a === b;
    });

    //  setTimeout(() => {
    //   this.bankCtrl.setValue(this.doctorlist[0]);

    //   this.bankCtrl2.setValue(this.banks2[0]);
    //   this.bankCtrl3.setValue(this.banks3[0]);
    //  }, 123);
    

   
    setTimeout(() => {
        this.bankCtrl.setValue(this.banks[0]);

        
       if(this.activatedRoute.snapshot.queryParams.id){
        var statedocs =this.banks.filter(obj => obj.id === this.activatedRoute.snapshot.queryParams.id);      
        this.bankCtrl.setValue(statedocs[0])
       }else{
        this.bankCtrl.setValue(this.banks[0]);

       }

       if(this.activatedRoute.snapshot.queryParams.state){
        var statedoc =this.banks3.filter(obj => obj.name === this.activatedRoute.snapshot.queryParams.state);      
        this.bankCtrl3.setValue(statedoc[0])
       }else{
        this.bankCtrl3.setValue(this.banks3[0]);

       }

       if(this.activatedRoute.snapshot.queryParams.pin){
        var doc =this.banks2.filter(obj => obj.name === this.activatedRoute.snapshot.queryParams.pin);      
        this.bankCtrl2.setValue(doc[0]);
        setTimeout(() => {
           this.appointmentcount();
  
        },2000);
      }else{
        this.bankCtrl2.setValue(this.banks2[0]);

      }

      

     }, 123);
    
}

private filterBanks() {
  this.banks=this.doctorlist
  if (!this.banks) {
    // return;
    this.banks=this.doctorlist
  }
  // get the search keyword
  let search = this.bankFilterCtrl.value;
  if (!search) {
    this.filteredBanks.next(this.banks.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks.next(
    this.banks.filter(bank => bank.name.first.toLowerCase().indexOf(search) > -1)
  );
}

private filterBanks2() {
  if (!this.banks2) {
    return;
  }
  // get the search keyword
  let search = this.bankFilterCtrl2.value;
  if (!search) {
    this.filteredBanks2.next(this.banks2.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks2.next(
    this.banks2.filter(bank2 => bank2.name.toLowerCase().indexOf(search) > -1)
  );
}

private filterBanks3() {
  if (!this.banks3) {
    return;
  }
  // get the search keyword
  let search = this.bankFilterCtrl3.value;
  if (!search) {
    this.filteredBanks3.next(this.banks3.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanks3.next(
    this.banks3.filter(bank3 => bank3.name.toLowerCase().indexOf(search) > -1)
  );
}

private filterBanksMulti() {
  if (!this.banks) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl.value;
  if (!search) {
    this.filteredBanksMulti.next(this.banks.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti.next(
    this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
  );
}

private filterBanksMulti2() {
  if (!this.banks2) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl2.value;
  if (!search) {
    this.filteredBanksMulti2.next(this.banks2.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti2.next(
    this.banks2.filter(bank2 => bank2.name.toLowerCase().indexOf(search) > -1)
  );
}


private filterBanksMulti3() {
  if (!this.banks3) {
    return;
  }
  // get the search keyword
  let search = this.bankMultiFilterCtrl3.value;
  if (!search) {
    this.filteredBanksMulti3.next(this.banks3.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredBanksMulti3.next(
    this.banks3.filter(bank3 => bank3.name.toLowerCase().indexOf(search) > -1)
  );
}
  
  getDoctorlist() {

    this.doctorService.getdoctorlist().subscribe((response) => {

      this.doctorlist = response.response;
      // this.bankCtrl.setValue(this.banks[0]);
      this.doctorlist.unshift({ "id": "All", "name": { "first": "All Doctor's", "middle": "", "last": "" } })
      if(this.activatedRoute.snapshot.queryParams.id){
      var doc =this.doctorlist.filter(obj => obj.id === this.activatedRoute.snapshot.queryParams.id);      
      this.selectedDoctor= doc[0].name.first;
      }
        // this.bankCtrl.setValue(this.doctorlist[0]);
        console.log(this.bankCtrl)

    })
    

  }
  appointmentcount() {
    console.log(this.bankCtrl)
    if(this.bankCtrl.value == undefined){
      if(this.activatedRoute.snapshot.queryParams.id){
        var statedocs =this.doctorlist.filter(obj => obj.id === this.activatedRoute.snapshot.queryParams.id);      
        this.bankCtrl.setValue(statedocs[0])
        this.selectedDoctor=this.bankCtrl.value.name.first;

       }else{
        this.bankCtrl.setValue(this.banks[0]);
        this.selectedDoctor=this.bankCtrl.value.name.first;

       }
    }else{
      this.selectedDoctor=this.bankCtrl.value.name.first;
      // this.bankCtrl.setValue(this.banks[0]);

    }

    var doctor = this.doctorlist.filter(obj => obj.name.first.trim() === this.bankCtrl.value.name.first.trim());
    if(this.accestype != 'doctor'){
    this.getConsultationList(doctor[0].id, "pending", this.from, this.to,this.bankCtrl3.value.name,this.bankCtrl2.value.name);
    }else{
      this.getConsultationList(this.id, "pending", this.from, this.to,this.bankCtrl3.value.name,this.bankCtrl2.value.name);

    }
    // this.getServices(doctor[0].id,"completed",this.from, this.to);
    // this.getServices(doctor[0].id,"cancled",this.from, this.to);
  }

  cancelconsultation(){  
    console.log(this.currentediting.appointment_paymentid);
    console.log(this.currentediting)
    // if(this.currentediting.appointment_paymentid.length>1){
    this.doctorService.canceleappointment({"appointment_paymentid":this.currentediting.appointment_paymentid,"appointment_id":this.currentediting.appointment_id, "appointment_desc":this.appointment_cancelres,'appointment_fee': parseInt(this.currentediting.appointment_fee)}).subscribe((response) => {
    console.log(this.currentediting.appointment_id);
    //   if(response.status == 200){
    // this.doctorService.canceleappointment({"appointment_id":this.currentediting.appointment_id, "appointment_desc":this.appointment_cancelres}).subscribe((response) => {
      window.location.reload();
  //   })
  // }
  })
// }else{
//   this.doctorService.canceleappointment({"appointment_id":this.currentediting.appointment_id, "appointment_desc":this.appointment_cancelres}).subscribe((response) => {
//     window.location.reload();
//   })
// }
  }

  cancelconsultationedit(){    
    this.doctorService.canceleappointment({"appointment_id":this.currentediting.appointment_id, "appointment_desc":this.appointment_cancelres}).subscribe((response) => {
      window.location.reload();
    })

  }
  
  getConsultationList(id, appointment_status: any, from_here: any, to_here: any, state, pin) {
    from_here = from_here.split("-").reverse().join("-");
    to_here = to_here.split("-").reverse().join("-");
    this.doctorService.doctorAppointmentListCount(id, appointment_status, from_here, to_here, state, pin).subscribe((response) => {
      this.currentediting=response.res.appointments[0];

      response.res.appointments.forEach((doc, index) => {
        console.log(doc)
        doc._id = index + 1;
      })
      response.res.appointments.forEach(element => {
        
        this.banks=this.doctorlist;
        if(element.appointment_status == 'cancled'){
          element.appointment_status="cancelled"
        }

        
        let doctor = this.doctorlist.filter(obj=>obj.id ===element.appointment_docid);
        element.doctor_details=doctor[0];
      })

      if (this.appointment_status != "selectall") {
        this.dataSource = response.res.appointments.filter(obj => obj.appointment_status.trim() === this.appointment_status.trim());;
        this.dataSource.forEach((doc, index) => {
          console.log(doc)
          doc._id = index + 1;
        })
      } else {
        this.dataSource = response.res.appointments;
      }
      if(this.accestype == "hospitaladmin"){
        this.dataSource = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.hospital_id));
        this.dataSource.forEach((doc, index) => {
          console.log(doc)
          doc._id = index + 1;
        })
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);

      }else if(this.accestype =="branchadmin"){ 
        this.dataSource = response.res.appointments.filter(obj => (obj.appointment_hosid == this.doctor_details.branch_id));
        this.dataSource.forEach((doc, index) => {
          console.log(doc)
          doc._id = index + 1;
        })
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);

      }else{
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);

      }



      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {
        // this.appointmentcount();

      },1000);


    })
  }

  public doFilter = (value: string) => {
    console.log("----")

    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  updateconsultation() {
    if (this.currentediting.appointment_status == "completed") {
      this.router.navigateByUrl('pages/charts/details?id=' + this.currentediting.appointment_id);

    } else {
      this.router.navigateByUrl('pages/charts/consultation-update?id=' + this.currentediting.appointment_id);
    }
  }
  downloadpdf(element){
    console.log("download pdf", element.reportpdfurl)
    // window.location.assign('http://devapi.doctorsetu.com/eprescription/APT_6002013.pdf');
    if(element.reportpdfurl != undefined){
      FileSaver.saveAs(environment.apiUrl+"/eprescription/"+element.reportpdf, element.reportpdf);
    }else{
      this.patientService.geteprescriptionpdf(element.id).subscribe((response) => {
        console.log(response.res)
        FileSaver.saveAs(environment.apiUrl+"/eprescription/"+element.id+".pdf", element.id+".pdf");

      })


    }

  }
  viewconsultation(element) {
    // if (element.appointment_status == "completed") {
      this.router.navigateByUrl('pages/charts/details?id=' + element.appointment_id);

    // } else {
    //   this.router.navigateByUrl('pages/charts/consultation-update?id=' + element.appointment_id);
    // }
  }
  changeconsultstatus(e) {
    console.log(e)
    this.cancelreason=false;
    if(e.target.value=='cancelled'){
      this.cancelreason=true;
    }
  }
  showpopup(element){
    if(element.appointment_status == 'pending'){
    this.currentediting=element

    this.popupstatus=true;
    }
  }
  

  closepopup(){
    // this.currentediting="";
    this.popupstatus=false;
    
  }

  viewpatient(element){
    console.log(element.appointment_patientdata);
    
    this.router.navigateByUrl('pages/charts/patient-profile?id='+element.appointment_uid);


  }
  viewdoctor(id){
    
    this.router.navigateByUrl('/pages/layout/doctors?id='+id);
    this.router.navigateByUrl('/pages/layout/doctors?id='+id.doctor_details.id);


  }
  viewiamge(event){
    console.log("=====")
    console.log(event)
    window.open(environment.apiUrl+"/uploads/"+event)

  }
  showpopupnew(element, show){
  console.log(element);
      element.updatedAt=element.updatedAt.slice(0,10).split("-").reverse().join("-");

  console.log("========================")
    if(show =='all'){
      this.patientview=false;
      this.doctoview=false;
      this.consultationshow=true;
    }else if(show == 'doctor'){

this.patientview=false;
      this.doctoview=true;
      this.consultationshow=false;
    }else{
      this.patientview=true;
      this.doctoview=false;
      this.consultationshow=false;
    }
    this.show=show;
    console.log(element);


    // if(element.appointment_status == 'pending'){
    this.currentediting=element
    

    this.petientdoc=[]
    if(element.document_file.doc_0){
      this.petientdoc.push(element.document_file.doc_0);
    }
    if(element.document_file.doc_1){
      this.petientdoc.push(element.document_file.doc_1);
    }if(element.document_file.doc_2){
      this.petientdoc.push(element.document_file.doc_2);
    }
    this.specialization=element.appointment_doctordata.doc_specialization;
    this.degree=element.appointment_doctordata.doc_qualification || '';
    this.popupstatusnew=true;
    if(element.appointment_doctordata.doc_profilepic) this.profilepicdoc=environment.apiUrl+'/'+element.appointment_doctordata.doc_profilepic; else this.profilepicdoc=environment.apiUrl+'/'+element.doctor_details.profileimg;
    if(element.appointment_patientdata.user_img) this.profilepic=environment.apiUrl+'/'+element.appointment_patientdata.user_img; else this.profilepic=environment.apiUrl+'/'+"pictures/profile/user/male-profile-icon.jpg";

    this.doctorService.doctorDetails(element.appointment_docid).subscribe((response) => {
  
      console.log(response.res)
     this.viewdoctordetails.name=response.res.name.first;
     this.viewdoctordetails.doc_dob=response.res.doc_dob;
     this.viewdoctordetails.gender=response.res.gender;
     this.viewdoctordetails.address=response.res.contact.address;

     this.viewdoctordetails.doc_aadhaar=response.res.doc_aadhaar;

     this.viewdoctordetails.mobile=response.res.contact.telephone[0];
     this.viewdoctordetails.email=response.res.contact.email[0];

     this.viewdoctordetails.doc_imrno=response.res.doc_imrno;
     this.viewdoctordetails.doc_smcregno=response.res.doc_smcregno;
     this.viewdoctordetails.degree=response.res.specializations[0].degree;

     this.viewdoctordetails.symptoms=response.res.symptoms.toString().split(',').join(', ');
     this.viewdoctordetails.languages=response.res.languages[0].split(',').join(', ');;
     this.viewdoctordetails.about=response.res.about;

     this.viewdoctordetails.isClinic=response.res.clinicdetails.isClinic;
     this.viewdoctordetails.doc_clinic_name=response.res.clinicdetails.doc_clinic_name;

     this.viewdoctordetails.doc_clinic_address=response.res.clinicdetails ? response.res.clinicdetails.doc_clinic_address : "";


     this.viewdoctordetails.doc_achievements=response.res.doc_achievements;
     
     this.viewdoctordetails.slotDetails=response.res.slotDetails;

     this.viewdoctordetails.specializations=response.res.specializations[0].name.split(',').join(', ');
  
      })
    
      console.log(element);
      
      this.patientService.getpatiendetails(element.appointment_uid).subscribe((responsepatient) => {
        this.patient = responsepatient.res;
        console.log(responsepatient.res)
        // this.patient_name=this.patient.patient_name;
        // this.nickname=this.patient.patient_name;
        // this.address=this.patient.patient_address;
        // this.patient_gender=this.patient.patient_gender
        // this.dob=this.patient.patient_dob;
        // this.city=this.patient.city;
        // this.state=this.patient.state;
        // this.pin=this.patient.pin;
        // this.patient_allergicto=this.patient.patient_allergicto;
        // this.phnumber=this.patient.phnumber;
        // this.email = this.patient.email;
        // this.patient_predisease=this.patient.patient_predisease
        // this.aadhaar=this.patient.patient_aadhaar;
        // this.weight=this.patient.patient_weight || "__";
        // this.height=this.patient.patient_height || "__";
        // this.blood_group=this.patient.patient_bloodgrp;
  
        // if(this.patient.profilepic) this.profileimg=environment.apiUrl+'/'+this.patient.profilepic; else this.profileimg=environment.apiUrl+'/'+this.patient.patient_image;
  
        this.patient_name=element.appointment_patientdata.user_name ;
        this.nickname=element.appointment_patientdata.user_name;
        this.address=element.appointment_patientdata.user_address;
        this.patient_gender=element.appointment_patientdata.user_gender
        this.dob=element.appointment_patientdata.user_dob;
        this.city=element.appointment_patientdata.user_city || 'Banglore';
        this.state=element.appointment_patientdata.user_state || 'Karnataka';
        this.pin=element.appointment_patientdata.user_pin || '12345';
        this.patient_allergicto=element.appointment_patientdata.user_alergicto;
        this.phnumber=element.appointment_patientdata.user_mobile;
        this.email = element.appointment_patientdata.user_email;
        this.patient_predisease=element.appointment_patientdata.user_preexisting
        this.aadhaar=element.appointment_patientdata.user_aadhaar;
        this.weight=element.appointment_patientdata.user_wiight || "__";
        this.height=element.appointment_patientdata.user_height || "__";
        this.blood_group=element.appointment_patientdata.user_bloodgroup;
  
        if(this.patient.profilepic) this.profileimg=environment.apiUrl+'/'+element.appointment_patientdata.user_img; else this.profileimg=environment.apiUrl+'/'+element.appointment_patientdata.user_name;
  
  
      })

    // }
  }
  

  closepopupedit(){
    // this.currentediting="";
    this.popupstatusnew=false;
  }

  changeconsultstatusedit(e) {
    console.log(e)
    this.cancelreason=false;
    if(e.target.value=='cancelled'){
      this.cancelreason=true;
    }
  }




  displayedColumns: string[] = [
    'position',
    'RefID',
    'DateandTime',
    'DoctorName',
    'ConsultationType',
    'PatientName',
    'NeworFollowup',
    'Status',
    'Description',
    'Actions',
  ];
  // dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  position: number;
  RefID: number;
  DoctorName: string;
  DateandTime: string;
  ConsultationType: string;
  PatientName: string;
  NeworFollowup: string;
  Status: string;
  Description: string;
  Actions: { view: string, edit: string, deletes: string };
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    DoctorName: 'Ravi Varma',
    RefID: 5,
    ConsultationType: 'Online',
    PatientName: 'Raji',
    DateandTime: '02/09/2020',
    NeworFollowup: 'yes',
    Description: '',
    Status: 'pending',
    Actions: {
      view: '',
      edit: '',
      deletes: '',
    },

  },
  {
    position: 2,
    DoctorName: 'Ravi Varma',
    RefID: 5,
    ConsultationType: 'Online',
    PatientName: 'Raji',
    DateandTime: '02/09/2020',
    NeworFollowup: 'yes',
    Description: '',
    Status: 'pending',
    Actions: {
      view: '',
      edit: '',
      deletes: '',
    },

  },

];
