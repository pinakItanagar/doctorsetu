import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule, NbDatepickerModule, NbRadioModule, NbToggleModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalComponent } from './d3/modal/modal.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { ProfileViewComponent } from './patient-profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './patient-profile/profile-edit/profile-edit.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { DetailsComponent } from './details/details.component';
import { ConsultationUpdateComponent } from './consultation-update/consultation-update.component';
import { UpdateModalComponent } from './consultation/update-modal/update-modal.component';
import { ReportComponent } from './report/report.component';
import { CallingComponent } from './calling/calling.component';

import {
  NbActionsModule,
  NbButtonModule,
  NbUserModule,
  NbListModule,
} from '@nebular/theme';

import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule} from '@angular/forms';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';
import { ViewProfileComponent } from './hospital-view/view-profile/view-profile.component';
import { EditProfileComponent } from './hospital-view/edit-profile/edit-profile.component';
import { EnrollDoctorComponent } from './hospital-view/enroll-doctor/enroll-doctor.component';
import { ConsultationTimesComponent } from './hospital-view/consultation-times/consultation-times.component';
import { PaymentSettingComponent } from './hospital-view/payment-setting/payment-setting.component';
import { AgmCoreModule } from '@agm/core'; 

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP4Xpq-4aS7BjHyejmkG58RdrSz-UEtk0'
    }),
    ChartsRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
    FormsModule,
    AngularMaterialModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    
    
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    
    
    NgxEchartsModule,
    NbToggleModule,
    NgxChartsModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbTabsetModule,
    NbDatepickerModule,
    NbRadioModule,
    NbToggleModule,
  ],
  declarations: [...routedComponents, ...components, ModalComponent, PatientProfileComponent, ProfileViewComponent, ProfileEditComponent, ConsultationComponent, DetailsComponent, ConsultationUpdateComponent, UpdateModalComponent, CallingComponent, HospitalViewComponent, ViewProfileComponent, EditProfileComponent, EnrollDoctorComponent, ConsultationTimesComponent, PaymentSettingComponent],
})
export class ChartsModule {}
