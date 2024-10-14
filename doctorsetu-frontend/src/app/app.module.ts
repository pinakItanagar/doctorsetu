
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './api/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NgxAgoraModule } from 'ngx-agora';

import { ToastrModule } from 'ngx-toastr';

// import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatSelectSearchModule } from './../../src/app/pages/mat-select-search/mat-select-search.module';
// const agoraConfig: AgoraConfig = {
//   AppID:'f68a62f0ab5a4525b6c6d7c0e53baa5a'
//   // defaultChannel:'doctorSetu'
// };
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxAgoraModule.forRoot({ AppID: 'f68a62f0ab5a4525b6c6d7c0e53baa5a' }),
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    FormsModule,
    ModalModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [MessagingService,AsyncPipe],
  exports:[MatSelectSearchModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
