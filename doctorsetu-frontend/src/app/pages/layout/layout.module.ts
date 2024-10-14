import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule, NbTreeGridModule, NbIconModule, NbInputModule, NbSelectModule, NbDatepickerModule, NbToggleModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { NewsService } from './news.service';
import { AngularMaterialModule } from '../../angular-material.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalComponent } from './stepper/modal/modal.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorViewComponent } from './doctors/doctor-view/doctor-view.component';
import { DoctorEditProfileComponent } from './doctors/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorConsultationComponent } from './doctors/doctor-consultation/doctor-consultation.component';
import { DoctorFileUploadComponent } from './doctors/doctor-file-upload/doctor-file-upload.component';
import { AddModalComponent } from './doctors/doctor-consultation/add-modal/add-modal.component';
import { AgmCoreModule } from '@agm/core'; 
import {  MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PaymentSettingComponent } from './doctors/payment-setting/payment-setting.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP4Xpq-4aS7BjHyejmkG58RdrSz-UEtk0'
    }),
    NbRouteTabsetModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    NbCardModule,
    FormsModule,
    AngularMaterialModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbDatepickerModule,
    NbToggleModule,
  ],
  declarations: [
    LayoutComponent,
    TabsComponent,
    StepperComponent,
    ModalComponent,
    DoctorsComponent,
    DoctorViewComponent,
    DoctorEditProfileComponent,
    DoctorConsultationComponent,
    DoctorFileUploadComponent,
    AddModalComponent,
    PaymentSettingComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
