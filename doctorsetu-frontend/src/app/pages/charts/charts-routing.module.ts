import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DetailsComponent } from './details/details.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { CallingComponent } from './calling/calling.component';

import { ConsultationUpdateComponent } from './consultation-update/consultation-update.component';
import { ReportComponent } from './report/report.component';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'echarts',
    component: EchartsComponent,
  }, 
  {
    path: 'd3',
    component: D3Component,
  },
  {
    path: 'hospital-view',
    component: HospitalViewComponent,
  },
  {
    path: 'patient-profile',
    component: PatientProfileComponent,
  },
  {
    path: 'consultation',
    component: ConsultationComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'consultation-update',
    component: ConsultationUpdateComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'call',
    component: CallingComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  EchartsComponent,
  D3Component,
  PatientProfileComponent,
  ConsultationComponent,
  CallingComponent,
  DetailsComponent
];
