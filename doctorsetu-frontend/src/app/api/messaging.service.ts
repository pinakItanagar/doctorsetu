import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { id } from '@swimlane/ngx-charts';
// import { AngularAgoraRtcService } from 'angular-agora-rtc';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';


@Injectable({
  providedIn: 'root'
})

export class MessagingService {
currentMessage = new BehaviorSubject(null);
constructor(private router:Router,private angularFireMessaging: AngularFireMessaging, private http: HttpClient, private agoraService:NgxAgoraService) {

}
token:any;
doctor_id:any;
requestPermission() {
this.angularFireMessaging.requestToken.subscribe(
(token:any) => {
    this.token=token;
console.log("token--->",  token);

// this.agoraService.client.join('f68a62f0ab5a4525b6c6d7c0e53baa5a', 'doctorSetu', 100000003, (uid) => {
//     console.log(uid);
// });


setTimeout(() => {
    // this.agoraService.client.leave(() => {
    //     console.log("Leavel channel successfully");

    //   }, (err) => {
    //     console.log("Leave channel failed", err);

    //   });
}, 12345);

},
(err) => {
console.error('Unable to get permission to notify.', err);
}
);
}

joinchannel(ChannelName){
    
    console.log("Doctor token:",ChannelName)
    console.log(this.agoraService)
    this.agoraService.client.join('f68a62f0ab5a4525b6c6d7c0e53baa5a', ChannelName, 10004, (uid) => {
        console.log(uid);
            // this.leavechannel();
    });
}

leavechannel(){
    this.agoraService.client.leave(() => {
        console.log("Leavel channel successfully");

      }, (err) => {
        console.log("Leave channel failed", err);

      });
}

receiveMessage() {
    
this.angularFireMessaging.messages.subscribe(
(payload:any) => {
    console.log(payload.data.patient_name)
    alert(" Patient"+payload.data.patient_name +" calling.. ");
        //  this.joinchannel(payload.data.ChannelName);
                // console.log("Join New message received. ", payload);
                this.currentMessage.next(payload);
                this.router.navigateByUrl('pages/charts/call');
        })
        }


        
savetoken(id: any){
  this.doctor_id=id;
  // return this.http.post<any>(`${environment.apiUrl}/doctor/profile/updateFirebaseToken`, {'token':this.token, 'id':id});

  }
  sendtoken(token){
      return this.http.post<any>(`${environment.apiUrl}/doctor/profile/updateFirebaseToken`, {'token':token, 'id':this.doctor_id});

  }

  sendnotification(ChannelName, ctype, docid, patient_id, patient_name, docName, remarks, ntype, token){
    fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'key=testkey'
            },
            body: JSON.stringify(
                {
                    "data": {
                        ChannelName: ChannelName,
                        ctype: ctype,
                        doctor_id: docid,
                        patient_id: patient_id,
                        patient_name:patient_name,
                        doctor_name: docName,
                        remarks:remarks,
                        ntype:ntype
                    },
                    "to": token
                })
        }).then((response) => {
          // return response
        })
}

rejectcall( patient_name, token){


    fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=testkey'
      },
      body: JSON.stringify(
        {
          "data": {
            ntype: 'reject',
            doctor_name: patient_name
          },
          "to": token
        })
    }).then((response) => response.json())
      .then((responseJson) => {
        //Actions.video({ ChannelName: ChannelName, ctype: ctype })
      })

  

}
}
