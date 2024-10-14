import { Component, OnInit } from '@angular/core';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { NavigationStart, Router,ActivatedRoute } from '@angular/router';
import { PatientService } from './../../../api/patient.service';
import { DoctorService } from './../../../api/doctor.service';

@Component({
    selector: 'ngx-calling',
    templateUrl: './calling.component.html',
    styleUrls: ['./calling.component.scss']
})
export class CallingComponent implements OnInit {
  title = 'angular-video';
  localCallId = 'agora_local';
  remoteCalls: string[] = [];

  private client: AgoraClient;
  private localStream: Stream;
  private uid: number;
  callstatus:boolean=false
  constructor(private doctorService:DoctorService,private patientService:PatientService,private ngxAgoraService: NgxAgoraService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.uid = Math.floor(Math.random() * 100);
  }
  config :any = { mode: 'rtc', codec: 'h264', areaCode:['GLOBAL']}

  ngOnInit() {
    this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignClientHandlers();
    if(this.activatedRoute.snapshot.queryParams.type == 'audio'){
      this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: false, screen: false });
      console.log(this.localStream)

    }else if(this.activatedRoute.snapshot.queryParams.type == 'video'){
      this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });


    }else{
      // this.localStream.close();
      console.log("close")
        this.router.navigateByUrl('pages/charts/consultation');
    }
    this.assignLocalStreamHandlers();
    // Join and publish methods added in this step
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
  }

  /**
   * Attempts to connect to an online chat room where users can host and receive A/V streams.
   */
  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join('f68a62f0ab5a4525b6c6d7c0e53baa5a',this.activatedRoute.snapshot.queryParams.id, this.uid, onSuccess, onFailure);
    // if(this.activatedRoute.snapshot.queryParams.type == 'audio'){
    //   this.muteVideo();
      
    // }
  }

  cutcall(){
// window.location.reload();
this.client.leave(() => {
  console.log("Leavel channel successfully");
  this.localStream.close();
  // this.router.navigateByUrl('pages/charts/consultation');
  this.callstatus=true;

}, (err) => {
  console.log("Leave channel failed", err);

});
  }

  sharescreenbtn:boolean=false;
  sharescreen(){
    this.sharescreenbtn=true
    this.client.leave(() => {
      console.log("Leavel channel successfully");
      this.localStream.close();
      // this.router.navigateByUrl('pages/charts/consultation');
      
      // this.callstatus=true;
      if(this.activatedRoute.snapshot.queryParams.type == 'audio'){
        this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: false, screen: true });
        console.log(this.localStream)
  
      }else if(this.activatedRoute.snapshot.queryParams.type == 'video'){
        this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: true });
      }
      this.assignLocalStreamHandlers();
      // Join and publish methods added in this step
      this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
  
    
    }, (err) => {
      console.log("Leave channel failed", err);
    
    });
  }


  leavechannel(){
    // window.location.reload();
      this.client.leave(() => {
        console.log("Leavel channel successfully");
        this.localStream.close();
        this.router.navigateByUrl('pages/charts/consultation');
      }, (err) => {
        console.log("Leave channel failed", err);

      });

  }

  createconsultation(){

    if(this.activatedRoute.snapshot.queryParams.illnessbrief){
      this.patientService.getpatiendetails(this.activatedRoute.snapshot.queryParams.pid).subscribe((response) => {
        var appointment_patientdata, appointment_doctordata;
        appointment_patientdata= response.res;

        this.doctorService.doctorDetails(this.activatedRoute.snapshot.queryParams.d_id).subscribe((response) => {
          appointment_doctordata= response.res;
          var calltype;
          if(this.activatedRoute.snapshot.queryParams.type == 'audio'){
            calltype='call'
          }else{
            calltype=this.activatedRoute.snapshot.queryParams.type;
          } 
    this.patientService.makeAppointment(this.activatedRoute.snapshot.queryParams.pid, this.activatedRoute.snapshot.queryParams.d_id,calltype,this.activatedRoute.snapshot.queryParams.illnessbrief, appointment_patientdata, appointment_doctordata).subscribe((response) => {

    this.client.leave(() => {
      console.log("Leavel channel successfully");
      this.localStream.close();
      this.router.navigateByUrl('pages/charts/consultation');
    }, (err) => {
      console.log("Leave channel failed", err);

    });
    
  })
})
})
}else{
  this.client.leave(() => {
    console.log("Leavel channel successfully");
    this.localStream.close();
    this.router.navigateByUrl('pages/charts/consultation');
  }, (err) => {
    console.log("Leave channel failed", err);

  });
}
  }

  mutevideo:boolean= false;
  muteaudio:boolean= false;

muteVideo(){
  if(!this.mutevideo){
    this.mutevideo = true;
  this.localStream.muteVideo();
  }else{
    this.mutevideo = false;

    this.localStream.unmuteVideo();

  }
}
  muteAudio(){

    if(!this.muteaudio){
      this.muteaudio = true;
    this.localStream.muteAudio();
    }else{
      this.muteaudio = false;
      this.localStream.unmuteAudio();
  
    }
  }

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
        // alert("Doctor cut the call"); 
        this.callstatus=true;
      }
    });
  }

  
  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    // this.localStream.on(StreamEvent.MediaAccessDenied, () => {
    //   console.log('accessDenied');
    // });
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
}